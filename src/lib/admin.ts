import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "lc_admin_creds_v1";

export type AdminCreds = { email: string; password: string };

export function getAdminCreds(): AdminCreds | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setAdminCreds(creds: AdminCreds) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(creds));
}

export function clearAdminCreds() {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function isLoggedIn(): boolean {
  return !!getAdminCreds();
}

export async function adminCall(action: string, payload?: any) {
  const creds = getAdminCreds();
  const body: any = { action, payload };
  if (creds) {
    body.email = creds.email;
    body.password = creds.password;
  }
  const { data, error } = await supabase.functions.invoke("admin-mutate", { body });
  if (error) throw new Error(error.message);
  if (data && data.error) throw new Error(data.error);
  return data;
}

export async function adminLogin(email: string, password: string) {
  const { data, error } = await supabase.functions.invoke("admin-mutate", {
    body: { action: "login", email, password },
  });
  if (error) throw new Error(error.message);
  if (!data?.ok) throw new Error(data?.error || "Login failed");
  setAdminCreds({ email, password });
  return true;
}

// File to data URL (base64)
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Hooks to fetch admin-added extras (public reads)
export type ExtraMember = {
  id: string;
  name: string;
  role: string | null;
  image_url: string | null;
  story: string | null;
};

export type ExtraTimeline = {
  id: string;
  event_date: string;
  sort_date: string | null;
  title: string;
  description: string | null;
  image_url: string | null;
};

export type ExtraAchievement = {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  image_url: string | null;
};

export function useExtraMembers() {
  const [items, setItems] = useState<ExtraMember[]>([]);
  useEffect(() => {
    supabase
      .from("admin_members")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setItems((data as any) || []));
  }, []);
  return items;
}

export function useExtraTimeline() {
  const [items, setItems] = useState<ExtraTimeline[]>([]);
  useEffect(() => {
    supabase
      .from("admin_timeline")
      .select("*")
      .order("sort_date", { ascending: true, nullsFirst: false })
      .then(({ data }) => setItems((data as any) || []));
  }, []);
  return items;
}

export function useExtraAchievements() {
  const [items, setItems] = useState<ExtraAchievement[]>([]);
  useEffect(() => {
    supabase
      .from("admin_achievements")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setItems((data as any) || []));
  }, []);
  return items;
}
