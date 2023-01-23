import React from "react";
import { Link } from "react-router-dom";
import PriceCard from "./PriceCard";
import pricingConst from "./pricingConstants";
import "./Pricing.css";
import Faq from "../Faq/Faq";
export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricingText">PRICING DETAILS</div>
      <div className="pricingHeading">
        Start <span>Building</span> today and save hours from the process.
      </div>
      <div className="pricingSubheading">
        Gain access to our complete library of components. Unlimited
        combinations for you to build better products faster. New components and
        products added regularly
      </div>
      <div className="joinClubContainer">
        Join the club <span>today!</span>
      </div>
      <div className="price-card">
        {pricingConst.map((m) => (
          <PriceCard {...m} />
        ))}
      </div>
      <div className="pricingSupport">
        <div>
          <div className="pricingSupportHeading">SUPPORT</div>
          <div>Frequently Asked Questions</div>
          <div>Everything you need to know about the product and billing.</div>
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </div>
  );
}
