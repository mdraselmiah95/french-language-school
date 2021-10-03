import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Courses.css";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="row ms-3 mb-5">
        <h1 className="text-center">Our Courses</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
