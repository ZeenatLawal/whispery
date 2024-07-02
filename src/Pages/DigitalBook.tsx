import {
  AppBar,
  Toolbar,
  Box,
  // LinearProgress,
  IconButton,
  Slider,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Logo from "../assets/logo.png";
import playIcon from "../assets/playIcon.svg";
import pauseIcon from "../assets/pauseIcon.svg";
import musicOn from "../assets/musicOn.svg";
import Droomvlucht from "../assets/bgSounds/Droomvlucht.mp3";
import Lichtbetovering from "../assets/bgSounds/Lichtbetovering.mp3";
import Nachtfluistering from "../assets/bgSounds/Nachtfluistering.mp3";
import Spreukenkunst from "../assets/bgSounds/Spreukenkunst.mp3";
import Sterrenstof from "../assets/bgSounds/Sterrenstof.mp3";
import { useEffect, useRef, useState } from "react";
import { VolumeDownOutlined } from "@mui/icons-material";
import { FlipBook } from "../components/FlipBook";

const mp3List = [
  { label: "Droomvlucht", music: Droomvlucht },
  { label: "Lichtbetovering", music: Lichtbetovering },
  { label: "Nachtfluistering", music: Nachtfluistering },
  { label: "Spreukenkunst", music: Spreukenkunst },
  { label: "Sterrenstof", music: Sterrenstof },
];

export function DigitalBook() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMp3, setSelectedMp3] = useState(mp3List[0].music);
  const [openList, setOpenList] = useState<HTMLElement | null>(null);
  const [volume, setVolume] = useState(30);
  let audioRef = useRef(new Audio(selectedMp3));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = selectedMp3;
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.volume = volume / 100;

    return () => {
      audio.pause();
    };
  }, [isPlaying, selectedMp3, volume]);

  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "#141122",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="fixed"
        style={{
          height: mobile ? "107px" : "121px",
          background: "inherit",
          alignItems: "center",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            margin: "15px",
            padding: "0",
          }}
        >
          <img src={Logo} alt="Logo" style={{ height: "70px" }} />
        </Toolbar>
      </AppBar>

      <Box margin="135px auto 0" position="relative">
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          sx={{
            overflow: "hidden",
          }}
        >
          <FlipBook />
        </Box>

        <Box
          height="50px"
          marginTop="30px"
          display="flex"
          justifyContent="space-between"
        >
          <IconButton
            onClick={() => setIsPlaying(!isPlaying)}
            sx={{
              paddingLeft: 0,
              width: { md: "150px" },
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {isPlaying ? (
              <img
                src={pauseIcon}
                alt="pauseIcon"
                style={{
                  height: mobile ? "28px" : "38px",
                  width: mobile ? "28px" : "38px",
                }}
              />
            ) : (
              <img
                src={playIcon}
                alt="playIcon"
                style={{
                  height: mobile ? "28px" : "38px",
                  width: mobile ? "28px" : "38px",
                }}
              />
            )}
          </IconButton>

          <IconButton
            onClick={(e) => setOpenList(e.currentTarget)}
            sx={{
              width: { md: "150px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={musicOn}
              alt="musicOn"
              style={{
                height: mobile ? "28px" : "38px",
                width: mobile ? "28px" : "38px",
              }}
            />
          </IconButton>

          <Box
            display="flex"
            alignItems="center"
            width={{ md: "150px" }}
            position="relative"
          >
            <VolumeDownOutlined />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={(e, newVolume) => {
                setVolume(newVolume as number);
              }}
              orientation={mobile ? "vertical" : "horizontal"}
              sx={{
                position: { xs: "absolute", md: "relative" },
                display: { xs: "none", md: "flex" },
              }}
              slotProps={{
                track: {
                  style: {
                    color: "#FFF",
                    height: "5px",
                  },
                },
                rail: {
                  style: {
                    color: "#443C64",
                    height: "5px",
                  },
                },
                thumb: {
                  style: {
                    color: "#fff",
                    border: "4px solid #000",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Menu
        id="music-menu"
        keepMounted
        anchorEl={openList}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(openList)}
        onClose={() => setOpenList(null)}
        MenuListProps={{
          sx: {
            backgroundColor: "#131030",
            width: "150px",
            height: "200px",
            overflowY: "auto",
            padding: 0,
            margin: 0,
          },
        }}
      >
        {mp3List.map(({ label, music }, index) => (
          <MenuItem
            key={index}
            value={label}
            onClick={() => {
              setOpenList(null);
              setSelectedMp3(music);
              setIsPlaying(true);
            }}
            sx={{
              fontWeight: 500,
              fontSize: { xs: "10px", md: "14px" },
              minHeight: "40px",
              padding: "8px 16px",
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
