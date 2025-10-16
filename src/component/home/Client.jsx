import iconOne from "../assest/icon-one.png";
import iconTwo from "../assest/icon-two.png";
import iconThree from "../assest/icon-three.png";
import iconFour from "../assest/icon-four.png";
import iconFive from "../assest/icon-five.png";
import iconSix from "../assest/icon-six.png";

const Client = () => {
  return (
    <section className="client">
      <div className="container">
        <div className="client-sec">
          <div className="sec-item1">
            <h1>Our Clients</h1>
            <p>We have been working with Fortune 500+ clients</p>
          </div>
          <div className="sec-item2">
            <div>
              <img src={iconOne} className="client-img" alt="iconOne" />
            </div>
            <div>
              <img src={iconTwo} className="client-img" alt=" iconTwo" />
            </div>
            <div>
              <img src={iconThree} className="client-img" alt="iconThree" />
            </div>
            <div>
              <img src={iconFour} className="client-img" alt="iconFour" />
            </div>
            <div>
              <img src={iconFive} className="client-img" alt="iconFive" />
            </div>
            <div>
              <img src={iconSix} className="client-img" alt="iconSix" />
            </div>
            <div>
              <img src={iconThree} className="client-img" alt="iconThree" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Client;
