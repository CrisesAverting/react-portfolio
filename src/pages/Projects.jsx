// import profile from '../'
import '../style.css';
import { Container, Card, Row, Col } from "react-bootstrap";
import { projects } from "../components/data";

function Projects() {
    return (
        <Container className="content">
            <h2 className="my-4">PROJECTS</h2>
            <Container className="d-flex flex-wrap justify-content-evenly mt-5">
                {projects.map((project) => (

                    <Card className="cards" key={project.id}>
                        <img src={project.image} />
                        <Card.Body className="card-content">
                            <Row>
                                <Col>
                                    <a href={project.link} className="cardTitle">
                                        {project.title}
                                    </a>
                                </Col>
                                <Col>
                                    <a href={project.github}>
                                    </a>
                                </Col>
                            </Row>
                            <Card.Text >
                                <p className="desc">
                                    {project.description}
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                ))}
            </Container>
        </Container>


    )
};

export default Projects;