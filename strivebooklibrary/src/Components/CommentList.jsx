import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
const CommentList = ({ commentsToShow }) => {
  return (
    <ListGroup>
      {commentsToShow.map((comment) => (
        /*  <ListGroup.Item key={c.elementId}>
         {c.comment} 
        </ListGroup.Item> */
        <SingleComment comment={comment} key={comment._id} />
      ))}
    </ListGroup>
  );
};
export default CommentList;
