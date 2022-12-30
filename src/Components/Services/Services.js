import React from "react";
import services from "./servicesConstants";

import "./services.css";
export default function Services() {
  return (
    <div className="servicess">
      <div>
        <div className="service-title">
          How will Jasper unlock your creative potential?
        </div>
        <div className="service-content">
          <div>
            {services.slice(0, 4).map((m) => (
              <div className="card">
                <div>{m.icon}</div>
                <div>
                  <div>{m.heading}</div>
                  <div>{m.subheading}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {services.slice(4, 8).map((m) => (
              <div className="card">
                <div>{m.icon}</div>
                <div>
                  <div>{m.heading}</div>
                  <div>{m.subheading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
