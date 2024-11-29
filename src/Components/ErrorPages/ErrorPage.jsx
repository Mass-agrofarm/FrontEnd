import { Colors } from '@/GlobalStyles/Styles';
import { Link, useLocation } from 'react-router-dom';

const ErrorPage = () => {
    const location = useLocation();
    let status = 404
    let message = 'The page: '
  return (
    <div style={{ marginTop: '50px', textAlign: 'center', padding: '50px', height: '50vh'}}>
      <h1 style={{ color: `${Colors['accent-200']}` }}>Error {status}</h1>
      <p>{`${message} (${location.pathname.split('/')[1]}) does not exist!`}</p>
      <Link style={{ color: `${Colors['accent-200']}` }} to={'/'}>Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
