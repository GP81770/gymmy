import React from "react";
import "../index.css";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
      <p>It's TIME TO SWITCH YOUR WORKOUT PLAN TO</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
        STRENUOS{" "}
      </h1>
      <p className="text-sm md:text-base font-semibold">
        Your One Stop Place for all the Workout. <br /> You{" "}
        <span style={{ color: "orange" }}>Seek</span> it. <br /> We
        <span style={{ color: "orange" }}> Give</span> it..
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
