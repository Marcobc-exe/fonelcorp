import "./buttons.css";
import { useRef, useState } from "react";
import { WhatsApp } from "@mui/icons-material";
import { type AnimationPlaybackControls } from "motion";
import { useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { MotionButton, MotionDiv } from "../MotionComponents/MuiMotion";
import { whatsAppLink } from "../../const/const";

export const WhatsAppBtn = () => {
  const controlRef = useRef<AnimationPlaybackControls | null>(null);
  const rotate = useMotionValue(0);
  const { scrollY } = useScroll();
  const [display, setDisplay] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 88) setDisplay(true);
    if (display && latest <= 88) setDisplay(false);
  });

  return (
    <a href={whatsAppLink}>
      <MotionButton
        className="btnWhatsapp"
        style={{ rotate }}
        initial={{ x: -100 }}
        animate={{
          x: display ? 0 : -100,
        }}
        onMouseEnter={() => {
          controlRef.current?.play();
        }}
        onMouseLeave={() => {
          controlRef.current?.cancel();
        }}
      >
        <MotionDiv whileHover={{ scale: 1.3 }}>
          <WhatsApp />
        </MotionDiv>
      </MotionButton>
    </a>
  );
};
