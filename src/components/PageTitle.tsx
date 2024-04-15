import { Typography } from "@mui/material";

export function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <Typography
        style={{ fontWeight: 700 }}
        fontSize={{ xs: "28px", md: "40px" }}
      >
        {title}
      </Typography>
      <Typography fontSize={{ xs: "14px", md: "16px" }}>{subtitle}</Typography>
    </>
  );
}
