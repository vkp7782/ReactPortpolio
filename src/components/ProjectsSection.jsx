import { ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react";

const projects = [

    {
        id: 1,
        title: "Food Delivery Website",
        Description: "A user-friendly food delivery platform with an intuitive interface, allowing customers to browse restaurants, order meals, and track deliveries seamlessly.",
        image: "/projects/pd.png",
        tags: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        GithubUrl: "https://github.com/vkp7782/Food-Delivery-Website"

    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        Description: "A clean and modern personal portfolio showcasing my skills, projects, and experience. Built with responsive design to provide a smooth user experience across all devices.",
        image: "/projects/port.png",
        tags: ["JavaScript", "React", "Tailwind"],
        demoUrl: "#",
        GithubUrl: "#"
    },
    {
        id: 3,
        title: "AI Powered Attendance System",
        Description: "An intelligent student attendance system that leverages facial recognition and real-time tracking to automate attendance and generate detailed reports efficiently.",
        image: "/projects/as.jpeg",
        tags: ["Python", "AI", "Machine Learning"],
        demoUrl: "#",
        GithubUrl: "#"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Featured<span className="text-primary"> Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects, Each project was carefully crafted with attention to detail performance and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border-2">
                            <div className="h-48 overflow-hidden ">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.Description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3 p-2">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLinkIcon size={20} /></a>
                                    <a href={project.GithubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><GithubIcon size={20} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/vkp7782" target="_blank">Check My GitHib <ArrowRight size={16} /></a>
                </div>
            </div>

        </section>
    );
}