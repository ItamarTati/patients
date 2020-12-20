import React from 'react';
import Button from '../../components/button/Button';


const notFound: React.FC = () => {
  return (
    <div >
      <h1>404</h1>
      <p>Page does not exist! Unless you were
      looking for this error page, In which
          case you find it!</p>
      <Button goHome={true} />

    </div>)
}

export default notFound


