import Button from "../Button";

const Features = () => {
  return (
    <section className="feature">
      <div className="container">
        <div className="feature-sec">
          <div className="feature-sec1">
            <h1>Our featured services</h1>
          </div>
          <div className="feature-sec2">
            <div className="card">
              <h2>No Coding</h2>
              <p>
                Mobirise is an easy website builder. Just a drop site elements
                to your page, add content and style it to look the way you like;
              </p>
              <Button title={"Learn More"} className={"feature-btn"} />
            </div>
            <div className="card">
              <h2>Mobile Friendly</h2>
              <p>
                You don't have to code to create your own site. Select one of
                the available theme in the Mobirise Site Marker.
              </p>
              <Button title={"Learn More"} className={"feature-btn"} />
            </div>
            <div className="card">
              <h2>Unique Styles</h2>
              <p>
                Select the theme that suits you. Each theme in the Mobirise
                Website Software contains a set of unique blocks
              </p>
              <Button title={"Learn More"} className={"feature-btn"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
