import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "📞",
    title: "AI Cold Calling",
    description: "Automated calls that sound natural and engaging, indistinguishable from human conversations"
  },
  {
    icon: "🤝",
    title: "Lead Qualification", 
    description: "Identify prospects based on your custom business rules and qualification criteria"
  },
  {
    icon: "📅",
    title: "Appointment Scheduling",
    description: "Directly book visits and meetings with interested prospects in real-time"
  },
  {
    icon: "🔄",
    title: "Human Handoff",
    description: "Seamless transfer to live agents when prospects are ready to make decisions"
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Track calls, conversations, and conversions with detailed performance insights"
  },
  {
    icon: "🎯",
    title: "Smart Targeting",
    description: "AI-powered prospect identification and personalized conversation flows"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to revolutionize your outbound sales process and convert more leads
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;