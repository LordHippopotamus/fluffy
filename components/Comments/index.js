import { Box, Container, Skeleton, Typography } from '@mui/material';
import { useComments } from 'hooks/comments';
import Comment from './Comment';

const Comments = ({ postSlug }) => {
  const { loading, comments } = useComments(postSlug);

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
        {loading &&
          [...Array(10).keys()].map(key => <Skeleton variant="rounded" height={100} key={key} />)}
      </Box>
    </Container>
  );
};

export default Comments;
