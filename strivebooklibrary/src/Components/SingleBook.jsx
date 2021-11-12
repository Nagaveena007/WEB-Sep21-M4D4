import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import CommentsArea from "./CommentsArea";

/* import CommentsArea from ".Component/CommentsArea";
 */ class SingleBookCard extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
      <>
        <Card className="px-3">
          <Card.Img
            variant="top"
            onClick={() =>
              this.setState({
                selectedBook: !this.state.selectedBook,
              })
            }
            src={this.props.book.img}
            key={this.props.asin}
            style={{
              border: this.state.selectedBook
                ? "3px solid red"
                : "3px solid black",
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>

        {this.state.selectedBook && (
          <CommentsArea
            id={this.props.selectedBook.asin}
            selectedBook={this.state.selectedBook}
          />
        )}
        {/* 
        <Row className="mt-3 justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <CommentsArea selectedBook={this.state.selectedBook} />
          </Col>
        </Row> */}
      </>
    );
  }
}

export default SingleBookCard;
