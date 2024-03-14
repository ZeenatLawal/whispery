import {
  useTheme,
  useMediaQuery,
  Grid,
  Typography,
  Card,
  IconButton,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Check from "@mui/icons-material/Check";
import Jungle from "../assets/jungle.png";
import Safari from "../assets/safari.png";
import Zoo from "../assets/zoo.png";
import AmusementPark from "../assets/amusementPark.png";
import Underwater from "../assets/underwater.png";
import Space from "../assets/space.png";
import Island from "../assets/island.png";
import FantasyLand from "../assets/fantasyLand.png";
import DragonWorld from "../assets/dragonWorld.png";
import Circus from "../assets/circus.png";
import Dinosaur from "../assets/dinosaur.png";
import RobotWorld from "../assets/robotWorld.png";
import Castles from "../assets/castles.png";
import CandyWorld from "../assets/candyWorld.png";
import MagicSchool from "../assets/magicSchool.png";
import WildWest from "../assets/wildWest.png";
import PurchasingPet from "../assets/purchasingPet.png";

const images = [
  { caption: "Jungle", img: Jungle },
  { caption: "Safari", img: Safari },
  { caption: "Zoo", img: Zoo },
  { caption: "Amusement park", img: AmusementPark },
  { caption: "Underwater", img: Underwater },
  { caption: "Space", img: Space },
  { caption: "Island", img: Island },
  { caption: "Fantasy land", img: FantasyLand },
  { caption: "Dragon world", img: DragonWorld },
  { caption: "Circus", img: Circus },
  { caption: "Dinosaur", img: Dinosaur },
  { caption: "Robot world", img: RobotWorld },
  { caption: "Castles", img: Castles },
  { caption: "Candy world", img: CandyWorld },
  { caption: "Magic school", img: MagicSchool },
  { caption: "Wild west", img: WildWest },
  { caption: "Purchasing a Pet", img: PurchasingPet },
];

export function ChooseTheme() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const iconStyle = {
    border: "1px solid",
    borderColor: "#EAECF0",
    marginRight: "32px",
    width: "56px",
    height: "56px",
    color: "#C665F3",
    "&:disabled": { color: "#25234B", borderColor: "#3C4C6C" },
  };

  useEffect(() => {
    // Scroll to the active theme when it changes
    if (containerRef.current) {
      const activeTheme = containerRef.current.children[activeIndex];
      if (activeTheme) {
        activeTheme.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [activeIndex]);

  return (
    <Header pageNumber={4} path="/events">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Choose a theme" />
      </Grid>

      <Grid item container xs={12} marginTop="80px">
        <Grid container ref={containerRef} overflow="hidden" flexWrap="nowrap">
          {images.map(({ img, caption }, index) => (
            <Card
              key={caption}
              sx={{
                minWidth: { xs: "260px", md: "287px" },
                minHeight: { xs: "316px", md: "349px" },
                transform: `translateX(${
                  (index - activeIndex) * (isSmallScreen ? 22.59 : 40)
                }px)`,
                transition: "transform 0.5s ease",
                backgroundColor: "#0D0B22",
                borderRadius: "9.06px",
                boxShadow:
                  index === activeIndex
                    ? "inset 1.81px 1.81px 0 0 #8B7CF8, inset 0 0 1.81px 1.81px #ED65F3, 0px 0px 19.9px 0px #7062FF4D"
                    : "none",
                padding: "2px",
                border: index !== activeIndex ? "1px solid #5256A9A6" : "none",
              }}
            >
              <img
                src={img}
                alt={caption}
                style={{
                  width: "100%",
                  height: "auto",
                  borderTopLeftRadius: "9.06px",
                  borderTopRightRadius: "9.06px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: isSmallScreen ? "22px 18px" : "24px 20px",
                }}
              >
                <Typography
                  style={{ fontWeight: 600 }}
                  fontSize={{ xs: "18.12px", md: "20px" }}
                >
                  {caption}
                </Typography>
                <IconButton
                  sx={{
                    width: "20.84px",
                    height: "20.84px",
                    boxShadow: `inset 0.91px 0.91px 0 0 #8B7CF8, inset 0 0 0.91px 0.91px #ED65F3 ${
                      index === activeIndex
                        ? ", 0px 0px 18px 0px #7062FF4D"
                        : ""
                    }`,
                    backgroundColor:
                      index === activeIndex ? "#272354" : "inherit",
                  }}
                >
                  {index === activeIndex && (
                    <Check sx={{ color: "#fff", height: "16px" }} />
                  )}
                </IconButton>
              </div>
            </Card>
          ))}
        </Grid>

        <Grid
          container
          justifyContent="center"
          marginTop={{ xs: "35px", md: "80px" }}
        >
          <IconButton
            onClick={() => {
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              );
            }}
            sx={iconStyle}
            disabled={activeIndex === 0}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={() => {
              setActiveIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              );
            }}
            sx={iconStyle}
            disabled={activeIndex === images.length - 1}
          >
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent={{ xs: "center", md: "flex-end" }}
        marginTop={{ xs: "127px", md: "92px" }}
      >
        <ContinueButton path="/themes" />
      </Grid>
    </Header>
  );
}
