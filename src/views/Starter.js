import { Button, Col, Row } from "reactstrap";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/fund1.png";
import bg2 from "../assets/images/bg/son1.png";
import bg3 from "../assets/images/bg/misu2.png";
import bg4 from "../assets/images/bg/gun2.png";

const BlogData = [
  {
    image: bg1,
    title: "ChatDoc",
    subtitle: "ChatDoc",
    description: "",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
