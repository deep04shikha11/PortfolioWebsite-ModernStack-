import { motion } from "framer-motion";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
         👋 Hi, I’m <span className="text-blue-500">DeepShikha Verma</span>
      </motion.h1>
      <motion.p className="mt-4 text-xl text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        Full stack web developer | Building web experiences        
      </motion.p>
      <motion.div className="mt-6" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>
        <Link href="./resume.pdf" target="_blank" className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">
          Download Resume
        </Link>
      </motion.div>
    </section>
  );
}
