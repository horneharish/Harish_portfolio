import { motion } from "framer-motion";
import { ExternalLink, Figma } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const figJamItems = [
    {
        title: "My Works",
        link: "https://www.figma.com/board/I5OZg5Fl93uM9x1F6lSwtD/MY-WORKS?t=K4dcwmoiE8oROGns-0",
        buttonText: "Open FigJam"
    },
    {
        title: "POC Works",
        link: "https://www.figma.com/board/z31FaShnjK1g9jxGSobB7z/Poc-Works?node-id=0-1&p=f&t=2P9dco5v2Mk1vUpx-0",
        buttonText: "Open FigJam"
    },
    {
        title: "Automation Templates",
        link: "https://www.figma.com/board/MnJUZtslBzMqIkgx1bKSQO/Templets-Images?t=QVZHDumGNSOru8GD-0",
        buttonText: "Open FigJam"
    },
];

const FigJamShowcase = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Related Work & FigJam Boards
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore detailed workflows, POCs, and automation templates through my FigJam boards.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {figJamItems.map((item, index) => (
                        <ScrollReveal key={index}>
                            <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full cursor-pointer"
                                whileHover={{ y: -8 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)] transition-all duration-300 flex flex-col items-center text-center">
                                    <div className="mb-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Figma className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium">
                                        {item.buttonText}
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FigJamShowcase;
