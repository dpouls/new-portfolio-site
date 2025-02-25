import { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import ImageViewer from "react-simple-image-viewer";
import "./Projects.css";
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
    { src: "/src/assets/bc/1.png", alt: "Project 1 Image 1" },
    { src: "/src/assets/bc/2.png", alt: "Project 1 Image 2" },
    { src: "/src/assets/bc/3.png", alt: "Project 1 Image 3" },
    { src: "/src/assets/bc/4.png", alt: "Project 1 Image 4" },
    { src: "/src/assets/bc/5.png", alt: "Project 1 Image 5" },
    { src: "/src/assets/bc/a1.png", alt: "Project 1 Image 6" },
    { src: "/src/assets/bc/a2.png", alt: "Project 1 Image 7" },
    { src: "/src/assets/bc/a3.png", alt: "Project 1 Image 8" },
    { src: "/src/assets/bc/a4.png", alt: "Project 1 Image 9" },
  ];
  const bcAppImages = [
    { src: "/src/assets/bc/bc_app/1.png", alt: "Project 1 Image 1" },
    { src: "/src/assets/bc/bc_app/2.png", alt: "Project 1 Image 2" },
    { src: "/src/assets/bc/bc_app/3.png", alt: "Project 1 Image 3" },
    { src: "/src/assets/bc/bc_app/4.png", alt: "Project 1 Image 4" },
    { src: "/src/assets/bc/bc_app/5.png", alt: "Project 1 Image 5" },
    { src: "/src/assets/bc/bc_app/6.png", alt: "Project 1 Image 6" },
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
