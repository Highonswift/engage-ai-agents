import { Button } from "@/components/ui/button";
import banner from "@/assets/banner.webp"; // Adjust the path as necessary
const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: "url('https://videos.openai.com/vg-assets/assets%2Ftask_01k37w7p2feh38pdbvq0e94mm9%2F1755832463_img_1.webp?st=2025-08-22T02%3A03%3A41Z&se=2025-08-28T03%3A03%3A41Z&sks=b&skt=2025-08-22T02%3A03%3A41Z&ske=2025-08-28T03%3A03%3A41Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=uVHU7%2B0sXlqv%2F%2BjFuqVeNxCsjq4C1RopaUhyL8AHeQE%3D&az=oaivgprodscus')" }} // <-- Change to your image path
    >
      {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80" /> 
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Cold Calls into
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Warm Opportunities
            </span>
            with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6 rounded-lg font-semibold transition-spring hover:scale-105"
            >
              Get Started
            </Button>
            {/* <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-large text-lg px-8 py-6 rounded-lg font-semibold transition-spring hover:scale-105"
            >
              Try Now (Malaysia)
            </Button> */}
          </div>
          
          <div className="mt-12 text-white/70 text-sm">
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
