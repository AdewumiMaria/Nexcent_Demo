import illustration from "../assest/illustration.png";
import Button from "../Button";
import { LuAlarmClockMinus } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-sec">
          <div className="sec-1">
            <h1 className="ban-h1">
              Lessons and insights <br />
              <span className="span">from 8 years</span>
            </h1>

            <p className="ban-p">
              Where to grow your business as a photographer: site or social
              media <LuAlarmClockMinus color={{ color: "#4caf4f" }} /> ?
            </p>
            <Button title={"Register"} className={"ban-btn"} />
          </div>
          <div className="sec-2">
            <img src={illustration} className="ban-img" alt="illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
