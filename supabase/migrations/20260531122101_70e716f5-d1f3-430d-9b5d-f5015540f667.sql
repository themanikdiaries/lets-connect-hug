
CREATE TABLE public.admin_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  image_url TEXT,
  story TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.admin_members TO anon, authenticated;
GRANT ALL ON public.admin_members TO service_role;
ALTER TABLE public.admin_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read members" ON public.admin_members FOR SELECT USING (true);

CREATE TABLE public.admin_timeline (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_date TEXT NOT NULL,
  sort_date DATE,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.admin_timeline TO anon, authenticated;
GRANT ALL ON public.admin_timeline TO service_role;
ALTER TABLE public.admin_timeline ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read timeline" ON public.admin_timeline FOR SELECT USING (true);

CREATE TABLE public.admin_achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.admin_achievements TO anon, authenticated;
GRANT ALL ON public.admin_achievements TO service_role;
ALTER TABLE public.admin_achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read achievements" ON public.admin_achievements FOR SELECT USING (true);

INSERT INTO storage.buckets (id, name, public) VALUES ('admin-uploads', 'admin-uploads', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can read admin uploads" ON storage.objects FOR SELECT USING (bucket_id = 'admin-uploads');
