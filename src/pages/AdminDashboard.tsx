import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  adminCall,
  clearAdminCreds,
  fileToDataUrl,
  isLoggedIn,
  useExtraAchievements,
  useExtraMembers,
  useExtraTimeline,
} from "@/lib/admin";
import { toast } from "@/hooks/use-toast";
import { LogOut, Trash2 } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/admin/login");
  }, [navigate]);

  const refresh = () => setTick((t) => t + 1);

  const handleLogout = () => {
    clearAdminCreds();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Add new members, timeline events, and achievements. Changes appear on the site immediately.
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>

        <Tabs defaultValue="member" key={tick}>
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="member">Member</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="achievement">Achievement</TabsTrigger>
          </TabsList>

          <TabsContent value="member">
            <MemberForm onDone={refresh} />
            <ExtraMembersList onDone={refresh} />
          </TabsContent>
          <TabsContent value="timeline">
            <TimelineForm onDone={refresh} />
            <ExtraTimelineList onDone={refresh} />
          </TabsContent>
          <TabsContent value="achievement">
            <AchievementForm onDone={refresh} />
            <ExtraAchievementsList onDone={refresh} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

function FileField({ onPick }: { onPick: (dataUrl: string | null) => void }) {
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <div className="space-y-2">
      <Label>Image (optional)</Label>
      <Input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const f = e.target.files?.[0];
          if (!f) {
            setPreview(null);
            onPick(null);
            return;
          }
          const url = await fileToDataUrl(f);
          setPreview(url);
          onPick(url);
        }}
      />
      {preview && <img src={preview} alt="preview" className="h-32 rounded-lg object-cover" />}
    </div>
  );
}

function MemberForm({ onDone }: { onDone: () => void }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <Card className="p-6 mt-4 space-y-4">
      <h2 className="font-semibold text-lg">Add Member</h2>
      <div className="space-y-2">
        <Label>Name *</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label>Role / Branch / Year</Label>
        <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="B.Tech CSE, Class of 2028" />
      </div>
      <div className="space-y-2">
        <Label>Short story / skills</Label>
        <Textarea value={story} onChange={(e) => setStory(e.target.value)} />
      </div>
      <FileField onPick={setImage} />
      <Button
        disabled={loading || !name}
        onClick={async () => {
          setLoading(true);
          try {
            await adminCall("create_member", { name, role, story, image });
            toast({ title: "Member added" });
            setName("");
            setRole("");
            setStory("");
            setImage(null);
            onDone();
          } catch (e: any) {
            toast({ title: "Failed", description: e.message, variant: "destructive" });
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? "Saving…" : "Add Member"}
      </Button>
    </Card>
  );
}

function TimelineForm({ onDone }: { onDone: () => void }) {
  const [eventDate, setEventDate] = useState("");
  const [sortDate, setSortDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <Card className="p-6 mt-4 space-y-4">
      <h2 className="font-semibold text-lg">Add Timeline Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Display Date *</Label>
          <Input value={eventDate} onChange={(e) => setEventDate(e.target.value)} placeholder="17 Mar 2026" />
        </div>
        <div className="space-y-2">
          <Label>Sort Date (used to order)</Label>
          <Input type="date" value={sortDate} onChange={(e) => setSortDate(e.target.value)} />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Title *</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <FileField onPick={setImage} />
      <Button
        disabled={loading || !eventDate || !title}
        onClick={async () => {
          setLoading(true);
          try {
            await adminCall("create_timeline", {
              event_date: eventDate,
              sort_date: sortDate || null,
              title,
              description,
              image,
            });
            toast({ title: "Timeline event added" });
            setEventDate("");
            setSortDate("");
            setTitle("");
            setDescription("");
            setImage(null);
            onDone();
          } catch (e: any) {
            toast({ title: "Failed", description: e.message, variant: "destructive" });
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? "Saving…" : "Add Event"}
      </Button>
    </Card>
  );
}

function AchievementForm({ onDone }: { onDone: () => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <Card className="p-6 mt-4 space-y-4">
      <h2 className="font-semibold text-lg">Add Achievement</h2>
      <div className="space-y-2">
        <Label>Title / People *</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Aashi, Gaurav — 1st place at Odyssey" />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label>Date</Label>
        <Input value={eventDate} onChange={(e) => setEventDate(e.target.value)} placeholder="20 Mar 2026" />
      </div>
      <FileField onPick={setImage} />
      <Button
        disabled={loading || !title}
        onClick={async () => {
          setLoading(true);
          try {
            await adminCall("create_achievement", { title, description, event_date: eventDate, image });
            toast({ title: "Achievement added" });
            setTitle("");
            setDescription("");
            setEventDate("");
            setImage(null);
            onDone();
          } catch (e: any) {
            toast({ title: "Failed", description: e.message, variant: "destructive" });
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? "Saving…" : "Add Achievement"}
      </Button>
    </Card>
  );
}

function DeleteBtn({ table, id, onDone }: { table: string; id: string; onDone: () => void }) {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={async () => {
        if (!confirm("Delete this entry?")) return;
        try {
          await adminCall("delete", { table, id });
          onDone();
        } catch (e: any) {
          toast({ title: "Delete failed", description: e.message, variant: "destructive" });
        }
      }}
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  );
}

function ExtraMembersList({ onDone }: { onDone: () => void }) {
  const items = useExtraMembers();
  if (!items.length) return null;
  return (
    <Card className="p-6 mt-4">
      <h3 className="font-semibold mb-3">Recently added members</h3>
      <ul className="divide-y">
        {items.map((m) => (
          <li key={m.id} className="py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {m.image_url && <img src={m.image_url} className="w-10 h-10 rounded-full object-cover" alt={m.name} />}
              <div className="min-w-0">
                <div className="font-medium truncate">{m.name}</div>
                <div className="text-xs text-muted-foreground truncate">{m.role}</div>
              </div>
            </div>
            <DeleteBtn table="admin_members" id={m.id} onDone={onDone} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ExtraTimelineList({ onDone }: { onDone: () => void }) {
  const items = useExtraTimeline();
  if (!items.length) return null;
  return (
    <Card className="p-6 mt-4">
      <h3 className="font-semibold mb-3">Recently added events</h3>
      <ul className="divide-y">
        {items.map((m) => (
          <li key={m.id} className="py-2 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="font-medium truncate">{m.title}</div>
              <div className="text-xs text-muted-foreground">{m.event_date}</div>
            </div>
            <DeleteBtn table="admin_timeline" id={m.id} onDone={onDone} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ExtraAchievementsList({ onDone }: { onDone: () => void }) {
  const items = useExtraAchievements();
  if (!items.length) return null;
  return (
    <Card className="p-6 mt-4">
      <h3 className="font-semibold mb-3">Recently added achievements</h3>
      <ul className="divide-y">
        {items.map((m) => (
          <li key={m.id} className="py-2 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="font-medium truncate">{m.title}</div>
              <div className="text-xs text-muted-foreground">{m.event_date}</div>
            </div>
            <DeleteBtn table="admin_achievements" id={m.id} onDone={onDone} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
