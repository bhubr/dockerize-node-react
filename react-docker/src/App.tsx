import { useState, useEffect } from 'react';
import { serverUrl } from './config';

function App() {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error|null>(null);

  useEffect(() => {
    setLoading(true)
    fetch(`${serverUrl}/message`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
        }
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <p>Server URL is: {serverUrl}</p>
      {
        loading
          ? <p>Loading&hellip;</p>
          : error
          ? <p><strong>ERROR</strong>: {error.message}</p>
          : <p>Received message from server: <em>{message}</em></p>
      }
    </div>
  );
}

export default App;
