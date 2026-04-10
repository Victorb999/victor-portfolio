"use client"
import styles from "./styles.module.css"
import { motion, Variants } from "framer-motion"
import { BackpackIcon, GlobeIcon, ChatBubbleIcon } from "@radix-ui/react-icons"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.15,
        },
    },
}

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}

const skills = [
    {
        label: "Frontend",
        items: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Vue.js", "MUI"],
    },
    {
        label: "Architecture",
        items: ["Scalable UI", "Design Systems", "Performance", "Accessibility (a11y)"],
    },
    {
        label: "State & Data",
        items: ["React Query", "Context API", "REST APIs"],
    },
    {
        label: "Testing & Quality",
        items: ["Vitest", "Jest", "React Testing Library", "Cypress"],
    },
    {
        label: "Tooling & DevOps",
        items: ["Vite", "Storybook", "Git", "CI/CD", "Docker"],
    },
    {
        label: "AI-Driven Dev",
        items: ["GitHub Copilot", "Antigravity", "Context-Driven Engineering"],
    },
    {
        label: "Backend",
        items: ["Node.js", "PHP", "Laravel"],
    },
]

const experience = [
    {
        role: "Frontend Technical Lead",
        company: "Visto Tecnologia",
        type: "Remote",
        period: "Aug 2023 – Apr 2026",
        bullets: [
            "Served as the technical reference for 8 developers across two squads, establishing frontend standards and ensuring architectural consistency.",
            "Developed internal tooling that eliminated design-to-development friction, accelerating feature delivery for the engineering team.",
            "Championed AI-assisted development workflows, reducing repetitive coding tasks and allowing the team to focus on complex architectural challenges.",
        ],
    },
    {
        role: "Frontend Software Engineer",
        company: "Gamers Club",
        type: "Remote",
        period: "Nov 2021 – May 2023",
        bullets: [
            "Engineered production-grade applications for a platform serving thousands of active users and subscribers in the gaming industry.",
            "Architected and secured checkout and payment flows, ensuring transaction reliability and improving the overall user purchase experience.",
            "Delivered high-impact features in an Agile environment, contributing to roadmap planning and continuous delivery cycles.",
        ],
    },
    {
        role: "Systems Analyst",
        company: "Ânima Educação",
        type: "Brazil",
        period: "Sep 2019 – Oct 2021",
        bullets: [
            "Developed student admission systems serving hundreds of students, ensuring high availability during peak enrollment periods.",
            "Modernized legacy academic platforms, improving system performance and reducing manual administrative overhead.",
            "Collaborated in a lean engineering team to define scalable application architectures for educational tools.",
        ],
    },
    {
        role: "Full Stack Developer",
        company: "DMASTER",
        type: "Brazil",
        period: "Aug 2013 – Jun 2018",
        bullets: [
            "Developed business-critical applications supporting internal operations and complex third-party integrations.",
            "Built full-stack solutions using PHP, JavaScript, and ASP, optimizing internal processes for improved operational efficiency.",
        ],
    },
]

export default function Resume() {
    return (
        <motion.div
            className={styles.page}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className={styles.header} variants={sectionVariants}>
                <div className={styles.headerTop}>
                    <h1 className={styles.name}>Victor Araújo</h1>
                    <span className={styles.title}>Senior Frontend Engineer</span>
                </div>
                <div className={styles.headerMeta}>
                    <span className={styles.metaItem}>
                        <span className={styles.prompt}>$</span> Brazil · Open to Remote (US/EU)
                    </span>
                </div>
                <div className={styles.contacts}>
                    <a
                        href="https://www.linkedin.com/in/victorb-araujo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                    >
                        LinkedIn
                    </a>
                    <a href="https://victoraraujo.com.br" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        Website
                    </a>
                    <a href="mailto:victor.b_@hotmail.com" className={styles.contactLink}>
                        victor.b_@hotmail.com
                    </a>
                    <a href="tel:+5531994513712" className={styles.contactLink}>
                        +55 31 99451-3712
                    </a>
                </div>
            </motion.header>

            {/* Summary */}
            <motion.section className={styles.section} variants={sectionVariants}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.prompt}>~</span> Summary
                </h2>
                <p className={styles.summary}>
                    Senior Frontend Engineer with 10+ years of experience architecting scalable web
                    applications and high-performance user interfaces. Expert in React, TypeScript, and
                    modern frontend ecosystems, with a proven track record of leading technical initiatives,
                    modernizing legacy systems, and mentoring cross-functional teams in remote environments.
                </p>
                <p className={styles.summary}>
                    Early adopter of AI-assisted development (GitHub Copilot, Antigravity), leveraging
                    context-driven practices to accelerate delivery cycles and maintain superior code quality.
                </p>
            </motion.section>

            {/* Skills */}
            <motion.section className={styles.section} variants={sectionVariants}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.prompt}>~</span> Technical Skills
                </h2>
                <div className={styles.skillsGrid}>
                    {skills.map((group) => (
                        <div key={group.label} className={styles.skillGroup}>
                            <span className={styles.skillGroupLabel}>{group.label}</span>
                            <div className={styles.skillTags}>
                                {group.items.map((item) => (
                                    <span key={item} className={styles.skillTag}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Experience */}
            <motion.section className={styles.section} variants={sectionVariants}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.prompt}>~</span> Professional Experience
                </h2>
                <div className={styles.experienceList}>
                    {experience.map((job) => (
                        <div key={job.company} className={styles.experienceCard}>
                            <div className={styles.jobHeader}>
                                <div>
                                    <span className={styles.jobRole}>{job.role}</span>
                                    <span className={styles.jobCompany}> — {job.company}</span>
                                    <span className={styles.jobType}> ({job.type})</span>
                                </div>
                                <span className={styles.jobPeriod}>{job.period}</span>
                            </div>
                            <ul className={styles.jobBullets}>
                                {job.bullets.map((bullet, i) => (
                                    <li key={i} className={styles.jobBullet}>
                                        <span className={styles.bulletDot}>▸</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Education & Languages */}
            <motion.section className={styles.section} variants={sectionVariants}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.prompt}>~</span> Education &amp; Languages
                </h2>
                <div className={styles.eduGrid}>
                    <div className={styles.eduItem}>
                        <span className={styles.eduLabel}><BackpackIcon width={16} height={16} /> Degree</span>
                        <span className={styles.eduValue}>
                            Bachelor's in Information Systems — Faminas Faculdade de Minas (2013)
                        </span>
                    </div>
                    <div className={styles.eduItem}>
                        <span className={styles.eduLabel}><GlobeIcon width={16} height={16} /> English</span>
                        <span className={styles.eduValue}>Full Professional Proficiency (Advanced)</span>
                    </div>
                    <div className={styles.eduItem}>
                        <span className={styles.eduLabel}><ChatBubbleIcon width={16} height={16} /> Portuguese</span>
                        <span className={styles.eduValue}>Native Speaker</span>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}
