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
      const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL;

      // Create fixed HTML email template
      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', 'Helvetica', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .email-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    .email-header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .email-header p {
      margin: 10px 0 0 0;
      font-size: 14px;
      opacity: 0.9;
    }
    .email-body {
      padding: 40px 30px;
      background: #ffffff;
    }
    .field-group {
      margin-bottom: 25px;
      border-left: 4px solid #667eea;
      padding-left: 15px;
    }
    .field-label {
      font-weight: bold;
      color: #667eea;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 1px;
      margin-bottom: 8px;
      display: block;
    }
    .field-value {
      color: #333;
      font-size: 15px;
      word-wrap: break-word;
    }
    .message-box {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #764ba2;
      margin-top: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .email-footer {
      background: #2d3748;
      color: white;
      padding: 30px;
      text-align: center;
    }
    .email-footer p {
      margin: 0 0 10px 0;
      font-size: 14px;
    }
    .reply-button {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 15px;
    }
    .timestamp {
      color: #a0aec0;
      font-size: 12px;
      margin-top: 15px;
    }
    @media only screen and (max-width: 600px) {
      .email-body {
        padding: 20px;
      }
      .email-header {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>📧 New Contact Message</h1>
      <p>Message received from Portfolio Website</p>
    </div>
    
    <div class="email-body">
      <div class="field-group">
        <span class="field-label">👤 From</span>
        <div class="field-value">${formData.name}</div>
      </div>
      
      <div class="field-group">
        <span class="field-label">📧 Email Address</span>
        <div class="field-value">${formData.email}</div>
      </div>
      
      <div class="field-group">
        <span class="field-label">📋 Subject</span>
        <div class="field-value">${formData.subject}</div>
      </div>
      
      <div class="field-group">
        <span class="field-label">💬 Message</span>
        <div class="message-box">${formData.message}</div>
      </div>
    </div>
    
    <div class="email-footer">
      <p>📬 <strong>Reply to this message:</strong> ${formData.email}</p>
      <a href="mailto:${formData.email}" class="reply-button">Reply Directly</a>
      <div class="timestamp">⏰ Received at ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long' })}</div>
    </div>
  </div>
</body>
</html>
      `;

      // Send email using /api/send-email endpoint
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: `Portfolio Contact: ${formData.subject} - From ${formData.name}`,
          content: htmlContent,
          replyTo: formData.email,
          fromName: 'Aarav Maheshwari Portfolio',
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
                    <a href="https://github.com/aaraviitkgp" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/aarav-maheshwari-184176316/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://www.instagram.com/aaravmaheshwari83/" target="_blank" rel="noopener noreferrer">
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
