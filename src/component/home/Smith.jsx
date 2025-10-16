import site from "../assest/site-img.png";
import siteIcon from "../assest/icon-site.png";
import iconTwo from "../assest/icon-two.png";
import iconThree from "../assest/icon-three.png";
import iconFour from "../assest/icon-four.png";
import iconFive from "../assest/icon-five.png";
import iconSix from "../assest/icon-six.png";
import arrow from "../assest/arrow.png";

const Smith = () => {
  return (
    <section className="smith">
      <div className="container">
        <div className="smith-sec">
          <div className="site-1">
            <img src={site} className="site-img" alt="site" />
          </div>
          <div className="site-2">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3>Tim Smith</h3>
            <span>British Dragon Boat Racing Association</span>
            <div className="site-icon">
              <div className="site-icon1">
                <div>
                  <img src={siteIcon} className="site-links" alt="iconOne" />
                </div>
                <div>
                  <img src={iconTwo} className="site-links" alt=" iconTwo" />
                </div>
                <div>
                  <img src={iconThree} className="site-links" alt="iconThree" />
                </div>
                <div>
                  <img src={iconFour} className="site-links" alt="iconFour" />
                </div>
                <div>
                  <img src={iconFive} className="site-links" alt="iconFive" />
                </div>
                <div>
                  <img src={iconSix} className="site-links" alt="iconSix" />
                </div>
              </div>
              <div className="site-icon2">
                <h4>Meet all customers </h4>
                <img src={arrow} className="arrow" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Smith;
