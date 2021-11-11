import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBookCard extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
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
    );
  }
}

export default SingleBookCard;
