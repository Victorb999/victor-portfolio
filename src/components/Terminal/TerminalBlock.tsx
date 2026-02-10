"use client"
import { useEffect, useState } from "react"
import styles from "./TerminalBlock.module.css"

interface TerminalBlockProps {
    lines: string[]
    typingSpeed?: number
    showCursor?: boolean
}

export default function TerminalBlock({
    lines,
    typingSpeed = 50,
    showCursor = true,
}: TerminalBlockProps) {
    const [displayedLines, setDisplayedLines] = useState<string[]>([])
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if (currentLineIndex >= lines.length) {
            setIsTyping(false)
            return
        }

        const currentLine = lines[currentLineIndex]

        if (currentText.length < currentLine.length) {
            const timeout = setTimeout(() => {
                setCurrentText(currentLine.slice(0, currentText.length + 1))
            }, typingSpeed)

            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setDisplayedLines([...displayedLines, currentText])
                setCurrentText("")
                setCurrentLineIndex(currentLineIndex + 1)
            }, 500)

            return () => clearTimeout(timeout)
        }
    }, [currentText, currentLineIndex, lines, displayedLines, typingSpeed])

    return (
        <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
                <div className={styles.terminalButtons}>
                    <span className={`${styles.terminalButton} ${styles.close}`}></span>
                    <span
                        className={`${styles.terminalButton} ${styles.minimize}`}
                    ></span>
                    <span
                        className={`${styles.terminalButton} ${styles.maximize}`}
                    ></span>
                </div>
                <div className={styles.terminalTitle}>victor@portfolio:~$</div>
            </div>
            <div className={styles.terminalBody}>
                {displayedLines.map((line, index) => (
                    <div key={index} className={styles.terminalLine}>
                        <span className={styles.prompt}>$</span> {line}
                    </div>
                ))}
                {currentText && (
                    <div className={styles.terminalLine}>
                        <span className={styles.prompt}>$</span> {currentText}
                        {showCursor && isTyping && (
                            <span className={styles.cursor}>_</span>
                        )}
                    </div>
                )}
                {!isTyping && showCursor && (
                    <div className={styles.terminalLine}>
                        <span className={styles.prompt}>$</span>
                        <span className={styles.cursor}>_</span>
                    </div>
                )}
            </div>
        </div>
    )
}
