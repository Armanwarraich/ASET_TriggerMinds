import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeatureCard from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Users, Trophy, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="Trigger Mind Club ASET"
        subtitle="Where Logic and Chaos Meet"
        primaryCta={{ text: "Join the Club", to: "/join" }}
        secondaryCta={{ text: "Learn More", to: "/about" }}
        variant="gradient"
      />

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to <span className="text-primary">Trigger Mind Club</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              The official coding club of ASET, dedicated to fostering innovation, collaboration, and excellence
              in programming among students. We believe in creating a community where logic meets
              creativity and chaos transforms into breakthrough solutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FeatureCard
              icon={<Code className="w-6 h-6 text-white" />}
              title="Coding Excellence"
              description="Master Python, C, C++, Java, and Data Structures & Algorithms"
              variant="gradient"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-white" />}
              title="Community"
              description="Join a vibrant community of passionate developers and innovators"
              variant="gradient"
            />
            <FeatureCard
              icon={<Trophy className="w-6 h-6 text-white" />}
              title="Competitions"
              description="Participate in hackathons, coding competitions, and tech challenges"
              variant="gradient"
            />
            <FeatureCard
              icon={<Lightbulb className="w-6 h-6 text-white" />}
              title="Innovation"
              description="Transform ideas into reality through collaborative projects"
              variant="gradient"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-primary">Trigger Your Mind</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of innovators, problem-solvers, and future tech leaders. Let's code the future
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Join Now
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View Events
              </Button>
            </Link>
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
              <div className="mt-1">made by Armanwarraich</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
