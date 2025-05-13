import type { TypographyProps } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

type CustomTypographyProps = TypographyProps & {
  variant?: "h1" | "h2" | "h3" | "body1" | "caption" | string;
};

export const Typography: React.FC<CustomTypographyProps> = ({
  variant = "body1",
  children,
  ...props
}) => {
  const variantStyles = {
    h1: { fontWeight: 600, fontSize: "5rem", color: "#1F355E" },
    h2: { fontWeight: 600, fontSize: "3rem", color: "#1F355E" },
    h3: { fontWeight: 600, fontSize: "2.5rem", color: "#1F355E" },
    h4: { fontWeight: 600, fontSize: "1.5rem", color: "#1F355E" },
    h5: { fontWeight: 600, fontSize: "1.2rem", color: "#1F355E" },
    h6: {
      fontWeight: 700,
      fontSize: "2.1rem",
      marginBottom: "1rem",
      color: "#1F355E",
      lineHeight: '40px'
    },
    subtitle1: { fontWeight: 600, fontSize: "2rem", color: "#1F355E" },
    subtitle2: { fontWeight: 600, fontSize: "4rem", color: "#1F355E" },
    body1: { fontSize: "1rem", fontWeight: 400, color: "#1F355E" },
    body2: { fontSize: "1rem", fontWeight: "bold", color: "#1F355E" },
    body3: { fontSize: "1rem", fontWeight: "800", color: "#1F355E" },
  };

  return (
    <MuiTypography
      sx={variantStyles[variant as keyof typeof variantStyles]}
      variant={variant}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};
