import React, { useState, useEffect } from "react";
import './Product.css'
import {
  Container,
  Form,
  Row,
  Col,
  Dropdown,
  Card,
  Button,
} from "react-bootstrap";
import ReactReadMoreReadLess from "react-read-more-read-less";
// import Header from "../../../Component/Header/Header";
import Dashboard from "../../../Component/SideNav/Dashboard";

const Product = () => {
  const borderstyle = {
    border: "1px solid #808080",
  };
  const priceStyle = {
    color: "#f96c4b",
    fontWeight: "bold",
    // padding: "5px",
  };

  const cardStyle = {
    // boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075)",
    marginBottom: "30px",
    width: "20rem",
  };

  const titleStyle = {
    // marginRight: "4em",
    textTransform: "uppercase",
    color: "#6C4BF9",
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = "https://course-api.com/react-store-products";

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
     {/* <Header /> */}
     <div className="wrapper">
        <Dashboard />
        <div>
          <Container>
            <h2 className="my-4">Products grid</h2>
            <div>
              <Form inline action="/search" method="GET" name="searchForm">
                <Row>
                  <Form.Group as={Col} className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      style={{ width: 300 }}
                    ></Form.Control>
                    <Button className="btn btn-primary mx-2">Search</Button>
                  </Form.Group>

                  <Col className="classic">
                    <Form.Group className="d-flex">
                      <Dropdown className="mx-3">
                        <Dropdown.Toggle
                          variant=""
                          style={borderstyle}
                          id="dropdown-basic"
                          className="form-control"
                        >
                          Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Office</Dropdown.Item>
                          <Dropdown.Item>Living room</Dropdown.Item>
                          <Dropdown.Item>Dining</Dropdown.Item>
                          <Dropdown.Item>Kitchen</Dropdown.Item>
                          <Dropdown.Item>Bedroom</Dropdown.Item>
                          <Dropdown.Item>Kids</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item>Latest Trend</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown>
                        <Dropdown.Toggle variant="" style={borderstyle}>
                          Last Added
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Today</Dropdown.Item>
                          <Dropdown.Item>Yesterday</Dropdown.Item>
                          <Dropdown.Item>Last week </Dropdown.Item>
                          <Dropdown.Item>Last month</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>

          <Container
            fluid
            className="my-5 px-5 py-5"
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <Row className="showcase">
              {data.map((item) => {
                const { id, name, description, image, price, category } = item;
                return (
                  <Col key={id}>
                    <Card style={cardStyle} className="hover-shadow">
                      <Card.Img
                        variant="top"
                        style={{ height: "13em" }}
                        src={image}
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <Card.Title style={titleStyle}>{name}</Card.Title>
                          <Card.Text style={priceStyle}>${price}</Card.Text>
                        </div>
                        <Card.Text>
                          <ReactReadMoreReadLess
                            style={{ color: "blue" }}
                            charLimit={75}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                          >
                            {description}
                          </ReactReadMoreReadLess>
                        </Card.Text>
                        <Card.Text style={{ color: "#6C4BF9" }}>
                          Category: {category}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    
      
    </>
  );
};

export default Product;
