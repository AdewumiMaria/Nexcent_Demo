import arrow from "../assest/arrow.png";
import markOne from "../assest/mark-one.png";
import markTwo from "../assest/mark-two.png";
import markThree from "../assest/mark-three.png";

const Marketing = () => {
  return (
    <section className="market">
      <div className="container">
        <div className="mark-sec">
          <div className=" mark-1">
            <h1>Caring is the new marketing</h1>
            <p>
              The Nextcent blog is the best place to read about the latest
              membership insights,
              <br /> trends and more. See who's joining the community, read
              about how our community <br /> are increasing their membership
              income and lot's more.
            </p>
          </div>
          <div className="mark-2">
            <div className="mark-item">
              <img src={markOne} className="mark-img" alt="markOne" />
              <div className="square">
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <div className="item">
                  <span>
                    <strong>
                      <a href="home"> Read More</a>
                    </strong>
                  </span>
                  <img src={arrow} className="arrow" alt="arrow" />
                </div>
              </div>
            </div>
            <div className="mark-item">
              <img src={markTwo} className="mark-img" alt="markTwo" />
              <div className="square">
                <p>
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <div className="item">
                  <span>
                    <strong>
                      <a href="home"> Read More</a>
                    </strong>
                  </span>
                  <img src={arrow} className="arrow" alt="" />
                </div>
              </div>
            </div>
            <div className="mark-item">
              <img src={markThree} className="mark-img" alt="markThree" />
              <div className="square">
                <p>Revamping the Membership Model with Triathlon Australia</p>
                <div className="item">
                  <span>
                    <strong>
                      <a href="home"> Read More</a>
                    </strong>
                  </span>
                  <img src={arrow} className="arrow" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Marketing;
