import {
  createComment,
  deleteComment,
  fetchComments,
} from "../../utils/comment.helpers";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      console.log("GET REQUEST!!!!");
      return fetchComments(req, res);
    case "POST":
      return createComment(req, res);
    case "DELETE":
      return deleteComment(req, res);
    default:
      return res.status(400).json({ message: "Invalid method." });
  }
}
