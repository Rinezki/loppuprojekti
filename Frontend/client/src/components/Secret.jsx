import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Secret({ token }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('/secret', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage('Access denied'));
  }, [token]);

  return (
    <div>
      <h2>Protected Content</h2>
      <p>{message}</p>
    </div>
  );
}
