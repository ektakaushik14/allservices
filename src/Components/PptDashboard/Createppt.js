import React, { useState } from "react";
import "./Createppt.css";
import colorPalette from "../../Images/color-palette.png";
import plus from "../../Images/plus.png";
import { addPlusFeatureContent } from "../../utils/addPlusFeatureContent";
export default function Createppt() {
  const [isActive, setIsActive] = useState(false);
  const onplusClick = () => {
    let plusContent = document.querySelector(".plusContent");
    if (plusContent.style.display === "none") {
      plusContent.style.display = "block";
    } else {
      plusContent.style.display = "none";
    }
    // setIsActive(!isActive);
  };

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
          <img onClick={onplusClick} src={plus} />
          <img src={colorPalette} />
        </div>
      </div>
      <div
        // style={isActive === true ? { display: "block" } : { display: "none" }}
        className="plusContent"
      >
        <div>
          <input type="text" placeholder="Add something..." />
        </div>
        <div>
          {addPlusFeatureContent.map((tempAdd, index) => (
            <div className="ptcard" key={index}>
              <div>
                <img src={tempAdd.img} alt="" />
              </div>
              <div>{tempAdd.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="paletteContent">
        <div>
          <h4>Set theme</h4>
          <div>
            <img src="https://img.icons8.com/material/1x/delete-sign.png" />
          </div>
        </div>
        <div>
          <button>Page</button>
        </div>
        <div>
          <h5>Page theme</h5>
        </div>
        <div>
          <div>
            <div>
              <h3>
                Title<span>Body</span>
              </h3>
            </div>
            <div>Dark</div>
          </div>
          <div>
            <img src="https://img.icons8.com/external-others-amoghdesign/1x/external-chevron-multimedia-solid-30px-others-amoghdesign.png" />
          </div>
        </div>
        <div>Page</div>
        <div>
          <div></div>
          <div>000000</div>
        </div>
        <div>
          <div>
            <h5>Heading</h5>
            <div>
              <div>Diatype</div>
              <img src="https://img.icons8.com/external-others-amoghdesign/1x/external-chevron-multimedia-solid-30px-others-amoghdesign.png" />
            </div>
            <div>
              <div>Bold</div>
              <img src="https://img.icons8.com/external-others-amoghdesign/1x/external-chevron-multimedia-solid-30px-others-amoghdesign.png" />
            </div>
            <div></div>
            <div>
              <div></div>
              <div>000000</div>
            </div>
          </div>
          <div>
            <h5>Paragraph</h5>
            <div>
              <div>Diatype</div>
              <img src="https://img.icons8.com/external-others-amoghdesign/1x/external-chevron-multimedia-solid-30px-others-amoghdesign.png" />
            </div>
            <div>
              <div>Regular</div>
              <img src="https://img.icons8.com/external-others-amoghdesign/1x/external-chevron-multimedia-solid-30px-others-amoghdesign.png" />
            </div>
            <div></div>
            <div>
              <div></div>
              <div>000000</div>
            </div>
          </div>
        </div>
        <div>Auto color</div>
        <div>
          <button>Save theme</button>
        </div>
      </div>
    </div>
  );
}
