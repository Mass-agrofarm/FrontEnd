import { Colors } from '@/GlobalStyles/Styles';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError(); // Fetch error details (for server-side errors, if any)
  const status = error?.status || 404; // Default to 404 if no error status is available
  const message = error?.statusText || "Page Not Found";

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ color: `${Colors['accent-200']}` }}>Error {status}</h1>
      <p>{message}</p>
      <Link style={{ color: `${Colors['accent-200']}` }} to={'/'}>Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
