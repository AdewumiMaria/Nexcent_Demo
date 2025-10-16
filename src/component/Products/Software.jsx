import React from "react";
import Button from "../Button";

const Software = () => {
  return (
    <section className="software">
      <div className="container">
        <div className="software-sec">
          <div className="software-sec1">
            <h1>Automated Software</h1>
          </div>
          <div className="software-sec2">
            <div className="rectangle">
              <h2>/01</h2>
              <h3>Specification</h3>
              <p>
                Mobirise is perfect for non-techies who are not familar with the
                intricacies of web development.
              </p>
            </div>
            <div className="rectangle">
              <h2>/02</h2>
              <h3>Project Planning</h3>
              <p>
                Mobirise is perfect for non-techies who are not familar with the
                intricacies of web development.
              </p>
            </div>
            <div className="rectangle">
              <h2>/03</h2>
              <h3>Deployment</h3>
              <p>
                Mobirise is perfect for non-techies who are not familar with the
                intricacies of web development.
              </p>
            </div>
          </div>
          <div className="software-sec2">
            <div className="rectangle">
              <h2>/04</h2>
              <h3>Our Philosophy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                iste.
              </p>
            </div>
            <div className="rectangle">
              <h2>/05</h2>
              <h3>Specification</h3>
              <p>
                Mobirise is perfect for non-techies who are not familar with the
                intricacies of web development.
              </p>
            </div>
            <div className="rectangle" id="site-rec">
              <h3>Project Planing</h3>
              <p>
                Mobirise is perfect for non-techies who are not familar with the
                intricacies of web development.
              </p>
              <Button
                title={"Create your own site"}
                className={"software-btn"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
