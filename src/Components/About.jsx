import React from "react";
import "../styles/about.css";
import about from "../Assets/about";
import Carosel from "../Components/Carosel.jsx";

function About() {
  return (
    <>
    <div className="about-main" id="about">
      <div className="main-left">
        <img src={about} alt="Image" />
        {/* https://img.freepik.com/free-vector/landscape-coal-mining-scene-with-crane-trucks_1308-55217.jpg */}
      </div>
      <div className="main-right">
        <h2>About Us</h2>

        <p>
          A stone quarry business is a business that involves the excavation of
          different dimension of stones, rocks, ripraps, construction
          aggregates, slates and gravels for the constructions industry. Players
          in this industry basically extract rocks from an open-pit mine and the
          rocks are crushed to produce construction aggregate, which is them
          screened into different size categories either for immediate use in
          construction sites, or taken for further processing. No doubt, the
          stone quarry line of business is a key sector in the building cum
          construction industry; they supply important building cum construction
          raw materials.
        </p>

        <p>
          The Stone Quarry line of business is indeed a thriving line of
          business and pretty much active in key locations in North America,
          Africa, Asia and South America they generates several billions of US
          dollars annually from several registered and unregistered small –
          scale, medium scale and big stone quarry companies scattered all
          around Africa, Asia, North America and South America. This line of
          business is responsible for the employment loads of people directly
          and indirectly all around the world.
        </p>
      </div>
    </div>



    <div className="details">
      <h2 className="detail-name">Founder : Mr. Sachin Waskar</h2>
        <Carosel />
    </div>

    </>
  );
}

export default About;
