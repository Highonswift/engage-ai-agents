import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_70%)]" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform 
            <span className="block text-yellow-300">Your Sales?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using AI to revolutionize their outbound sales process
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6 rounded-lg font-semibold transition-spring hover:scale-105"
            >
              Schedule a Demo
            </Button>
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-large text-lg px-8 py-6 rounded-lg font-semibold transition-spring hover:scale-105"
            >
              Try Now (Malaysia)
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-primary-foreground hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-semibold transition-spring"
            >
              Contact Us
            </Button>
          </div>
          
          <div className="text-primary-foreground/80 text-sm space-y-2">
            <p>🚀 <strong>3X</strong> increase in qualified leads</p>
            <p>💰 <strong>60%</strong> reduction in cost per acquisition</p>
            <p>⏰ <strong>10+ hours</strong> saved per rep per week</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-400/20 rounded-full blur-xl" />
    </section>
  );
};

export default CTASection;