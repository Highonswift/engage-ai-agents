import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Turn Cold Calls into
            <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Warm Opportunities
            </span>
            with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our AI outbound sales agents initiate conversations, qualify prospects, and seamlessly transfer to human agents for closing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6 rounded-lg font-semibold transition-spring hover:scale-105"
            >
              Book a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-primary-foreground hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-semibold transition-spring"
            >
              Get Started
            </Button>
          </div>
          
          <div className="mt-12 text-primary-foreground/70 text-sm">
            <p>✓ No setup fees • ✓ 14-day free trial • ✓ Cancel anytime</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;