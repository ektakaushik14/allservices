import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { contentServicesWithColor } from "../../utils/contentConstants";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import "@splidejs/react-splide/css";
import "./projectPageStyles/projectPage.css";
import { db } from "../../firebase";

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

export default function ProjectPage({ selectedCard, userDetails }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "Dashboard", userDetails.email);
    const docSnap = getDocs(collection(docRef, "Project"))
      .then((snapshot) => {
        var temp = [];
        snapshot.docs.forEach((doc) => {
          temp.push({ [doc.id]: doc.data() });
          if (temp.length === snapshot.docs.length) {
            setData(temp);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log(data);
        setLoading(false);
      });
  }, []);

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
      <div className="allProjectsContainer">
        {!loading && data.length != 0 ? (
          data.map((d) => (
            <div className="fetchedProjects">
              <div className="fetchedProjectsHeading">{Object.keys(d)[0]}</div>
              <div className="allProjects">
                {Object.keys(d[Object.keys(d)[0]]).map((title) => {
                  const dataList = d[Object.keys(d)[0]][title];
                  return (
                    <div
                      className="skeleton"
                      style={{
                        background: `linear-gradient(153deg, ${dataList.color} 0%, ${dataList.secondColor} 100%)`,
                      }}
                    >
                      <div className="skeletonContentContainer">
                        <div className="skeleton skeletonContent">{title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="fetchingProjects">
            <div className="skeleton fetchingProjectsHeading"></div>
            <div className="allProjects">
              {[1, 1, 1, 1].map(() => (
                <div className="skeleton">
                  <div className="skeletonContentContainer">
                    <div className="skeleton skeletonContent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* project card Heading */}
      {/* project cards */}
    </div>
  );
}
