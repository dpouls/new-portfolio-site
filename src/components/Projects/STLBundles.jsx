import { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import ImageViewer from 'react-simple-image-viewer';
import "./Projects.css";
function STLBundles() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  useEffect(() => {
    if (viewerIsOpen ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [viewerIsOpen]);

  const stlBundlesImages = [
    "/src/assets/stlbundles/1.png",
    "/src/assets/stlbundles/2.png",
    "/src/assets/stlbundles/3.png",
    "/src/assets/stlbundles/4.png",
    "/src/assets/stlbundles/5.png",
    "/src/assets/stlbundles/6.png",
    "/src/assets/stlbundles/7.png",
    "/src/assets/stlbundles/8.png",
    "/src/assets/stlbundles/9.png",
    "/src/assets/stlbundles/10.png",
  ];
  return (
    <div class="content-section">
      <div class="project">
        <a
          href="https://stlbundles.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>STLBundles (1000+ Monthly Users!)</h2>
        </a>
        {viewerIsOpen && (
          <ImageViewer

            src={stlBundlesImages.map((image) => image)}
            currentIndex={activeItemIndex}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={() => setViewerIsOpen(false)}
          />
        )}
        <div class="carousel-container">
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
            {stlBundlesImages.map((img, i) => (
              <img
                key={i}
                src={img}
                class="stl-img zoom"
                alt={`STLBundles Image ${i + 1}`}
                onClick={() => setViewerIsOpen(true)}
              />
            ))}
          </ItemsCarousel>
        </div>

        <div class="">
          <p class="project-description">
            A full-stack web application designed to help users preview and
            explore monthly STL miniature bundle releases from creators on
            platforms like Patreon and MyMiniFactory.
          </p>

          <h3>Key Features & Technologies:</h3>
          <ul>
            <li>
              <strong>Backend Development:</strong> Built a custom
              Node.js/Express server and scraper to automatically aggregate and
              update bundle data from multiple sources.
            </li>
            <li>
              <strong>Database & Hosting:</strong> Utilized Firebase Firestore
              for fast, reliable data storage and Netlify for efficient hosting.
            </li>
            <li>
              <strong>Cloud Storage:</strong> Firebase cloud storage for
              managing and delivering high-quality preview images.
            </li>
            <li>
              <strong>Admin Tools:</strong> Developed admin features to
              streamline the process of uploading and managing hundreds of
              bundle previews each month.
            </li>
            <li>
              <strong>Frontend:</strong> Created an intuitive, responsive user
              interface using React, enabling users to browse and explore
              bundles effortlessly.
            </li>
            <li>
              <strong>User Accounts: </strong> Users can create an account with
              Google or an Email. They can save bundles for later. STL Creators
              can add their own previews after authentication.
            </li>
          </ul>
          <p>
            This project showcases my ability to handle end-to-end development,
            from building complex backend systems to designing user-friendly
            tools that automate and scale processes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default STLBundles;
