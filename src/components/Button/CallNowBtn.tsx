import { PhoneOutlined } from "@mui/icons-material";
import { MotionButton } from "../MotionComponents/MuiMotion";
import "./buttons.css";
import { useEffect, useRef, useState } from "react";
import { animate, type AnimationPlaybackControls } from "motion";
import { useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { call } from "../../const/const";

export const CallNowBtn = () => {
  const controlRef = useRef<AnimationPlaybackControls | null>(null);
  const rotate = useMotionValue(0);
  const { scrollY } = useScroll();
  const [display, setDisplay] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 88) setDisplay(true);
    if (display && latest <= 88) setDisplay(false);
  });

  useEffect(() => {
    const controls = animate(rotate, [15, -15, 15, -15, 15, -15], {
      duration: 0.4,
      repeat: Infinity,
      velocity: 100,
      type: "keyframes",
    });

    controlRef.current = controls;
    controlRef.current.pause();
  }, [rotate]);

  return (
    <a href={call}>
      <MotionButton
        className="btnCallnow"
        style={{ rotate }}
        initial={{ x: -100 }}
        animate={{
          x: display ? 0 : -100,
          transition: {
            duration: 0.4,
          },
        }}
        onMouseEnter={() => {
          controlRef.current?.play();
        }}
        onMouseLeave={() => {
          controlRef.current?.cancel();
        }}
      >
        <PhoneOutlined />
      </MotionButton>
    </a>
  );
};
