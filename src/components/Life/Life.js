import React, { useEffect, useState } from "react";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Life.css";
const Life = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch("./life.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);
  return (
    <div>
      <MenuBar> </MenuBar>
      <div className="row m-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {experiences.map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Life;
