import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    year: "",
    branch: "",
    skills: "",
    preferredTeam: "",
    motivation: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join <span className="text-primary">Trigger Mind Club</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Ready to be part of ASET's most innovative coding community? Fill out the form below and start your 
            journey with us!
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Star className="w-5 h-5 text-primary" />
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20">
              Admissions Open for 2025
            </Badge>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Registration Form</CardTitle>
              <p className="text-muted-foreground">Tell us about yourself and join our community</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="font-semibold">Personal Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="bg-input border-border"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-input border-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="font-semibold">Academic Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year">Year *</Label>
                      <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                        <SelectTrigger className="bg-input border-border">
                          <SelectValue placeholder="Select your year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="4th">4th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="branch">Branch *</Label>
                      <Select value={formData.branch} onValueChange={(value) => setFormData({ ...formData, branch: value })}>
                        <SelectTrigger className="bg-input border-border">
                          <SelectValue placeholder="Select your branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cse">Computer Science Engineering</SelectItem>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="ece">Electronics & Communication</SelectItem>
                          <SelectItem value="ee">Electrical Engineering</SelectItem>
                          <SelectItem value="me">Mechanical Engineering</SelectItem>
                          <SelectItem value="ce">Civil Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Skills & Interests */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="font-semibold">Skills & Interests</h3>
                  </div>
                  
                  <div>
                    <Label htmlFor="skills">Relevant Skills</Label>
                    <Textarea
                      id="skills"
                      placeholder="e.g., Python, Web Development, ML, UI/UX, etc."
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="bg-input border-border min-h-20"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      List your programming languages, technologies, or areas of interest
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredTeam">Preferred Team</Label>
                    <Select value={formData.preferredTeam} onValueChange={(value) => setFormData({ ...formData, preferredTeam: value })}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select your preferred team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Team</SelectItem>
                        <SelectItem value="design">Design Team</SelectItem>
                        <SelectItem value="management">Management & Editorial</SelectItem>
                        <SelectItem value="marketing">Marketing Team</SelectItem>
                        <SelectItem value="social-media">Social Media Team</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Tell us about yourself */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="font-semibold">Tell us about yourself</h3>
                  </div>
                  
                  <div>
                    <Label htmlFor="motivation">Why do you want to join the team? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share your motivation, goals, and what you hope to contribute to the club..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="bg-input border-border min-h-32"
                      required
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the terms and conditions and understand that this is a 
                    commitment to actively participate in club activities.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
                  size="lg"
                >
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Have Questions Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Have <span className="text-primary">Questions</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Feel free to reach out to us on social media or via email if you need any help with the registration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Email Us
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact on Instagram
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

export default Join;