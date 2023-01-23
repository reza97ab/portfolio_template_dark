import { Col } from "react-bootstrap";

const ProjectCard = ({ title, discription, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgurl" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{discription}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
