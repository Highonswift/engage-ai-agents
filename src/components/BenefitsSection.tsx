const benefits = [
  {
    icon: "🚀",
    title: "Scale Without Scaling Headcount",
    description: "Grow your sales capacity exponentially without hiring more team members"
  },
  {
    icon: "💰",
    title: "Reduce Cost-per-Lead",
    description: "AI automation dramatically lowers your customer acquisition costs"
  },
  {
    icon: "⏱️",
    title: "Save Time for Your Team",
    description: "Let your sales team focus on what they do best - closing deals"
  },
  {
    icon: "🎯",
    title: "Improve Conversion Rates",
    description: "Only work with pre-qualified, interested prospects ready to buy"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose AI Outbound Agents?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your sales process with intelligent automation that delivers real results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-spring">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;