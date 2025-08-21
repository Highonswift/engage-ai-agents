import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 h-full bg-gradient-secondary border-0 shadow-soft hover:shadow-medium transition-spring hover:scale-105 group">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-spring">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FeatureCard;