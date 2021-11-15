import { render } from "@testing-library/react";
import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentsArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = () => {
    console.log("componetsDidmount");
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzY2NDAwMzUsImV4cCI6MTYzNzg0OTYzNX0.VG86lV20CDVqvjC9I1KfBdP08Y5tWlGW5utDd-dm5cU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          comments: data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      /*     <ListGroup>
        {this.state.comments.map((c) => (
          <ListGroup.Item key={c.elementId}>{c.comment}</ListGroup.Item>
        ))}
      </ListGroup> */
      <div>
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentsArea;
