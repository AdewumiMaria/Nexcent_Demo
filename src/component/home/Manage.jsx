import manageOne from "../assest/manage-one.png";
import manageTwo from "../assest/manage-two.png";
import manageThree from "../assest/manage-three.png";

const Manage = () => {
  return (
    <section className="manage">
      <div className="container">
        <div className="manage-sec">
          <div className="man-sec1">
            <h1>
              Manage your entire community <br /> in a single system
            </h1>
            <p>Who is Nexcent suitable for?</p>
          </div>
          <div className="man-sec2">
            <div className="box">
              <div className="box-1">
                <img src={manageOne} className="manage-img" alt="manageOne" />
                <h2>
                  Membership <br /> Organisation
                </h2>
              </div>
              <div className="box-2">
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>

            <div className="box">
              <div className="box-1">
                <img src={manageTwo} className="manage-img" alt="manageTwo" />
                <h2>
                  National <br /> Associations
                </h2>
              </div>
              <div className="box-2">
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-1">
                <img
                  src={manageThree}
                  className="manage-img"
                  alt="manageThree"
                />
                <h2>
                  Clubs And <br /> Groups
                </h2>
              </div>
              <div>
                <p className="box-2">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Manage;
