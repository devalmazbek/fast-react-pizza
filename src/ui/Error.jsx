import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const errorMessage = useRouteError();
  console.log(errorMessage);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage.data || errorMessage.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;