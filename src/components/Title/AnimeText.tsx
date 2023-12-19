import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./CursorBlinker";

export interface IAnimTextProps {
  delay: number;
  baseText: string;
  cursor: "BEGIN" | "END";
}

export default function AnimeText({ delay, baseText, cursor }: IAnimTextProps) {
  const count = useMotionValue(0);
  const [done, setDone] = useState(false);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 3,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.h1>{displayText}</motion.h1>
      {done && cursor === "END" && <CursorBlinker />}
      {!done && cursor === "BEGIN" && <CursorBlinker />}
    </>
  );
}
