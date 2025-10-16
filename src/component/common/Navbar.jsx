import icon from "../assest/icon.png";
import Button from "../Button";

const Navbar = () => {
  return (
    <section className="nav">
      <div className="container">
        <div className="Navbar">
          <div className="navSec">
            <img src={icon} className="web-icon" alt="icon" />
            <h3 className="h3">Nexcent</h3>
          </div>
          <div className="nav-list">
            <ul className="navUl">
              <li>
                <a href="/" className="navItem">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="navItem">
                  Services
                </a>
              </li>
              <li>
                <a href="/products" className="navItem">
                  Products
                </a>
              </li>
              <li>
                <a href="/testimonials" className="navItem">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/faq" className="navItem">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-sec">
            <Button title={"Login"} className={"login-btn"} />
            <Button title={"Sign up"} className={"signUp-btn"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
