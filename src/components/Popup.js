import React from "react";
import "./Popup.css";
const Popup = ({ jewel, showmodel }) => {
  console.log("its work");
  return (
    <section>
    <div className="popup">
      <div className="popimage">
        <img src={jewel.image} alt="" />
      </div>
      <div className="popdetail">
      <div className="info">
        <h1></h1>
      <i class="far fa-times-circle fa-2x" onClick={showmodel}></i>
      </div>
          <h1>{jewel.name}</h1>
         
      
        <p style={{ color: "black", padding: '20px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quasi
          sed accusamus, totam ex deleniti sint aspernatur quaerat
          exercitationem ullam numquam odio quam praesentium placeat aperiam
          ipsa nemo dolore!
        </p>
        <h4 style={{ color: "black", padding: '20px'}}>Tags</h4>
        <div className="tag">
          {jewel.tags.map((tag) => (
            <>
              <div className="tt" style={{
    border: '1px black solid'
}}>
                <h5>{tag}</h5>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Popup;
