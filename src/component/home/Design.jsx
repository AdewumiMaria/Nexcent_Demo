import design from "../assest/design.png";
import Button from "../Button";
const Design = () => {
  return (
    <section className="design">
      <div className="container">
        <div className="design-sec">
          <div className="design-1">
            <img src={design} className="design-img" alt="design" />
          </div>
          <div className="design-2">
            <h1>
              How to design your site footer like <br />
              we did
            </h1>
            <p>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <Button title={"Learn More"} className={"design-btn"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Design;
