import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const apiKey = import.meta.env.VITE_API_KEY;
      const recipientEmail = import.meta.env.VITE_EMAIL || 'maheshwariaarav12@gmail.com';

      // Validate API key
      if (!apiKey || apiKey === 'your_super_secret_api_key_here') {
        throw new Error('Email service not configured. Please contact the site administrator.');
      }

      // Create beautiful HTML email content
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f8f9fa; padding: 30px; border-left: 4px solid #667eea; border-right: 4px solid #667eea; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #667eea; text-transform: uppercase; font-size: 12px; margin-bottom: 5px; }
            .field-value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #667eea; }
            .message-box { background: white; padding: 20px; border-radius: 5px; border-left: 3px solid #764ba2; min-height: 100px; white-space: pre-wrap; }
            .footer { background: #2d3748; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; }
            .timestamp { color: #a0aec0; font-size: 12px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Message</h1>
              <p style="margin: 10px 0 0 0; font-size: 14px;">From Aarav Maheshwari's Portfolio</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${formData.subject}</div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${formData.message}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">📬 Reply directly to: ${formData.email}</p>
              <div class="timestamp">Sent at ${new Date().toLocaleString()}</div>
            </div>
          </div>
        </body>
        </html>
      `;

      // Use generic contact-email endpoint
      const response = await fetch(`${apiUrl}/api/contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: `${formData.subject} - From ${formData.name}`,
          content: htmlContent,
          replyTo: formData.email,
          fromName: formData.name,
          isHtml: true
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        toast({
          title: "Message sent successfully! ✅",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email sending error:', error);
      toast({
        title: "Failed to send message ❌",
        description: error instanceof Error ? error.message : "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
                    href="mailto:maheshwariaarav12@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>maheshwariaarav12@gmail.com</span>
                  </a>
                  <a
                    href="tel:+916377386854"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span>+91 6377386854</span>
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
                    <a href="https://github.com/aarav-maheshwari" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/aarav-maheshwari/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://www.instagram.com/aarav.maheshwari" target="_blank" rel="noopener noreferrer">
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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="bg-card border-border focus:border-primary"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-card border-border focus:border-primary"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-card border-border focus:border-primary"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    className="bg-card border-border focus:border-primary min-h-[150px]"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 relative"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium">Message sent successfully!</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500"
                    >
                      <XCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">Failed to send. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
