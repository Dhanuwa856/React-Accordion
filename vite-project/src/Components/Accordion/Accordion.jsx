import React, { useState } from "react";
import "./Accordion.css";
import Accordion_list from "../assets/AccordionLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion-main">
      <div className="wrapper">
        <div className="accordion">
          {Accordion_list.map((item, i) => {
            return (
              <div className="accordian-item">
                <div className="accordian-title" onClick={() => toggle(i)}>
                  <h4>{item.answer}</h4>
                  <span>
                    {selected == i ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </span>
                </div>
                <div
                  className={
                    selected == i
                      ? "accordian-content show"
                      : "accordian-content"
                  }
                >
                  {item.question}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
