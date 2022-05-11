import { comments } from "../../../data/comments";

export default function handler(res, req) {
  const { conmmentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(conmmentId)
  );
  res.status(200).json(comment);
}
