import { Helmet } from 'react-helmet-async';

const container = {
  padding: 50,
};

function NotFoundPage(): JSX.Element {
  return (
    <div style={container}>
      <Helmet>
        <title>Escape Room. 404 Page not found.</title>
      </Helmet>
      <h2>404 Page not found</h2>

    </div>
  );
}

export default NotFoundPage;
