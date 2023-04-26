import { useState, useEffect } from 'react';

export const useComments = postSlug => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`/api/comments?postSlug=${postSlug}`);
      const json = await res.json();
      setLoading(false);
      setComments(json.comments);
    };
    getComments();
  }, [postSlug]);

  return { loading, comments };
};
