import {
  AppBar,
  Toolbar,
  Box,
  Divider,
  LinearProgress,
  IconButton,
  Typography,
  Slider,
  Menu,
  MenuItem,
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
import {
  SkipNextOutlined,
  SkipPreviousOutlined,
  VolumeDownOutlined,
} from "@mui/icons-material";

const mp3List = [
  { label: "Droomvlucht", music: Droomvlucht },
  { label: "Lichtbetovering", music: Lichtbetovering },
  { label: "Nachtfluistering", music: Nachtfluistering },
  { label: "Spreukenkunst", music: Spreukenkunst },
  { label: "Sterrenstof", music: Sterrenstof },
];

export function DigitalBook() {
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
        backgroundColor: "#0D0B22",
        width: "100%",
        height: "100vh",
      }}
    >
      <AppBar
        position="fixed"
        style={{
          background: "none",
          alignItems: "center",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            marginTop: "30px",
          }}
        >
          <img src={Logo} alt="Logo" style={{ height: "70px" }} />
        </Toolbar>
      </AppBar>

      <Box margin="135px auto 0">
        <Box display="flex" height="750px" marginBottom="30px">
          <Box
            width="620px"
            sx={{
              background: "#FFF",
            }}
          ></Box>
          <Divider
            sx={{
              height: "100%",
              width: "2px",
              background:
                "linear-gradient(90deg, #1F1F1F 0%, rgba(196, 196, 196, 0) 100%)",
            }}
          />
          <Box
            width="620px"
            sx={{
              background: "antiquewhite",
            }}
          ></Box>
        </Box>

        <LinearProgress
          variant="determinate"
          value={75}
          sx={{
            height: "7px",
            backgroundColor: "#443C64",
            "& .MuiLinearProgress-bar1Determinate": {
              backgroundColor: "#FFF",
            },
          }}
        />

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
            }}
          >
            {isPlaying ? (
              <img src={pauseIcon} alt="pauseIcon" />
            ) : (
              <img src={playIcon} alt="playIcon" />
            )}
          </IconButton>

          <Box display="flex" alignItems="center" margin="0 240px 0 300px">
            <IconButton>
              <SkipPreviousOutlined
                sx={{
                  color: "#FFF",
                }}
              />
              <Typography
                sx={{
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              >
                Previous Page
              </Typography>
            </IconButton>

            <IconButton
              onClick={(e) => setOpenList(e.currentTarget)}
              sx={{
                marginX: "52px",
              }}
            >
              <img
                src={musicOn}
                alt="musicOn"
                style={{
                  height: "38px",
                  width: "38px",
                }}
              />
            </IconButton>

            <IconButton>
              <Typography
                sx={{
                  fontSize: "20px",
                  marginRight: "10px",
                }}
              >
                Next Page
              </Typography>
              <SkipNextOutlined
                sx={{
                  color: "#FFF",
                }}
              />
            </IconButton>
          </Box>

          <Box display="flex" alignItems="center" width="150px">
            <VolumeDownOutlined />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={(e, newVolume) => {
                setVolume(newVolume as number);
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
