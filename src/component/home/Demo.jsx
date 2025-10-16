import Button from "../Button";
import arrowIcon from "../assest/arrow-1.png";

const Demo = () => {
  return (
    <section className="demo">
      <div className="container">
        <div className="demo-1">
          <div className="demo-sec1">
            <h1>
              Pellentesque suscipit <br /> fringilla libero eu.
            </h1>
          </div>
          <div className="demo-sec2">
            <Button title={"Get a Demo"} className={"demo-btn"} />
            <img src={arrowIcon} className="arrow-icon" alt="arrowIcon" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Demo;
