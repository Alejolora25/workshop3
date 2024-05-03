import React, { useState } from "react";
import "../Styles/CardJob.css";
import {
  BsBuildings,
  BsPeople,
  BsCalendar3,
} from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { PiMoneyFill } from "react-icons/pi";
import BenefitIcon from "./BenefitIcon";

export const CardJob = (props) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`container my-3 card ${isHovered ? "shadow" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="row d-flex flex-row align-items-center my-auto">
        <div className="col-1">
          <img
            src={(`images/${props.id}.png`)}
            alt="foto"
            className="img-fluid p-2"
          />
        </div>
        <div className="col">
          <div className="d-flex job-title mt-2">
            <h6 className="me-3">{props.jobTitle}</h6>
            <p>
              {props.skills.map((skill, index) => (
                <span className="skill ms-1" key={index}>
                  {skill}
                </span>
              ))}
            </p>
          </div>
          <div className="d-flex align-items-center data">
            <div className="d-flex col-2">
              <BsBuildings />
              <p className="mx-1">{props.company}</p>
            </div>
            <div className="d-flex col-2">
              <GrLocation />
              <p className="">{props.type}</p>
            </div>
            <div className="d-flex col-2">
              <PiMoneyFill />
              <p className="mx-1">{props.salary}</p>
            </div>
            <div className="d-flex col-2">
              <BsPeople />
              <p className="mx-1">{props.vacancies}</p>
            </div>
            <div className="d-flex col-2">
              <BsCalendar3 />
              <p className="mx-1">{props.date}</p>
            </div>
            <div className="d-flex col-2">
            {props.benefits.map((benefit, index) => (
                <BenefitIcon benefit={benefit} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* <BsEmojiSunglasses className="icon" />
<BsFileEarmarkCheck className="icon" />
<BsCalendar2Plus className="icon" /> */}