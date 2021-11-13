import React from "react";
import "./CSS/TrainingSchedule.css";
import Button from "react-bootstrap/Button";
import { Clock } from "react-bootstrap-icons";

const TrainingSchedule = (props) => {
  const date = new Date();
  const testDate = date.getMonth();

  const buttonState = () => {
    if (date.getDate() === props.date && testDate === props.startDate) {
      return false;
    } else if (
      date.getDate() + 1 === props.date &&
      testDate === props.startDate
    ) {
      return false;
    } else if (
      date.getDate() - 1 === props.date &&
      testDate === props.startDate
    ) {
      return false;
    } else {
      return true;
    }
  };

  const coachZoomLink = (coach) => {
    const derek =
      "//us02web.zoom.us/j/2909214628?pwd=UENveUl1OTI2d0NLM05kVGd3RDR3dz09";
    const jason =
      "//us04web.zoom.us/j/2297359060?pwd=NVVJanJMc0ZnRyt3ekJzbDhIWlBrdz09";

    switch (coach) {
      case "derek":
        return derek;
        break;

      case "jason":
        return jason;
        break;
    }
  };

  return (
    <div className="margin-t-sm">
      <div className="schedule-container">
        <div
          className="date-box color-box"
          style={{ backgroundColor: props.backgroundColor }}
        >
          <h1>{props.date}</h1>
          <h2>{props.month}</h2>
        </div>

        <div className="details" style={{ backgroundColor: "" }}>
          <h3>{props.eventTitle}</h3>
          <h6>{props.eventDescription}</h6>
          <div>
            <h4>
              <span className="d-flex justify-content-between ms-auto">
                <span>
                  <Clock style={{ marginRight: "5px" }} />
                  {props.time}
                </span>
              </span>
            </h4>

            <Button
              variant="primary"
              size="sm"
              disabled={buttonState()}
              href={coachZoomLink(props.coach)}
              target="_blank"
            >
              Join Meeting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSchedule;
