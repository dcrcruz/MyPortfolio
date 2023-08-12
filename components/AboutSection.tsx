import React from "react";
import Image from "next/image";

// const skills = [
//   { skill: "HTML" },
//   { skill: "CSS" },
//   { skill: "JavaScript" },
//   { skill: "TypeScript" },
//   { skill: "Python" },
//   { skill: "React" },
//   { skill: "Next.js" },
//   { skill: "Tailwind CSS" },
//   { skill: "Git" },
//   { skill: "GitHub" },
//   { skill: "Jupyter Notebooks" },
// ];

const AboutSection = () => {
  return (
    <section>
      <div>
        <h1>About Me</h1>
        <div>
          <div>
            <h1>Get to know me!</h1>
            <p>
              Hi, my name is Derick and I am a{" "}
              <span className="font-bold">{"driven"}</span>,
              <span className="font-bold">{"eager"}</span>, and
              <span className="font-bold">{"self-motivated"}</span> Software
              Engineer trainee based in Manila, Philippines.
            </p>
            <br />
            <p>
              I graduated from Mapua University with a BS in Electronics
              Engineering with a specialization in Advanced Internet Protocol
              Networking.
            </p>
            <br />
            <p>
              After graduation, I have strived to pursue a career in the IT
              Industry. My first job role was a QA Engineer and it helped me
            </p>
            <br />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
