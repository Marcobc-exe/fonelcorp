import "./reasonCard.css";
import type { FC } from "react";
import type { ReasonService } from "../../types/iconService";
import { MotionBox } from "../MotionComponents/MuiMotion";

export const ReasonCard: FC<ReasonService> = (reason) => {
  return (
    <MotionBox
      key={reason.id}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
        // bgcolor: 'green'
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <img className="img-reason-image" src={reason.src} alt={reason.alt} />
      <h3 className="h3-reason-title">{reason.title}</h3>
      <p className="p-reason-desc">{reason.desc}</p>
    </MotionBox>
  );
};
