import React from "react";
import Typography from "@mui/material/Typography";

export default function HeadingSection({ heading }) {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: {
          xs: "28px",
          md: "36px",
        },
        fontWeight: "bold",
        color: "#2E582C",
        my: 1,
        padding: "12px",
        borderTop: "3px solid #CFFE64",
      }}
    >
      {heading}
    </Typography>
  );
}
