import { Button, ListGroup } from "react-bootstrap";
/* import { ArrowRight } from "react-bootstrap-icons";
 */
const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzY2NDAwMzUsImV4cCI6MTYzNzg0OTYzNX0.VG86lV20CDVqvjC9I1KfBdP08Y5tWlGW5utDd-dm5cU",
        },
      }
    );
    if (response.ok) {
    }
  } catch (error) {
    console.log("error");
  }
};
const SingleComment = (props) => {
  return (
    <ListGroup.Item key={props.comment.elementId}>
      {props.comment.comment}
      <Button
        varient="danger"
        className="ml-2"
        onClick={() => deleteComment(props.comment._id)}
      >
        D
      </Button>
    </ListGroup.Item>
  );
};
export default SingleComment;
