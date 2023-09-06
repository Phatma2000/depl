import React, { forwardRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Print.css";

const Print = () => {
  const handlePrintFront = async () => {
    const node = document.querySelector(".first-card-blog");
    const w = document.querySelector(".first-card-blog")?.offsetWidth;
    const h = document.querySelector(".first-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save();
  };

  const handlePrintBack = async () => {
    const node = document.querySelector(".second-card-blog");
    const w = document.querySelector(".second-card-blog")?.offsetWidth;
    const h = document.querySelector(".second-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save();
  };

  return (
    <>
      <div className="print-div">
        <button
          onClick={handlePrintFront}
          // style={{
          //   color: "#fff",
          //   background: "#92CBCE",
          //   padding: "10px",
          //   border: "none",
          //   borderRadius: "10px",
          //   fontSize: "14px",
          //   fontWeight: "900",
          // }}
        >
          Print Front
        </button>

        <button
          onClick={handlePrintBack}
          // style={{
          //   color: "#fff",
          //   background: "#92CBCE",
          //   padding: "10px",
          //   border: "none",
          //   borderRadius: "10px",
          //   fontSize: "14px",
          //   fontWeight: "900",
          // }}
        >
          Print Back
        </button>
      </div>
      <div className="right-header">
        <h2
          style={{
            marginBottom: "20px",
            background: "beige",
            color: "rgb(146, 203, 206)",
            padding: "11px",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        >
          Choose business card template designed for you
        </h2>
      </div>
    </>
  );
};

export default Print;
