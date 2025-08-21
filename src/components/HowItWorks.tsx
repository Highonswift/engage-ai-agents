const steps = [
  {
    step: "1",
    title: "AI Agent Initiates Call",
    description: "Our intelligent system automatically dials prospects from your target list"
  },
  {
    step: "2", 
    title: "Real-time Conversation",
    description: "Engages in natural, human-like dialogue to build rapport and interest"
  },
  {
    step: "3",
    title: "Qualifies & Filters Leads", 
    description: "Uses your business rules to identify genuinely interested prospects"
  },
  {
    step: "4",
    title: "Seamless Human Handoff",
    description: "Transfers warm leads to your team or schedules appointments automatically"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, automated process that turns cold prospects into warm opportunities
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary transform translate-x-4 -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-medium group-hover:scale-110 transition-spring">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;