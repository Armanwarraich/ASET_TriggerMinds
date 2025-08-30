import Navigation from "@/components/ui/navigation";
import FeatureCard from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Users, Award, Heart, BookOpen, Zap, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const technologies = [
    "Python", "C", "C++", "Java", "Data Structures", "Algorithms", 
    "Web Development", "Machine Learning", "Competitive Programming"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">Trigger Mind Club</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The official coding club of ASET, where passion meets purpose and logic meets creativity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To ignite passion for coding among ASET students and create a thriving ecosystem 
                where innovation flourishes. We believe that when logic meets chaos, extraordinary 
                solutions emerge.
              </p>
              <div className="bg-gradient-card p-6 rounded-lg border border-border">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Empowering Developers</h3>
                </div>
                <p className="text-muted-foreground">
                  Building the next generation of tech leaders.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={<Lightbulb className="w-6 h-6 text-white" />}
                title="Innovation"
                description="Pushing boundaries and creating new possibilities in technology"
                variant="gradient"
              />
              <FeatureCard
                icon={<Users className="w-6 h-6 text-white" />}
                title="Collaboration"
                description="Building together, learning together, growing together"
                variant="gradient"
              />
              <FeatureCard
                icon={<Award className="w-6 h-6 text-white" />}
                title="Excellence"
                description="Striving for the highest standards in everything we do"
                variant="gradient"
              />
              <FeatureCard
                icon={<Heart className="w-6 h-6 text-white" />}
                title="Community"
                description="Creating an inclusive environment where everyone can thrive"
                variant="gradient"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-primary">Culture</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We foster a culture of collaborative learning, innovation, and continuous growth. Our diverse 
              community works on exciting projects that push the boundaries of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Learning</h3>
              <p className="text-muted-foreground">
                We believe in learning together through workshops, study groups, and peer mentoring. 
                Knowledge shared is knowledge multiplied.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-muted-foreground">
                From hackathons to research projects, we encourage creative problem solving and 
                out of the box thinking in everything we do.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diverse Projects</h3>
              <p className="text-muted-foreground">
                Our members work on a wide range of projects - from web applications to machine learning 
                models, ensuring everyone finds their passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">Technologies</span> We Focus On
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master the tools and languages that drive modern software development
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gradient-card border-primary/20 hover:border-primary/40 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to be Part of Our <span className="text-primary">Journey</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Trigger Mind Club and unlock your potential in the world of coding and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Join the Club
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
              <div className="mt-1">made with ❤️ by Armanwarraich</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;