import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { useComments } from "../../hooks/useComment";

const CommentContainer = () => {
  const { text, setText, comments, onSubmit, onDelete } = useComments();

  return (
    <section>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </section>
  );
};

export default CommentContainer;
