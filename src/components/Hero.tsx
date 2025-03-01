
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm animate-in">
              Build Your Future
            </span>
          </div>
          <h1 className="h1 mb-6 animate-in text-shadow-glow" style={{ animationDelay: "0.1s" }}>
            Craft Your Digital Identity
          </h1>
          <p
            className="p-large mb-8 animate-in text-shadow-sm"
            style={{ animationDelay: "0.2s" }}
          >
            Create a next-generation resume that stands out. Our AI-powered platform helps you
            showcase your talents with cutting-edge designs and smart suggestions.
          </p>
          <div
            className="flex items-center justify-center gap-4 animate-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)] opacity-30" />
    </div>
  );
};
