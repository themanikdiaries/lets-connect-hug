import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SAMPLE_STORIES = [
  {
    id: 1,
    name: "Priya",
    year: "2nd Year",
    story: "I was nervous about my first hackathon. A senior from Letz Connect walked me through the entire process, stayed up late helping debug my code, and now we meet every Friday. That mentorship changed everything.",
    likes: 24,
    tags: ["mentorship", "coding"],
  },
  {
    id: 2,
    name: "Arjun",
    year: "3rd Year",
    story: "Coffee Connects introduced me to someone who became my co-founder. We're now building a startup together. Sometimes 15 minutes is all you need to find your people.",
    likes: 31,
    tags: ["projects", "friendship"],
  },
  {
    id: 3,
    name: "Meera",
    year: "1st Year",
    story: "As a first-year, I felt invisible. Unfiltered Fridays gave me a space where people actually listened. Now I help organize the meetups and make sure no one feels alone like I did.",
    likes: 42,
    tags: ["belonging", "growth"],
  },
  {
    id: 4,
    name: "Karthik",
    year: "4th Year",
    story: "I joined to give back. But honestly, I've learned as much from the juniors as they have from me. Their fresh perspectives remind me why I fell in love with tech in the first place.",
    likes: 28,
    tags: ["mentorship", "perspective"],
  },
  {
    id: 5,
    name: "Ananya",
    year: "2nd Year",
    story: "Build Sprints pushed me out of my comfort zone. I went from 'I'm not technical enough' to shipping a real project in a week. The encouragement here is unmatched.",
    likes: 35,
    tags: ["projects", "confidence"],
  },
  {
    id: 6,
    name: "Rohan",
    year: "3rd Year",
    story: "Found my best friends through Letz Connect. We started as project partners and now we're planning to share an apartment after graduation. This community creates bonds that last.",
    likes: 39,
    tags: ["friendship", "community"],
  },
];

export const WallOfStories = () => {
  const [filter, setFilter] = useState<string>("all");
  const [likedStories, setLikedStories] = useState<Set<number>>(new Set());

  const allTags = ["all", ...Array.from(new Set(SAMPLE_STORIES.flatMap(s => s.tags)))];

  const filteredStories = filter === "all" 
    ? SAMPLE_STORIES 
    : SAMPLE_STORIES.filter(s => s.tags.includes(filter));

  const toggleLike = (id: number) => {
    setLikedStories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="stories" className="py-24 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Wall of Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real moments, real connections, real impact
            </p>
          </div>

          {/* Filter tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                className="cursor-pointer rounded-full px-4 py-2 capitalize hover:shadow-warm transition-all"
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <Card
                key={story.id}
                className="group p-6 space-y-4 rounded-2xl shadow-card hover:shadow-hover hover-lift transition-smooth bg-card"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-white font-semibold">
                      {story.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.year}</div>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {story.story}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Like button */}
                <button
                  onClick={() => toggleLike(story.id)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedStories.has(story.id) ? "fill-primary text-primary" : ""
                    }`}
                  />
                  <span>
                    {story.likes + (likedStories.has(story.id) ? 1 : 0)}
                  </span>
                </button>
              </Card>
            ))}
          </div>

          {/* Share your story CTA */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 hover:bg-card shadow-card"
            >
              <Plus className="w-5 h-5 mr-2" />
              Share your story
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Stories are reviewed for kindness and privacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
