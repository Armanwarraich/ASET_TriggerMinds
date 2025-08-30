import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Palette, Users, Megaphone, Share2, Code, Calendar, Star, Award, Briefcase, Network } from "lucide-react";

const CoreTeam = () => {
  const teams = [
    {
      id: 1,
      title: "Design Team",
      icon: <Palette className="w-6 h-6 text-white" />,
      description: "Create stunning visuals, UI/UX designs, and brand materials for the club.",
      keySkills: ["Photoshop", "Figma", "Illustrator"],
      responsibilities: [
        "Design event posters and materials",
        "Create UI/UX for club projects", 
        "Brand identity management"
      ]
    },
    {
      id: 2,
      title: "Management & Editorial",
      icon: <Users className="w-6 h-6 text-white" />,
      description: "Manage operations, coordinate events, and handle editorial content.",
      keySkills: ["Leadership", "Project Management", "Content Writing"],
      responsibilities: [
        "Event planning and coordination",
        "Manage club operations and logistics",
        "Content creation and editing"
      ]
    },
    {
      id: 3,
      title: "Marketing Team", 
      icon: <Megaphone className="w-6 h-6 text-white" />,
      description: "Promote events, manage partnerships, and grow club visibility.",
      keySkills: ["Digital Marketing", "Event Promotion", "Partnership"],
      responsibilities: [
        "Develop marketing strategies for events",
        "Build partnerships with other organizations",
        "Brand promotion and outreach"
      ]
    },
    {
      id: 4,
      title: "Social Media Team",
      icon: <Share2 className="w-6 h-6 text-white" />,
      description: "Manage social media presence and engage with the community.",
      keySkills: ["Content Creation", "Social Media Management", "Community Engagement"],
      responsibilities: [
        "Manage Instagram, LinkedIn accounts",
        "Create engaging social media content",
        "Community engagement and growth"
      ]
    },
    {
      id: 5,
      title: "Technical Team",
      icon: <Code className="w-6 h-6 text-white" />,
      description: "Develop technical projects, websites, and support event execution.",
      keySkills: ["Programming", "Web Development", "Project Development"],
      responsibilities: [
        "Develop club website and applications",
        "Lead technical workshops and trainings", 
        "Support events with technical solutions"
      ]
    }
  ];

  const benefits = [
    {
      title: "Leadership Experience",
      description: "Develop leadership skills by managing projects and leading in your domain.",
      icon: <Star className="w-6 h-6 text-white" />
    },
    {
      title: "Networking",
      description: "Build valuable connections with peers, industry professionals, and alumni.", 
      icon: <Network className="w-6 h-6 text-white" />
    },
    {
      title: "Skill Development",
      description: "Enhance your technical and soft skills through real-world project experience.",
      icon: <Award className="w-6 h-6 text-white" />
    },
    {
      title: "Event Management",
      description: "Gain hands-on experience in organizing and managing technical events.",
      icon: <Calendar className="w-6 h-6 text-white" />
    }
  ];

  const timeline = [
    { step: 1, title: "Applications Open", date: "August 15, 2025", status: "currently" },
    { step: 2, title: "Application Review", date: "September 1, 2025", status: "upcoming" },
    { step: 3, title: "Interviews & Selection", date: "September 5-12, 2025", status: "upcoming" },
    { step: 4, title: "Results Announced", date: "September 30, 2025", status: "upcoming" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-primary px-6 py-3 rounded-full inline-flex items-center space-x-2 mb-6">
            <Briefcase className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">We Are Hiring!</span>
          </div>
          <p className="text-sm text-primary mb-4">Core Team Applications Open for Academic Year 2025-26</p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 inline-block mb-8">
            <span className="text-primary text-sm">Apply by August 15, 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our <span className="text-primary">Core Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of the leadership team that drives innovation and builds the future of coding culture at ASET.
            Choose your area of expertise and make an impact.
          </p>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Choose Your <span className="text-primary">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teams.map((team) => (
              <Card key={team.id} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow">
                    {team.icon}
                  </div>
                  <CardTitle className="text-xl">{team.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{team.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.keySkills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {team.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Join Our <span className="text-primary">Core Team</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Application <span className="text-primary">Timeline</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.step} className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border/50">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <Badge 
                    variant={item.status === 'upcoming' || item.status === 'currently' ? 'default' : 'secondary'}
                    className={item.status === 'upcoming' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-primary">Lead</span> with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our core team and help shape the future of Trigger Mind Club. Applications are open - don't miss
            the opportunity!
          </p>
          <div className="text-sm text-muted-foreground mb-8">
            <strong>Application Deadline:</strong> September 5, 2025 | <strong>Questions?</strong> Reach out to us on Instagram or email
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Apply Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Learn More About Us
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

export default CoreTeam;