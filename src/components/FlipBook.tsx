import {
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
} from "@mui/material";
import PDF from "../assets/aiStory.pdf";
import HTMLFlipBook from "react-pageflip";
import { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "pdfjs-dist/web/pdf_viewer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function FlipBook() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(0);
  const flipBookRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages && (
          <>
            {mobile ? (
              // @ts-ignore
              <HTMLFlipBook
                autoSize
                width={350}
                height={350}
                showCover
                maxShadowOpacity={0.5}
                usePortrait={true}
                mobileScrollSupport={true}
                onFlip={(e) => {
                  setPage(e.data);
                }}
                ref={flipBookRef}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Box
                    key={`page_${index + 1}`}
                    className="page"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "350px",
                      height: "350px",
                    }}
                  >
                    <Page pageNumber={index + 1} width={350} />
                  </Box>
                ))}
              </HTMLFlipBook>
            ) : (
              // @ts-ignore
              <HTMLFlipBook
                autoSize
                width={600}
                height={600}
                maxShadowOpacity={0.5}
                style={{ backgroundColor: "#FFF" }}
                showCover
                usePortrait={false}
                startPage={0}
                onFlip={(e) => {
                  setPage(e.data);
                }}
                ref={flipBookRef}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Box key={`page_${index + 1}`}>
                    <Page pageNumber={index + 1} width={600} height={600} />
                  </Box>
                ))}
              </HTMLFlipBook>
            )}
          </>
        )}
      </Document>

      <Box
        display="flex"
        alignItems="center"
        width={{ md: "50%" }}
        justifyContent="space-between"
        marginTop="20px"
      >
        <IconButton>
          <SkipPreviousOutlined
            sx={{
              color: "#FFF",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "20px" },
              marginLeft: "10px",
            }}
          >
            Previous
          </Typography>
        </IconButton>

        <Typography
          sx={{
            fontSize: { xs: "14px", md: "20px" },
            marginX: "20px",
          }}
        >
          {page} of {numPages > 0 ? numPages - 1 : 0}
        </Typography>

        <IconButton>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "20px" },
              marginRight: "10px",
            }}
          >
            Next
          </Typography>
          <SkipNextOutlined
            sx={{
              color: "#FFF",
            }}
          />
        </IconButton>
      </Box>
    </>
  );
}
