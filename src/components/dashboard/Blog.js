import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  const onCheckboxBtnClick = (subtitle) => {
    console.log("index", subtitle);
    window.location.href = `/${subtitle}`;
  };

  return (
    <Button color="primary" onClick={() => onCheckboxBtnClick(props.subtitle)}>
      <Card>
        <CardImg alt="Card image cap" src={props.image} />
        <CardBody className="p-4">
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText className="mt-3">{props.text}</CardText>
        </CardBody>
      </Card>
    </Button>
  );
};

export default Blog;
