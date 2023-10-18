import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function createAccount(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity()) {
      event.stopPropagation()
      return 
    }
  }

  return <section id="register">
    <Container className="mt-5">
      <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card>
                <Card.Body>
                <Card.Title className="text-center">Register</Card.Title>
                <Form onSubmit={createAccount}>
                  <Form.Group className="mb-2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" placeholder="Username"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="Email Address"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required type="text" placeholder="First Name"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required type="text" placeholder="Last Name"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex justify-content-center">
                    <Button as="input" type="submit" value="Create Account" />
                  </Form.Group>
                </Form>
                </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  </section>
};

export default Register