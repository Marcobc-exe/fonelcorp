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
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <p
        style={{
          color: "#F89A2D",
          fontWeight: "bold",
          fontSize: 20,
          margin: 0,
        }}
      >
        {reason.title}
      </p>
      <p
        style={{
          color: "#294971",
          width: 240,
        }}
      >
        {reason.desc}
      </p>
    </MotionBox>
  );
};
