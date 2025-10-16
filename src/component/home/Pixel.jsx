import pixel from "../assest/pixel.png";
import Button from "../Button";

const Pixel = () => {
  return (
    <section className="pixel">
      <div className="container">
        <div className="pixel-sec">
          <div className="pixel-1">
            <img src={pixel} className="pixel-img" alt="pixel" />
          </div>
          <div className="pixel-2">
            <h1>
              The unseen of spending three <br /> years at Pixelgrade
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              incidunt excepturi <br /> sint fugiat debitis, ea aliquam quod
              dolorum nihil similique reprehenderit porro, corrupti iste <br />
              possimus, accusantium ipsum quas doloribus beatae illum aut
              maxime. Sed, modi. Illo explicabo <br />
              cupiditate temporibus enim eius commodi. Alias, iure cumque ipsam
              repellat laudantium voluptatum!
            </p>
            <Button title={"Learn More"} className={"pixel-btn"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pixel;
