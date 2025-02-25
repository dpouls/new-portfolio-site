import { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import ImageViewer from "react-simple-image-viewer";
import "./Projects.css";
//img imports
import bc1 from "../../assets/bc/1.png";
import bc2 from "../../assets/bc/2.png";
import bc3 from "../../assets/bc/3.png";
import bc4 from "../../assets/bc/4.png";
import bc5 from "../../assets/bc/5.png";
import bca1 from "../../assets/bc/a1.png";
import bca2 from "../../assets/bc/a2.png";
import bca3 from "../../assets/bc/a3.png";
import bca4 from "../../assets/bc/a4.png";
import bcapp1 from "../../assets/bc/bc_app/1.png";
import bcapp2 from "../../assets/bc/bc_app/2.png";
import bcapp3 from "../../assets/bc/bc_app/3.png";
import bcapp4 from "../../assets/bc/bc_app/4.png";
import bcapp5 from "../../assets/bc/bc_app/5.png";
import bcapp6 from "../../assets/bc/bc_app/6.png";








function BridgeCore() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [appActiveItemIndex, setAppActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [appViewerIsOpen, setAppViewerIsOpen] = useState(false);
  useEffect(() => {
    if (viewerIsOpen || appViewerIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [viewerIsOpen, appViewerIsOpen]);
  const bcImages = [
    { src: bc1, alt: "Project 1 Image 1" },
  
    { src: bc2, alt: "Project 1 Image 2" },
    { src: bc3, alt: "Project 1 Image 3" },
    { src: bc4, alt: "Project 1 Image 4" },
    { src: bc5, alt: "Project 1 Image 5" },
  {src: bca1, alt: "Project 1 Image 6"},  
  {src: bca2, alt: "Project 1 Image 7"},
  {src: bca3, alt: "Project 1 Image 8"},
  {src: bca4, alt: "Project 1 Image 9"},

  ]
  const bcAppImages = [
    { src: bcapp1, alt: "Project 1 App Image 1" },
    { src: bcapp2, alt: "Project 1 App Image 2" },
    { src: bcapp3, alt: "Project 1 App Image 3" },
    { src: bcapp4, alt: "Project 1 App Image 4" },
    { src: bcapp5, alt: "Project 1 App Image 5" },
    { src: bcapp6, alt: "Project 1 App Image 6" },
  ];

  return (
    <div id='projects' class="content-section">
      <h1>SOFTWARE PROJECTS</h1>
      <p>
        I've been working on a variety of projects over the years. Here are a
        few of my favorites:
      </p>
      <div class="project">
        <a
          href="https://bridgecoreutah.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Bridge Core</h2>
        </a>
        {viewerIsOpen && (
          <ImageViewer
            src={bcImages.map((image) => image.src)}
            closeOnClickOutside={true}
            onClose={() => setViewerIsOpen(false)}
          />
        )}
        <div class="bc-carousel carousel-container">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={20}
            leftChevron={<button class="chevron">{"<"}</button>}
            rightChevron={<button class="chevron">{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {bcImages.map((image, index) => {
              return (
                <img
                  key={index}
                  class="bc-img zoom"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setViewerIsOpen(true)}
                />
              );
            })}
          </ItemsCarousel>
        </div>

        <div>
          <p class="project-description">
            Bridge Core is a platform designed to facilitate secure financial
            transactions and efficient project agreement management. The
            platform encompasses a web application, mobile application, and a
            robust backend infrastructure, tailored for seamless operation and
            scalability.
          </p>
        </div>
        <div class="bc-features-container">
          <div class="bc-features">
            <h3>Key Features & Technologies:</h3>
            <ul class="project-features">
              <li>
                <strong>Frontend:</strong> Built with React for the web
                application and React Native for Android and iOS mobile apps.
              </li>
              <li>
                <strong>Backend:</strong> Developed a custom REST API using
                Node.js and Express.js to handle business logic and integration.
              </li>
              <li>
                <strong>Database:</strong> Self-managed PostgreSQL for reliable
                and scalable relational data storage.
              </li>
              <li>
                <strong>Cloud Hosting:</strong> Deployed on self-managed
                DigitalOcean Linux droplets, providing a scalable and flexible
                virtual private server (VPS) environment optimized for
                performance and reliability.
              </li>
              <li>
                <strong>API Integration:</strong> Integrated several external
                APIs to enhance functionality and streamline processes.
              </li>
              <li>
                <strong>Firebase:</strong> Cloud storage (images and documents)
                and user authentication.
              </li>
            </ul>
            <p>
              This project highlights my ability to build and integrate complex
              multi-platform solutions, ensuring security, scalability, and an
              intuitive user experience.
            </p>
          </div>

          {appViewerIsOpen && (
            <ImageViewer
              src={bcAppImages.map((image) => image.src)}
              closeOnClickOutside={true}
              onClose={() => setAppViewerIsOpen(false)}
            />
          )}
          <div class="bc-app-carousel ">
            <ItemsCarousel
              requestToChangeActive={setAppActiveItemIndex}
              activeItemIndex={appActiveItemIndex}
              numberOfCards={1}
              gutter={20}
              leftChevron={<button class="chevron">{"<"}</button>}
              rightChevron={<button class="chevron">{">"}</button>}
              // outsideChevron
              chevronWidth={chevronWidth}
            >
              {bcAppImages.map((image, index) => {
                return (
                  <img
                    key={index}
                    class="bc-app-img zoom"
                    src={image.src}
                    alt={image.alt}
                    onClick={() => setAppViewerIsOpen(true)}
                  />
                );
              })}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BridgeCore;
