import React from "react";
import "./Createppt.css";
export default function Createppt() {
  return (
    <div className="Createppt">
      <div></div>
      <div>
        <div>
          <h1>Title</h1>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Create a presentation about..." />
            <div>
              <h2>PRESENTATION</h2>
              <h2>IMAGES</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="https://img.icons8.com/ios-glyphs/256/plus-math.png" />
          <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Palette-design-those-icons-lineal-those-icons.png" />
        </div>
      </div>
    </div>
  );
}
