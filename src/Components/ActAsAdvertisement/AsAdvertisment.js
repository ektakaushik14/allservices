import React, { useEffect, useRef } from "react";
import "./AsAdvertisment.css";
import VanillaTilt from "vanilla-tilt";
export default function AsAdvertisment() {
  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

  const options = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
  };

  return (
    <div className="AsAdvertisment">
      <div class="main">
        <Tilt className="card" options={options}>
          <div class="content-card">
            <h2>01</h2>
            <div>
              <img src="https://cdn.pixabay.com/photo/2022/07/15/18/03/interview-7323656__340.png" />
            </div>
            <div>
              <h3>Interviewer</h3>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <a href="#">Try Now</a>
            </div>
          </div>
        </Tilt>
        <Tilt className="card" options={options}>
          <div class="content-card">
            <h2>02</h2>
            <div>
              <img src="https://media.istockphoto.com/id/1342134434/photo/caring-doctor-listens-to-patient.jpg?b=1&s=170667a&w=0&k=20&c=dEC4pVspE0JKYu6pjnGF6k9tMyOZS-2gBiW-JHURyVM=" />
            </div>
            <div>
              <h3>Doctor</h3>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <a href="#">Try Now</a>
            </div>
          </div>
        </Tilt>
        <Tilt className="card" options={options}>
          <div class="content-card">
            <h2>03</h2>
            <div>
              <img src="https://media.istockphoto.com/id/1054785410/photo/rear-view-of-a-motivational-coach-giving-a-speech.jpg?b=1&s=612x612&w=0&k=20&c=jHnC_Ob1HAwaraSLR1-dj-4QGa0euO1qzBN7kIRal2U=" />
            </div>
            <div>
              <h3>Motivational Speaker</h3>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <a href="#">Try Now</a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
