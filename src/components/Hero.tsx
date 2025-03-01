
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
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm animate-in">
              Craft Your Professional Story
            </span>
          </div>
          <h1 className="h1 mb-6 animate-in" style={{ animationDelay: "0.1s" }}>
            Create a Stunning Resume in Minutes with AI
          </h1>
          <p
            className="p-large text-gray-600 mb-8 animate-in"
            style={{ animationDelay: "0.2s" }}
          >
            Build a professional resume that stands out. Our AI-powered platform helps you
            craft the perfect resume with smart suggestions and beautiful templates.
          </p>
          <div
            className="flex items-center justify-center gap-4 animate-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-secondary text-primary font-medium hover:bg-secondary/80 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent -z-10" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse" />
    </div>
  );
};
