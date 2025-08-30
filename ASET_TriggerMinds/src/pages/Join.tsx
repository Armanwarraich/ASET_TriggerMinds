import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Join = () => {
  const handleGoogleFormClick = () => {
    // Replace this URL with your actual Google Form URL
    window.open('https://docs.google.com/forms/d/1EUP1AkjW14BhPgvsS0vnF6E0ErVutiLl9q69uIpSC6g/edit', '_blank');
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
              <p className="text-muted-foreground">Join our community through our Google Form</p>
            </CardHeader>
            
            <CardContent className="space-y-6 text-center">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Click the button below to fill out our registration form and become a member of the Trigger Mind Club ASET.
                </p>
                
                <Button 
                  onClick={handleGoogleFormClick}
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-glow flex items-center justify-center space-x-2"
                  size="lg"
                >
                  <span>Fill Registration Form</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  The form includes sections for personal information, academic details, skills, and your motivation to join our club.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3 text-primary">What you'll need:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div>• Personal Information</div>
                  <div>• Academic Details</div>
                  <div>• Skills & Interests</div>
                  <div>• Motivation to Join</div>
                </div>
              </div>
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
            <div className="text-sm text-muted-foreground text-center">
              © 2025 Trigger Mind Club ASET. All rights reserved.
              <div className="mt-1">made with ❤️ by Armanwarraich</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Join;