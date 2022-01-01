import { nanoid } from "nanoid";
import redis from "./redis.helpers";
import { getUser } from "./user.helpers";

// !
export async function createComment(req, res) {
  const { url, text } = req.body;
  const { authorization } = req.headers;

  // *
  if (!url || !text || !authorization)
    return res.status(400).json({ message: "Missing parameter. " });

  // *
  try {
    // Verify user token
    const user = await getUser(authorization);

    if (!user) return res.status(400).json({ message: "Need authorization." });

    const { name, picture, sub, email } = user;

    const comment = {
      id: nanoid(),
      created_at: Date.now(),
      url,
      text,
      user: { name, picture, sub, email },
    };

    // Write data
    await redis.lpush(url, JSON.stringify(comment));

    return res.status(200).json(comment);
  } catch (err) {
    console.log("ERROR:", err);
    return res.status(400).json({ message: "Unexpected error occured. " });
  }
}

// !
export async function deleteComment(req, res) {
  // *
  const { url, comment } = req.body;
  const { authorization } = req.headers;

  // *
  if (!url || !comment || !authorization)
    return res.status(400).json({ message: "Missing parameter." });

  // *
  try {
    // Verify user token
    const user = await getUser(authorization);

    if (!user) return res.status(400).json({ message: "Invalid Token." });

    comment.user.email = user.email;
    const isAdmin = process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL === user.email;
    const isAuthor = user.sub === comment.user.sub;

    if (!isAdmin || !isAuthor)
      return res.status(400).json({ message: "Need authorization." });

    // Delete comment
    await redis.lrem(url, 0, JSON.stringify(comment));

    return res.status(200).json({});
  } catch (err) {
    console.log("ERROR:", err);
    return res.status(400).json({ message: "Unexpected error occured. " });
  }
}

// !
export async function fetchComments(req, res) {
  // *
  const { url } = req.query;

  // *
  if (!url) return res.status(400).json({ message: "Missing parameter." });

  // *
  try {
    // Get data
    const rawComments = await redis.lrange(url, 0, -1);

    // Turn string data to object
    const comments = rawComments.map((rawComment) => {
      const comment = JSON.parse(rawComment);
      delete comment.user.email;
      return comment;
    });

    return res.status(200).json(comments);
  } catch (err) {
    console.log("ERROR:", err);
    return res.status(400).json({ message: "Unexpected error occured. " });
  }
}
