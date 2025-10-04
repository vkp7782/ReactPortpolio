import { Code } from "lucide-react";

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Profile & Description */}
                    <div className="space-y-6 text-center">

                        {/* Profile Image Always Center */}
                        <div className="flex justify-center">
                            <img
                                src="/projects/profile1.jpg"
                                alt="Profile"
                                className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover shadow-lg border-4 border-primary/20 transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary"
                            />
                        </div>

                        {/* Heading just below image */}
                        <h3 className="text-2xl font-semibold mt-4">
                            Passionate Web Developer & DSA Enthusiast
                        </h3>

                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            With over 3 years of learning experience in web development,
                            I specialize in creating responsive, accessible, and performant
                            web applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            I'm passionate about creating elegant solutions to complex problems,
                            and I'm constantly learning new technologies and techniques to stay
                            at the forefront of the ever-evolving web landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href="/portfolio_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Skills Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">DSA Enthusiast</h4>
                                    <p className="text-muted-foreground">
                                        Passionate coder with a strong foundation in data structures and algorithms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Collaborative Problem Solver</h4>
                                    <p className="text-muted-foreground">
                                        Strong team player with excellent communication and problem-solving skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
