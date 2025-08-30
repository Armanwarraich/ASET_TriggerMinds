import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Users, Trophy, Award, Code, Presentation, Star, MapPin } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Dynamic DSA Hackathon",
      type: "Hackathon",
      status: "upcoming",
      date: "July 15, 2025",
      participants: "50+ participants",
      prize: "₹2,000 prize pool",
      description: "A 6-hour coding marathon focused on Data Structures and Algorithms. Teams compete to solve complex algorithmic challenges.",
      icon: <Code className="w-6 h-6 text-white" />,
      features: ["Team Competition", "Real-time Leaderboard", "Certificates"]
    },
    {
      id: 2,
      title: "Web Development Workshop",
      type: "Workshop",
      status: "upcoming", 
      date: "June 28, 2025",
      participants: "30+ participants",
      prize: "Certificates",
      description: "Comprehensive workshop covering modern web development with React, Node.js, and deployment strategies.",
      icon: <Presentation className="w-6 h-6 text-white" />,
      features: ["Hands-on Learning", "Industry Experts", "Project Building"]
    },
    {
      id: 3,
      title: "Code Debug Challenge",
      type: "Competition",
      status: "completed",
      date: "May 20, 2025",
      participants: "40+ participants", 
      prize: "Tech goodies",
      description: "Test your debugging skills in this intensive competition. Find and fix bugs in various programming languages.",
      icon: <Star className="w-6 h-6 text-white" />,
      features: ["Individual Competition", "Multiple Languages", "Real-world Scenarios"]
    },
    {
      id: 4,
      title: "AI/ML Speaker Session",
      type: "Speaker Session",
      status: "completed",
      date: "April 15, 2025",
      participants: "80+ attendees",
      prize: "Networking",
      description: "Industry expert session on Machine Learning trends and career opportunities in AI.",
      icon: <Users className="w-6 h-6 text-white" />,
      features: ["Industry Insights", "Q&A Session", "Career Guidance"]
    },
    {
      id: 5,
      title: "Open Source Contribution Drive",
      type: "Workshop",
      status: "completed",
      date: "March 10, 2025",
      participants: "25+ participants",
      prize: "GitHub swag",
      description: "Learn how to contribute to open source projects. Git, GitHub, and collaborative development practices.",
      icon: <Code className="w-6 h-6 text-white" />,
      features: ["Git Mastery", "Open Source Projects", "Community Building"]
    },
    {
      id: 6,
      title: "Competitive Programming Bootcamp",
      type: "Bootcamp",
      status: "completed",
      date: "February 28, 2025",
      participants: "35+ participants",
      prize: "Certificates & Books",
      description: "Intensive training on competitive programming techniques, algorithms, and problem-solving strategies.",
      icon: <Trophy className="w-6 h-6 text-white" />,
      features: ["Algorithm Training", "Problem Solving", "Contest Preparation"]
    }
  ];

  const eventTypes = [
    {
      title: "Hackathons",
      description: "Intensive coding competitions where teams build innovative solutions to real-world problems within time constraints.",
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      title: "Workshops", 
      description: "Hands-on learning sessions covering various technologies, frameworks, and programming concepts.",
      icon: <Presentation className="w-8 h-8 text-white" />
    },
    {
      title: "Competitions",
      description: "Coding contests and challenges that test problem-solving skills and programming expertise.",
      icon: <Star className="w-8 h-8 text-white" />
    },
    {
      title: "Speaker Sessions",
      description: "Industry expert talks, career guidance sessions, and technology trend discussions.",
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hackathons to workshops, we host events that challenge, educate, and inspire our community.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {events.map((event) => (
              <Card key={event.id} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={event.status === 'upcoming' ? 'default' : event.status === 'completed' ? 'secondary' : 'outline'}
                      className={
                        event.status === 'upcoming' 
                          ? 'bg-primary text-primary-foreground' 
                          : event.status === 'completed'
                          ? 'bg-muted text-muted-foreground'
                          : ''
                      }
                    >
                      {event.status}
                    </Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {event.type}
                    </Badge>
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow">
                    {event.icon}
                  </div>
                  
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.participants}
                    </div>
                    <div className="flex items-center text-sm">
                      <Trophy className="w-4 h-4 mr-2 text-primary" />
                      {event.prize}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 pt-2">
                    {event.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Types of <span className="text-primary">Events</span> We Host
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Event CTA */}
      <section className="py-16 px-4 bg-gradient-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Our <span className="text-primary">Next Event</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events and be part of the coding community at ASET.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Join the Club
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Follow on Instagram
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
              <div className="mt-1">made by Armanwarraich</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;