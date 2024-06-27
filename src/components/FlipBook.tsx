import { Box, useTheme, useMediaQuery } from "@mui/material";
import PDF from "../assets/aiStory.pdf";
import HTMLFlipBook from "react-pageflip";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "pdfjs-dist/web/pdf_viewer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function FlipBook() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setNumPages(numPages);
    console.log("numPages", numPages);
  };

  return (
    <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
      {numPages && (
        <HTMLFlipBook
          width={mobile ? 325 : 650}
          height={750}
          size="stretch"
          minWidth={mobile ? 325 : 650}
          maxWidth={325}
          minHeight={750}
          maxHeight={750}
          maxShadowOpacity={0.5}
          className="page-flip-container"
          style={{ background: "#FFF", marginBottom: "30px" }}
          showCover
          drawShadow
          mobileScrollSupport
          flippingTime={1000}
          usePortrait={mobile ? true : false}
          startZIndex={1200}
          autoSize
          swipeDistance={50}
          clickEventForward
          useMouseEvents
          renderOnlyPageLengthChange
          showPageCorners
          startPage={0}
          disableFlipByClick={false}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Box
              key={`page_${index + 1}`}
              className="page"
              // sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   width: { xs: "325px", md: "650px" },
              //   height: "750px",
              //   background: "#FFF",
              //   padding: "20px",
              // }}
            >
              {/* <Typography
                    variant="h1"
                    sx={{
                      color: "#000",
                    }}
                  >
                    Page {index + 1}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      marginTop: "20px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, ipsam fugit. Velit, atque vero iure saepe, optio
                    error sunt officiis reprehenderit quaerat ipsum nesciunt
                    modi deleniti iusto repudiandae, enim quae!
                  </Typography> */}
              <Page pageNumber={index + 1} />
            </Box>
          ))}
        </HTMLFlipBook>
      )}
    </Document>
  );
}
