import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export function ContinueButton({ path }: { path: string }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      sx={{
        width: "188px",
        height: "50px",
        borderRadius: "36px",
        fontWeight: 600,
        background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
        marginBottom: "30px",
        boxShadow: "0px 0px 44.599998474121094px 0px rgba(143, 0, 255, 0.51)",
      }}
      endIcon={<ArrowRightAltIcon fontSize="large" />}
      onClick={() => {
        navigate(path);
      }}
    >
      Continue
    </Button>
  );
}
