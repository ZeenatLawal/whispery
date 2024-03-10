import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function ContinueButton() {
  return (
    <Button
      variant="contained"
      sx={{
        height: "50px",
        borderRadius: "36px",
        fontWeight: 600,
        padding: "10px 30px",
        background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
      }}
      endIcon={<ArrowForwardIcon />}
    >
      Continue
    </Button>
  );
}