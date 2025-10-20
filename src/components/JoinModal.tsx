import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface JoinModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const JoinModal = ({ open, onOpenChange }: JoinModalProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    department: "",
    interests: "",
    reason: "",
    story: "",
    email: "",
    agreedToValues: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToValues) {
      toast({
        title: "Please agree to community values",
        description: "We want to ensure everyone shares our commitment to kindness and respect.",
        variant: "destructive",
      });
      return;
    }

    // Here you would send the data to your backend
    console.log("Form submitted:", formData);
    
    setIsSubmitted(true);
    
    toast({
      title: "Welcome to Letz Connect! 🎉",
      description: `We're so glad you're here, ${formData.name}. Check your email soon for your first Coffee Connect match.`,
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      year: "",
      department: "",
      interests: "",
      reason: "",
      story: "",
      email: "",
      agreedToValues: false,
    });
    onOpenChange(false);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={resetForm}>
        <DialogContent className="max-w-md">
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-warm flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold">
                Welcome to Letz Connect, {formData.name}!
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We're so glad you're here. We'll match you with a connector soon — 
                expect a warm hello in your inbox.
              </p>
            </div>
            <Button onClick={resetForm} className="rounded-full px-8">
              Explore the community
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <DialogTitle className="text-3xl font-display">Join Letz Connect</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Tell us a bit about yourself so we can match you with the right people
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Basic Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="What should we call you?"
                className="rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Select
                  required
                  value={formData.year}
                  onValueChange={(value) => setFormData({ ...formData, year: value })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">First Year</SelectItem>
                    <SelectItem value="2">Second Year</SelectItem>
                    <SelectItem value="3">Third Year</SelectItem>
                    <SelectItem value="4">Fourth Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Input
                  id="department"
                  required
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  placeholder="e.g., CS, Mech, Civil"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@university.edu"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Interests & Reason */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="interests">Your Interests</Label>
              <Input
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                placeholder="e.g., coding, design, music, sports"
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">I'm here to... *</Label>
              <Select
                required
                value={formData.reason}
                onValueChange={(value) => setFormData({ ...formData, reason: value })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="What brings you here?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friends">Make friends</SelectItem>
                  <SelectItem value="learn">Learn & grow</SelectItem>
                  <SelectItem value="mentor">Mentor others</SelectItem>
                  <SelectItem value="projects">Build projects</SelectItem>
                  <SelectItem value="all">All of the above</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="story">Share a small moment (optional)</Label>
              <Textarea
                id="story"
                value={formData.story}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                placeholder="A time someone helped you, a friendship that began, or a tiny victory..."
                className="rounded-xl min-h-[100px]"
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground">
                {formData.story.length}/500 characters
              </p>
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
            <Checkbox
              id="values"
              checked={formData.agreedToValues}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, agreedToValues: checked as boolean })
              }
            />
            <label htmlFor="values" className="text-sm leading-relaxed cursor-pointer">
              I agree to be kind, respectful, and supportive. I understand that Letz
              Connect is a safe space for honest conversations and genuine connections.
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-xl text-lg"
            disabled={!formData.agreedToValues}
          >
            Join the community
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
