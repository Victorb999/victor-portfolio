import styles from "../styles/pages/About.module.css";
import { motion, Variants } from "framer-motion";
const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7
    }
  }
};
const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.img 
       initial={{ x: 100 }}
       animate={{ x: 0, scale: 1 }}
       transition={{
         type: "spring",
         stiffness: 150,
         damping: 100
       }}
       src="/img/me.svg" alt="Me" className={styles.img}/>
      <motion.div
        className={styles.aboutMe}
        transition={{
          delay: 1
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >        
        I’m a dev since 2012, I already worked with php, asp, vb and .net.
        Nowdays I’m in love with front end, I make projects using Vuejs and
        React. I’m a design graphic/UX fan, and I always trying to bring it for
        my projects.
      </motion.div>
    </div>
  );
};

export default About;
