import React from "react";

const Loader = () => {
  return (
    <>
      <div
        className="spinner"
        // style={{
        //   width: 44,
        //   height: 44,
        //   animation: "spinner-y0fdc1 2s infinite ease",
        //   transformStyle: "preserve-3d",
        //   margin:"25% 0 0 50%"
        // }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,77,255,0.2)",
            height: "100%",
            position: "absolute",
            width: "100%",
            border: "2px solid #004dff",
            transform: "translateZ(-22px) rotateY(180deg)"
          }}
        />
        <div
          style={{
            backgroundColor: "rgba(0,77,255,0.2)",
            height: "100%",
            position: "absolute",
            width: "100%",
            border: "2px solid #004dff",
            transform: "rotateY(-270deg) translateX(50%)",
            transformOrigin: "top right"
          }}
        />
        <div
          style={{
            backgroundColor: "rgba(0,77,255,0.2)",
            height: "100%",
            position: "absolute",
            width: "100%",
            border: "2px solid #004dff",
            transform: "rotateY(270deg) translateX(-50%)",
            transformOrigin: "center left"
          }}
        />
        {/* Middle part */}
        <div
          style={{
            backgroundColor: "rgba(0,77,255,0.2)",
            height: "100%",
            position: "absolute",
            width: "100%",
            
            border: "2px solid #004dff",
            transform: "rotateX(90deg) translateY(-50%)",
            transformOrigin: "top center"
          }}
        />
        {/* End of middle part */}
        <div
          style={{
            backgroundColor: "rgba(0,77,255,0.2)",
            height: "100%",
            position: "absolute",
            width: "100%",
            border: "2px solid #004dff",
            transform: "rotateX(-90deg) translateY(50%)",
            transformOrigin: "bottom center"
          }}
        />
        <div
          style={{
            backgroundColor: "rgba(0,77,255,0.2)",
            height: "100%",
            position: "absolute",
            width: "100%",
            border: "2px solid #004dff",
            transform: "translateZ(22px)"
          }}
        />
      </div>
    </>
  );
};
export default Loader;
