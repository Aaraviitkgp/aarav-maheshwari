import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Let's connect and build something amazing together
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:shashi007.iitkgp@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>shashi007.iitkgp@gmail.com</span>
                  </a>
                  <a
                    href="tel:+916378454339"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span>+91 6378454339</span>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Social Links</h2>
                <div className="flex gap-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Decorative element */}
              <div className="hidden md:block">
                <div className="relative w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl animate-float">
                    💬
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-card border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-card border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Your message..."
                    className="bg-card border-border focus:border-primary min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
