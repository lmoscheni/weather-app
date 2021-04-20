import HightLightItem from "./HightLightItem";
import ProgressBar from "./ProgressBar";
import WindIcon from "./WindIcon";

import "./styles.css";

export default function HightLights({ todayInfo }) {
  console.log("todayInfo", todayInfo);

  const items = [
    { title: "Wild Status", measure: todayInfo.wind_speed, unit: "mph" },
    { title: "Humidity", measure: todayInfo.humidity, unit: "%" },
    { title: "Visibility", measure: todayInfo.visibility, unit: "miles" },
    { title: "Air Pressure", measure: todayInfo.air_pressure, unit: "mb" },
  ];

  return (
    <div className="hight-lights-container">
      <h1 className="hight-lights-title">Today’s Hightlights</h1>
      <div className="hight-lights-info">
        {items.map((item) => (
          <HightLightItem key={item.title} {...item}>
            {item.title === "Humidity" ? (
              <ProgressBar completed={todayInfo.humidity} />
            ) : null}
            {item.title === "Wild Status" ? <WindIcon /> : null}
          </HightLightItem>
        ))}
      </div>
    </div>
  );
}
