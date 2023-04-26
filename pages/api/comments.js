import { getXataClient } from 'lib/xata';

const handler = async (req, res) => {
  const client = getXataClient();

  const comments = await client.db.Comments.filter({ postSlug: req.query.postSlug })
    .sort('createdAt', 'desc')
    .getMany();

  res.json({ comments });
};

export default handler;
