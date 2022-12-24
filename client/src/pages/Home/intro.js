import React from "react";

function intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi , I am </h1>
      <h1 className="text-7xl text-secondary font-semibold">Moroti Sonde</h1>
      <h1 className="text-7xl text-white font-semibold">
        I build things for the web
      </h1>
      <p className="text-white w-2/3">
        I am a fullstack web developer, data scientist, Natural Language
        Processing(NLP) Enthusiast. Currently working on MERN stack applications
        and ready to collaborate on new projects.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default intro;
