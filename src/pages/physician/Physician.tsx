import React, { useState, useEffect } from 'react';
import { Redirect, Link, useParams, useHistory } from 'react-router-dom';
interface Physician{  
    id: string
    firstName: string,
    lastName: string,
    phone: string
}
interface id{
  Physicianid: string
}

const Physician: React.FC = () => {
  const id: id = useParams()
  const [physician, setPhysician] = useState<Partial<Physician>>({}), 
  physicianInfoApi: string = `https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/physicians/${id.Physicianid}`
  useEffect(() => {
    fetchData();
  }, [physicianInfoApi])

function fetchData() {
    fetch(physicianInfoApi)
        .then(response => response.json())
        .then(data => setPhysician(data))
        .catch((error) => console.log(error));
  }
  return (
    <div >
        <h1>Physician Page</h1>
        <p>{physician.id}, {physician.firstName}, {physician.lastName}, {physician.phone}</p>

    </div>)
  }

export default Physician