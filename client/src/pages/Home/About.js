import React from "react";
import SectionTitle from "../../components/SectionTitle";
import img from "../../images/Moroti_Sonde.jpg";
function About() {
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex">
        <div className="w-1/2">
          <img src={img} alt="pics of Moroti" />
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white px-5">
            Hello! My name is Moroti Sonde. I enjoy creating new things that
            resides on the internet. My expertise lies within backend web
            application and the main languages in my tech stack are Javascript,
            React, Java, Python, React-Native, and of course HTML/CSS.
          </p>
          <p className="text-white px-5">
            I'm a life long learner and always ready to collaborate on new
            projects. Here are few technologies I've been working with recently:
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
