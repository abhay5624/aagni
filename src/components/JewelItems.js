import React from "react";
import "./JewelItems.css";
import { useState } from "react";
import Popup from "./Popup";
const JewelItems = ({ jewel, tagchangefun }) => {
  const [popup, setPopup] = useState(false);
  const [pvent, setevent] = useState('all');
  const popupshow = () => {
    setPopup(!popup);
    setevent('none');
  }
  const image = jewel.image;
  const style = {
    color: "white",
    padding: "0",
    margin: "14px",
  };
  console.log(jewel);
  return (
    <div className="jewel" onClick={popupshow}>
      <div className={jewel.name}>
        <div className="tophalf"> </div>
        <div className="bottomhalf">
          <h1 style={style}>{jewel.name}</h1>

          <div className="tag">
            {jewel.tags.map((tag) => (
              <>
                <div className="tagname">
                  <h5 onClick={tagchangefun}>{tag}</h5>
                </div>
              </>
            ))}
          </div>
        </div>
             
      </div>
      {popup ? <Popup jewel = {jewel} showmodel={popupshow}/> : ''}
    </div>
  );
};

export default JewelItems;
