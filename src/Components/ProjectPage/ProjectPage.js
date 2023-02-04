import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { contentServicesWithColor } from "../../utils/contentConstants";
import "@splidejs/react-splide/css";
import "./projectPageStyles/projectPage.css";

const options = {
  type: "loop",
  perPage: 1,
  rewind: true,
  autoplay: true,
  interval: 5000,
  gap: 50,
  speed: 1000,
};

const ProjectBanner = () => (
  <Splide
    className="slide_container"
    options={options}
    aria-label="trending services"
  >
    {contentServicesWithColor.slice(0, 3).map((slide) => (
      <SplideSlide
        style={{
          background: `linear-gradient(153deg, ${slide.color} 0%, ${slide.secondColor} 100%)`,
        }}
        className="individual_slides"
      >
        <div className="projectBannerContainer">
          <div>
            <div>{slide.name}</div>
            <div>
              {slide.description} {slide.longDesc}
            </div>
            <div>
              <button>Try Now</button>
            </div>
          </div>
          <div>
            <img src={slide.img} alt="" />
          </div>
        </div>
      </SplideSlide>
    ))}
  </Splide>
);

export default function ProjectPage({ selectedCard }) {
  return (
    <div className="projectPageContainer">
      <div className="projectPageBannerContainer">
        <div>Treading</div>
        <img
          src="https://img.icons8.com/external-solid-adri-ansyah/256/external-social-social-media-interface-solid-adri-ansyah-49.png"
          alt=""
        />
      </div>
      <ProjectBanner />
      {/* project card Heading */}
      {/* project cards */}
    </div>
  );
}
