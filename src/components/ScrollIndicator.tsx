
import { motion } from "framer-motion";

const ScrollIndicator = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
            <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1"
                >
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ScrollIndicator;
