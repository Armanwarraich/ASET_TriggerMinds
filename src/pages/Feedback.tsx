import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Star, TrendingUp, Heart, Instagram, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const { toast } = useToast();
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    feedback: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your valuable feedback. We appreciate it!",
    });
    setFeedbackData({ name: "", email: "", feedback: "" });
  };

  const testimonials = [
    {
      name: "Arjun S.",
      role: "3rd Year CSE",
      rating: 5,
      comment: "Trigger Mind Club has been instrumental in improving my coding skills. The workshops and hackathons are amazing!"
    },
    {
      name: "Priya M.",
      role: "2nd Year IT",
      rating: 5,
      comment: "Great community of like-minded people. The mentorship and collaborative environment helped me grow a lot."
    },
    {
      name: "Rohit K.",
      role: "4th Year CSE",
      rating: 4,
      comment: "The technical sessions and competitive programming practice sessions are really well organized."
    }
  ];

  const stats = [
    {
      number: "95%",
      label: "Positive Feedback",
      icon: <Heart className="w-6 h-6 text-white" />
    },
    {
      number: "200+",
      label: "Feedback Received",
      icon: <MessageSquare className="w-6 h-6 text-white" />
    },
    {
      number: "50+",
      label: "Improvements Made",
      icon: <TrendingUp className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your <span className="text-primary">Feedback</span> Matters
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We'd love to hear your thoughts! Your feedback helps us improve and create better experiences for the
            entire Trigger Mind Club community.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm">We value every opinion</span>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Share Your Thoughts</CardTitle>
              <p className="text-muted-foreground">Tell us about your experience, suggestions, or anything you'd like to share</p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={feedbackData.name}
                      onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={feedbackData.email}
                      onChange={(e) => setFeedbackData({ ...feedbackData, email: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="feedback">Your Feedback *</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Share your thoughts, suggestions, experiences, or anything you'd like us to know..."
                    value={feedbackData.feedback}
                    onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
                    className="bg-input border-border min-h-32"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Your feedback is valuable to us and helps improve our club activities
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
                  size="lg"
                >
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Our <span className="text-primary">Members</span> Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Your Voice <span className="text-primary">Drives</span> Our Improvement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Share More <span className="text-primary">Detailed</span> Feedback?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For detailed discussions or specific suggestions, feel free to reach out to us directly through our social media channels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Instagram className="w-4 h-4 mr-2" />
              Message on Instagram
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TM</span>
              </div>
              <div>
                <div className="font-bold">Trigger Mind Club ASET</div>
                <div className="text-sm text-muted-foreground">Where Logic and Chaos Meet</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Trigger Mind Club ASET. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Feedback;