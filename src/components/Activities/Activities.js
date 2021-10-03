import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Activities.css";
const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("./activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="row m-3">
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Activities;
