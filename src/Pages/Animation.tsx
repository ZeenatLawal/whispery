import { Grid, useTheme, useMediaQuery, Box } from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Animation() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isBlack, setIsBlack] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlack((prevIsBlack) => !prevIsBlack);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnimating(false);
    }, 3000); // show animation for 3 seconds before moving to next page

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      navigate("/bookTypes");
    }
  }, [isAnimating, navigate]);

  const renderSquare = (index: number) => {
    const row = Math.floor(index / 4);
    const column = index % 4;
    const isBlackSquare = (row + column + (isBlack ? 0 : 1)) % 2 === 0;

    return (
      <Box
        key={index}
        width={{ xs: "80px", md: "180px" }}
        height={{ xs: "80px", md: "180px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          transition: "background-color 0.5s ease",
          opacity: "0.06",
          backgroundColor: isBlackSquare ? "black" : "white",
        }}
      ></Box>
    );
  };

  return (
    <Header pageNumber={7} path="/summary">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Wow, that would be a great book!" />
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop={{ xs: "94px", md: "80px" }}
        marginBottom={{ xs: "192px", md: "80px" }}
        justifyContent="center"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(4, ${
              isSmallScreen ? "80px" : "180px"
            })`,
            gridTemplateRows: `repeat(4, ${isSmallScreen ? "80px" : "180px"})`,
          }}
        >
          {[...Array(16)].map((_, index) => renderSquare(index))}
        </div>
      </Grid>
    </Header>
  );
}
