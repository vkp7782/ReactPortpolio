import { Facebook, GithubIcon, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast.jsx";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const { addToast } = useToast();
    const formRef = useRef();
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            await emailjs.sendForm(
                "service_ez0ia7r",    //  service id
                "template_nei8sxw",   //apna template id
                formRef.current,
                "ewWsmo8FMxwfrohXr"     // apna public key
            );

            addToast({
                title: "✅ Message Sent",
                description: "Thanks for reaching out! I’ll reply to your email soon.",
            });

            formRef.current.reset();
        } catch (err) {
            addToast({
                title: "❌ Failed to Send",
                description: "Something went wrong. Please try again later.",
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-10 flex flex-col justify-start">
                        <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Contact Information</h3>

                        <div className="flex flex-col space-y-6">
                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:Vishalpandey0001@gmail.com" className="text-muted-foreground hover:text-primary transition-col">
                                        Vishalpandey0001@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col p-8">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+917782976797" className="text-muted-foreground hover:text-primary transition-col">
                                        +91 7782976797
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Sector-110, Noida, UP, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
                            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
                                <a href="https://www.linkedin.com/in/vishalpandey7782" target="_blank" className="hover:text-primary"><Linkedin /></a>
                                <a href="https://www.instagram.com/im._.v._.p?igsh=MWsxdjN5OWpqdjE3eQ==" target="_blank" className="hover:text-primary"><Instagram /></a>
                                <a href="https://facebook.com" target="_blank" className="hover:text-primary"><Facebook /></a>
                                <a href="https://github.com/vkp7782" target="_blank" className="hover:text-primary"><GithubIcon /></a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                                    placeholder="Enter Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Enter message"
                                    rows={5}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    sending ? "opacity-70 cursor-not-allowed" : ""
                                )}
                            >
                                {sending ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
