import { Box, Card, CardContent, Typography } from '@mui/material';

const Comment = ({ comment }) => (
  <Card>
    <CardContent>
      <Typography>{comment.content}</Typography>
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Typography variant="body2">
          At&nbsp;{new Date(comment.createdAt).toDateString()}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
export default Comment;
