"use client";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./MenuPage.module.scss";

const MenuPage = () => {
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
    const handleResize = () => {
      setContainerWidth(
        document.getElementById("pdf-container")?.offsetWidth || 800
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <section className={styles.menuSection}>
      <div
        id="pdf-container"
        className="pdfContainer"
        style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
      >
        <Document file="/pdf/menu.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <Page
                  key={page}
                  className={styles.pdfPage}
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={containerWidth || 800} // Set width dynamically
                />
              );
            })}
        </Document>
      </div>
    </section>
  );
};

export default MenuPage;
