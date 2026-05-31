// Admin mutation endpoint. Validates a shared password and performs writes
// using the service role. Anonymous reads happen client-side via supabase-js.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const ADMIN_EMAIL = "letzconnect@gmail.com";
const ADMIN_PASSWORD = "#LetzConnect3000";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

async function uploadDataUrl(dataUrl: string, prefix: string): Promise<string | null> {
  if (!dataUrl || !dataUrl.startsWith("data:")) return dataUrl || null;
  const match = dataUrl.match(/^data:(.+?);base64,(.+)$/);
  if (!match) return null;
  const [, mime, b64] = match;
  const ext = mime.split("/")[1]?.split("+")[0] || "bin";
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const path = `${prefix}/${Date.now()}-${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from("admin-uploads")
    .upload(path, bytes, { contentType: mime, upsert: false });
  if (error) throw new Error(`upload failed: ${error.message}`);
  const { data } = supabase.storage.from("admin-uploads").getPublicUrl(path);
  return data.publicUrl;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: "invalid json" }, 400);
  }

  const { email, password, action, payload } = body || {};

  // Login check
  if (action === "login") {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return json({ ok: true, token: btoa(`${ADMIN_EMAIL}:${Date.now()}`) });
    }
    return json({ ok: false, error: "Invalid credentials" }, 401);
  }

  // All other actions require valid credentials
  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return json({ error: "unauthorized" }, 401);
  }

  try {
    switch (action) {
      case "create_member": {
        const { name, role, story, image } = payload || {};
        if (!name) return json({ error: "name required" }, 400);
        const image_url = image ? await uploadDataUrl(image, "members") : null;
        const { data, error } = await supabase
          .from("admin_members")
          .insert({ name, role: role || null, story: story || null, image_url })
          .select()
          .single();
        if (error) throw error;
        return json({ ok: true, data });
      }
      case "create_timeline": {
        const { event_date, sort_date, title, description, image } = payload || {};
        if (!event_date || !title) return json({ error: "event_date and title required" }, 400);
        const image_url = image ? await uploadDataUrl(image, "timeline") : null;
        const { data, error } = await supabase
          .from("admin_timeline")
          .insert({ event_date, sort_date: sort_date || null, title, description: description || null, image_url })
          .select()
          .single();
        if (error) throw error;
        return json({ ok: true, data });
      }
      case "create_achievement": {
        const { title, description, event_date, image } = payload || {};
        if (!title) return json({ error: "title required" }, 400);
        const image_url = image ? await uploadDataUrl(image, "achievements") : null;
        const { data, error } = await supabase
          .from("admin_achievements")
          .insert({ title, description: description || null, event_date: event_date || null, image_url })
          .select()
          .single();
        if (error) throw error;
        return json({ ok: true, data });
      }
      case "delete": {
        const { table, id } = payload || {};
        const allowed = ["admin_members", "admin_timeline", "admin_achievements"];
        if (!allowed.includes(table) || !id) return json({ error: "bad request" }, 400);
        const { error } = await supabase.from(table).delete().eq("id", id);
        if (error) throw error;
        return json({ ok: true });
      }
      default:
        return json({ error: "unknown action" }, 400);
    }
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});
