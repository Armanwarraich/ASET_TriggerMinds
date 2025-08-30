import { ReactNode } from "react";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "default" | "gradient";
}

const FeatureCard = ({ icon, title, description, variant = "default" }: FeatureCardProps) => {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:scale-105 hover:shadow-glow border-border/50",
      variant === "gradient" ? "bg-gradient-card" : "bg-card"
    )}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;