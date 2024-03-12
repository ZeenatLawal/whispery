import { Typography } from "@mui/material";

export function PageTitle({ title }) {
  return (
    <Typography
      style={{ fontWeight: 700 }}
      fontSize={{ xs: "28px", md: "40px" }}
    >
      {title}
    </Typography>
  );
}
