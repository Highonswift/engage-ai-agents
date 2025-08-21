const industries = [
  {
    title: "B2B Companies",
    subtitle: "IT, SaaS, Manufacturing",
    description: "Scale enterprise sales with AI-powered lead qualification and appointment setting"
  },
  {
    title: "B2C Companies", 
    subtitle: "Retail, Real Estate, Healthcare",
    description: "Reach more customers with personalized AI conversations that drive conversions"
  },
  {
    title: "Financial Services",
    subtitle: "Banking, Insurance, Investment",
    description: "Compliant AI agents that build trust while qualifying high-value prospects"
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses across sectors to scale customer engagement and drive growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-8 bg-background rounded-xl shadow-soft hover:shadow-medium transition-spring group">
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                {industry.title}
              </h3>
              <p className="text-primary font-medium mb-4">
                {industry.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Any business</strong> looking to scale customer engagement and improve conversion rates
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;