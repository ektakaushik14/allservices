import React from "react";
import { Link } from "react-router-dom";
import CancelButton from "../CancelButton/CancelButton";
import PriceCard from "./PriceCard";
import "./Pricing.css";
export default function Pricing() {
  return (
    <div className="pricing">
      <Link to="/">
        <CancelButton />
      </Link>
      <div className="price-title">
        <div>
          Lorem ipsum, dolor sit amet offence consectetur adipisicing elit.
        </div>
        <div>
          <img
            src="https://ouch-cdn2.icons8.com/3Qf5abNYby5z4TNL3RLXrl47R3xoOVKZ4HBQZi7Oog8/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUx/LzA5ZTI2MGQ2LTEy/NWMtNGE2Ny1iMmE0/LTJlMTJhM2MwNmFh/ZS5zdmc.png"
            alt=""
          />
        </div>
      </div>
      <div className="price-card">
        <PriceCard />
      </div>
    </div>
  );
}
