import type { CSSProperties, FC } from "react";
import { MotionGrid } from "../../../MotionComponents/MuiMotion";
import type { ServiceCard } from "../../../../types/service";

type Props = {
  isTablet: boolean;
  isDesktop: boolean;
  serviceSelected: ServiceCard | null;
};

export const SelectedService: FC<Props> = ({
  isTablet,
  isDesktop,
  serviceSelected,
}) => {
  if (!serviceSelected) return;
  const { image, title, desc, alt } = serviceSelected;

  const containerProps = {
    size: isDesktop ? 6 : 12,
    display: "flex",
    flexDirection: isDesktop ? "column" : "row",
    alignItems: "center",
    paddingInline: "18px",
    gap: isDesktop ? "10px" : "20px",
  } as const;

  const imageStyles: CSSProperties = {
    width: isDesktop ? "160px" : "60px",
    height: isDesktop ? "160px" : "60px",
    objectFit: "cover",
    aspectRatio: "16/9",
    borderRadius: "100px",
  };

  const divStyles: CSSProperties = {
    textAlign: isDesktop ? "center" : "left",
  };

  const descStyles: CSSProperties = {
    width: isDesktop ? "100%" : "auto",
    textAlign: "center",
  };

  return (
    <MotionGrid {...containerProps}>
      <img src={image} alt={alt} style={imageStyles} />
      <div style={divStyles}>
        <h3>{title}</h3>
        {isDesktop || isTablet ? <p style={descStyles}>{desc}</p> : null}
      </div>
    </MotionGrid>
  );
};
