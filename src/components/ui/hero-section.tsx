import { Button } from "./button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { text: string; to: string };
  secondaryCta?: { text: string; to: string };
  variant?: "default" | "gradient";
}

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  variant = "default"
}: HeroSectionProps) => {
  return (
    <section className={cn(
      "pt-24 pb-16 px-4",
      variant === "gradient" ? "bg-gradient-hero" : ""
    )}>
      <div className="container mx-auto text-center">
        {subtitle && (
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
              <span className="text-white font-bold text-xl">TM</span>
            </div>
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {word === 'Trigger' || word === 'Mind' || word === 'Club' ? (
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                word
              )}{' '}
            </span>
          ))}
        </h1>

        {subtitle && (
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Link to={primaryCta.to}>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  {primaryCta.text}
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.to}>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;