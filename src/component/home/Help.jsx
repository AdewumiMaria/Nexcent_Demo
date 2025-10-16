import cmOne from "../assest/cm-one.png";
import cmTwo from "../assest/cm-two.png";
import cmThree from "../assest/cm-three.png";
import cmFour from "../assest/cm-four.png";

const Help = () => {
  return (
    <section className="help">
      <div className="container">
        <div className="help-sec">
          <div className="help-1">
            <h1>
              Helping a local <br /> <span>business reinvent itself </span>
            </h1>
            <p>We reached here with our hardwork and dedication</p>
          </div>
          <div className="help-2">
            <div className="customer">
              <div>
                <img src={cmOne} className="cm-img" alt="cmOne" />
              </div>
              <div>
                <h1>2,245,341</h1>
                <p>Members</p>
              </div>
            </div>
            <div className="customer">
              <div>
                <img src={cmTwo} className="cm-img" alt="cmTwo" />
              </div>
              <div>
                <h1>46,328</h1>
                <p>Clubs</p>
              </div>
            </div>
            <div className="customer">
              <div>
                <img src={cmThree} className="cm-img" alt="cmThree" />
              </div>
              <div>
                <h1>828,867</h1>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="customer">
              <div>
                <img src={cmFour} className="cm-img" alt="cmFour" />
              </div>
              <div>
                <h1>1,926,436</h1>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Help;
