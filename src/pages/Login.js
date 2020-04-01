import React from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <>
        <Container className="bg-dark h-100 w-100" fluid>
          <Row className="justify-content-center align-items-center w-100 h-100 m-0">
            <Col lg={4} md={12} sm={12}>
              <Card className="p-4">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div
                    style={{ width: 150, height: 150 }}
                    className="bg-dark rounded-circle"
                  ></div>
                </div>
                <Form>
                  <Form.Group>
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control placeholder="Username or Email" type="text" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Link to="/">
                    <Button className="btn-block" variant="dark">
                      Login
                    </Button>
                  </Link>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
