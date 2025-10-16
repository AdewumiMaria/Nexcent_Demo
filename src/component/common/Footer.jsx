import icon from "../assest/icon.png";
import send from "../assest/send-icon.png";
import socialIcon1 from "../assest/SocialIcon-one.png";
import socialIcon2 from "../assest/SocialIcon-two.png";
import socialIcon3 from "../assest/SocialIcon-three.png";
import socialIcon4 from "../assest/SocialIcon-four.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-sec">
          <div className="footer-sec-1">
            <div className="sub-sec-1">
              <img src={icon} className="web-icon" alt="icon" />
              <h3 className="h3">Nexcent</h3>
            </div>
            <div className="sub-sec-2">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <span>All rights reserved</span>
              <div className="sub-sec-3">
                <div>
                  <img src={socialIcon1} className="links" alt="" />
                </div>
                <div>
                  <img src={socialIcon2} className="links" alt="" />
                </div>
                <div>
                  <img src={socialIcon3} className="links" alt="" />
                </div>
                <div>
                  <img src={socialIcon4} className="links" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-sec-2">
            <div className="footer-item ">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="About us"> About us</a>
                </li>
                <li>
                  <a href="Blog">Blog</a>
                </li>
                <li>
                  <a href="Contact us"> Contact us</a>
                </li>
                <li>
                  <a href="Pricing"> Pricing</a>
                </li>
                <li>
                  <a href="Testimonials"> Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="Help Center"> Help Center</a>
                </li>
                <li>
                  <a href="Terms of service">Terms of service </a>
                </li>
                <li>
                  <a href="Legal"> Legal</a>
                </li>
                <li>
                  <a href="Privacy policy"> Privacy policy</a>
                </li>
                <li>
                  <a href="Status"> status</a>
                </li>
              </ul>
            </div>
            <div className="footer-item2">
              <h3>Stay up to date</h3>
              <input type="text" placeholder="Your email address" />
              <img src={send} className="send" alt="send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
