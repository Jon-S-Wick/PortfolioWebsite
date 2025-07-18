import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';


// Set workerSrc manually to avoid bundling issues
pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.min.js`;

type Props = {
  file: string; // path or URL to PDF
};

export  function PdfViewer({ file }: Props) {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={index + 1} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}

export default function pdfPage(){
    return (
        <div>
            <h1>
                hi
            </h1>
            <Document
            file="./Jon-WickCV.pdf"
            ></Document>

    </div>

    );
}
