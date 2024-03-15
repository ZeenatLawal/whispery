import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  TextField,
} from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";
import { useState } from "react";

export function PersonalMessage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const [personalMessage, setPersonalMessage] = useState("");

  const buttonStyle = {
    borderRadius: "49px",
    boxShadow: "inset 1px 1px 0 0 #8B7CF8, inset 0 0 1px 1px #ED65F3",
    height: isSmallest ? "50px" : "34px",
    color: "#BFBDD4DE",
    padding: "5px 19px",
    fontWeight: 400,
  };

  return (
    <Header pageNumber={5} path="/themes">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Personal-message" />
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop={{ xs: "55px", md: "80px" }}
        justifyContent="center"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: isSmallScreen ? "65px 25px" : "63px 112px",
            backgroundColor: "#17142A63",
            borderRadius: "15px",
            boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
            maxWidth: isSmallest ? "300px" : "763px",
            height: isSmallest ? "830px" : isSmallScreen ? "786px" : "675px",
          }}
        >
          <Typography
            style={{ fontWeight: 600, textAlign: "center" }}
            fontSize={{ xs: "20px", md: "24px" }}
          >
            You can put a personal message for the person reading the book.
          </Typography>

          <Grid
            container
            justifyContent="center"
            marginTop="35px"
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  ...buttonStyle,
                  width: isSmallest ? "256px" : { xs: "327px", md: "auto" },
                }}
              >
                That will be the first page of the book.
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                sx={buttonStyle}
                startIcon={<InfoOutlined fontSize="large" />}
              >
                Maximum words 60
              </Button>
            </Grid>
          </Grid>

          <TextField
            sx={{
              margin: { xs: "55px 0 65px 0", md: "62px 0" },
              width: isSmallest ? "260px" : { xs: "330px", md: "540px" },
            }}
            multiline
            placeholder={
              isSmallScreen
                ? `Ut blandit ipsum ornare id. Integer ornare enim a massa elementum malesuada.
            Vivamus augue ipsum, hendrerit et neque sed, tincidunt dapibus ante. Nulla vitae ante volutpat ex dictum eleifend volutpat in velit. Ut non enim vel orci condimentum blandit sit amet sed nunc. Donec tincidunt vehicula finibus.`
                : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu erat, elementum vitae laoreet finibus, sagittis vel leo. Nam facilisis magna ligula, ut blandit ipsum ornare id. Integer ornare enim a massa elementum malesuada.
            Vivamus augue ipsum, hendrerit et neque sed, tincidunt dapibus ante. Nulla vitae ante volutpat ex dictum eleifend volutpat in velit. Ut non enim vel orci condimentum blandit sit amet sed nunc. Donec tincidunt vehicula finibus.`
            }
            value={personalMessage}
            onChange={(e) => setPersonalMessage(e.target.value)}
          />

          <ContinueButton path="/message" />
        </div>
      </Grid>
    </Header>
  );
}
