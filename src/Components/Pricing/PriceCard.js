import React from "react";
import "./PriceCard.css";
import Check from "../../Images/check.png";
import Unavailable from "../../Images/unavailable.png";
import Life from "../../Images/life.png";
import Boat from "../../Images/boat.png";
export default function PriceCard({
  features,
  isPaid,
  nonFeatures,
  price,
  subTitle,
  subheading,
  title,
}) {
  return (
    <div className={isPaid ? "PriceCard paidCard" : "PriceCard"}>
      <div className="subTitle">
        <div className="subTitle-img">
          <img src={isPaid ? Boat : Life} alt="" />
        </div>
        <div className={isPaid ? "paidSubTitle-text" : "nonPaidSubTitle-text"}>
          <div>{title}</div>
        </div>
      </div>
      <div className="priceCard-price">
        <div>
          <div>${price}</div>
          <div>/month</div>
        </div>
        <div>{subTitle}</div>
      </div>
      <div className="priceCard-subheading">{subheading}</div>
      <div className="priceCard-features">
        {features.map((feature) => (
          <div>
            <img src={Check} alt="" />
            <div>{feature}</div>
          </div>
        ))}
        {nonFeatures.map((nonFeature) => (
          <div>
            <img src={Unavailable} alt="" />
            <div>{nonFeature}</div>
          </div>
        ))}
      </div>
      <div className="priceCard-Button">
        <button>
          {isPaid ? "Become A Club Member" : "Join As A Free Member"}
        </button>
      </div>
    </div>
  );
}
