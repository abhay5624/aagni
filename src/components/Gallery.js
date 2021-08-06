import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Gallery.css";
import JewelItems from "./JewelItems";
import image1 from "../Image.svg";
import image2 from "../Image-1.svg";
import image3 from "../Image-2.svg";
import image4 from "../Image-3.svg";
import image5 from "../Image-4.svg";
import image6 from "../Image-5.svg";
import image7 from "../Image-6.svg";
import image8 from "../Image-7.svg";
import image9 from "../Image-8.svg";
const Gallery = () => {
  const [tag, setTag] = useState("All");
  const [items, setItems] = useState({
    jewel: [
      {
        name: "Ragoon",
        tags: ["blue", "ring", "shappire"],
        image: image7,
      },
      {
        name: "The BB",
        tags: ["Gold", "Handcuff"],
        image: image6,
      },
      {
        name: "Crystal",
        tags: ["Amber"],
        image: image5,
      },
      {
        name: "Tital",
        tags: ["Red", "Bracelet", "Rube"],
        image: image4,
      },
      {
        name: "Quenn",
        tags: ["Purple", "Necklace", "Amethyst"],
        image: image3,
      },
      {
        name: "Hnath",
        tags: ["blue", "ring", "shappire"],
        image: image8,
      },
      {
        name: "Rose",
        tags: ["Red", "ring", "Diamand"],
        image: image2,
      },
      {
        name: "The Stone Set",
        tags: ["Stone", "Set", "Blue shappire"],
        image: image1,
      },
      {
        name: "Pewel",
        tags: ["shappire"],
        image: image9,
      },
    ],
  });

  console.log(items);
  const changeTag = (e) => {
    setTag(e.target.innerText);
    console.log(tag);
  };
  items.jewel.map((itm) => {
    console.log(itm.name);
  });
  return (
    <div className="gallery">
      <div className="heroimage">
        <h1>Gallery</h1>
        <div className="inputtext">
          <input type="text" placeholder="Search...." className="sarchinput" />
          <i class="fas fa-search"></i>
        </div>
        <div className="tags">
          <div className="singletag" onClick={changeTag}>
            All
          </div>

          <div className="singletag" onClick={changeTag}>
            Pendent
          </div>

          <div className="singletag" onClick={changeTag}>
            Ring
          </div>

          <div className="singletag" onClick={changeTag}>
            Bracelet
          </div>

          <div className="singletag" onClick={changeTag}>
            Ear_Rings
          </div>

          <div className="singletag" onClick={changeTag}>
            Sapphire
          </div>

          <div className="singletag" onClick={changeTag}>
            Red
          </div>
        </div>
      </div>
      <div className="items">
        <h1>{tag}</h1>
        <div className="JewelList">
          {tag === "All"
            ? items.jewel.map((itam) => <JewelItems jewel={itam} tagchangefun={changeTag}/>)
            : ''}
            
            
        </div>
        <div className="button">
        <button className='seemore'> See More</button>
        </div>
      </div>
  
    </div>
  );
};

export default Gallery;
