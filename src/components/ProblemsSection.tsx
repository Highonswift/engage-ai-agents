const problems = [
  {
    icon: "📞",
    title: "Too Much Time on Cold Calls",
    description: "Sales teams spend 80% of their time on repetitive, low-value prospecting activities"
  },
  {
    icon: "📉", 
    title: "High Drop-off Rates",
    description: "Most cold calls end in rejection, wasting valuable time and resources"
  },
  {
    icon: "⚡",
    title: "Scaling Challenges",
    description: "Growing personalized outreach requires exponentially more human resources"
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Sales Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional outbound sales is broken. Here's why your team struggles with cold outreach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-medium transition-spring">
              <div className="text-4xl mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;