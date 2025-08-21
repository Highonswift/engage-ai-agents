const testimonials = [
  {
    quote: "Our outbound productivity increased 3X after integrating AI agents. The quality of leads improved dramatically.",
    author: "Sarah Chen",
    position: "VP of Sales",
    company: "TechFlow Solutions"
  },
  {
    quote: "We went from 2% to 12% conversion rates on cold calls. The ROI is incredible.",
    author: "Michael Rodriguez", 
    position: "Sales Director",
    company: "GrowthMax Inc"
  },
  {
    quote: "Finally, our sales team can focus on what they do best - closing deals instead of dialing numbers.",
    author: "Jennifer Park",
    position: "Head of Revenue",
    company: "ScaleUp Ventures"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses using AI to transform their sales
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-soft hover:shadow-medium transition-spring">
              <div className="text-4xl text-primary mb-4">"</div>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                {testimonial.quote}
              </blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position} • {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;