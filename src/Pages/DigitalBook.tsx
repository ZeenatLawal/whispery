import {
  AppBar,
  Toolbar,
  Box,
  Divider,
  LinearProgress,
  IconButton,
  Typography,
  Slider,
} from "@mui/material";
import Logo from "../assets/logo.png";
import playIcon from "../assets/playIcon.svg";
import pauseIcon from "../assets/pauseIcon.svg";
import musicOn from "../assets/musicOn.svg";
import musicMute from "../assets/musicMute.svg";
import testAudio from "../assets/testAudio.mp3";
import { useEffect, useRef, useState } from "react";
import {
  SkipNextOutlined,
  SkipPreviousOutlined,
  VolumeDownOutlined,
} from "@mui/icons-material";

export function DigitalBook() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30);
  const audioRef = useRef(new Audio(testAudio));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.muted = isMuted;
    audio.volume = volume / 100;

    return () => {
      audio.pause();
    };
  }, [isPlaying, isMuted, volume]);

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
              onClick={() => setIsMuted(!isMuted)}
              sx={{
                marginX: "52px",
              }}
            >
              {isMuted ? (
                <img
                  src={musicMute}
                  alt="musicMute"
                  style={{
                    height: "38px",
                    width: "38px",
                  }}
                />
              ) : (
                <img
                  src={musicOn}
                  alt="musicOn"
                  style={{
                    height: "38px",
                    width: "38px",
                  }}
                />
              )}
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
    </Box>
  );
}
