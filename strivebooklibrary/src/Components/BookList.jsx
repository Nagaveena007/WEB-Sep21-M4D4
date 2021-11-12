import SingleBookCard from "./SingleBook";

import { Col, Container, Row, Form } from "react-bootstrap";
import React from "react";
class BookList extends React.Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search for Book"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={3} lg={2}>
                <SingleBookCard book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
