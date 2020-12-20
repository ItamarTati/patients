import React from 'react';
import Button from '../../components/button/Button';


const notFound: React.FC = () => {
    return (
    <div >
        <h1>Page not found</h1>
        <Button goHome={true}/>

    </div>)
  }

export default notFound