import React from 'react';
import classes from './Button.module.css';
import { useHistory, Link } from 'react-router-dom';

interface Props{
    goHome: boolean 
}

const Button: React.FC<Props> = (props: Props) => {
    const history = useHistory()
    if(props.goHome === true){
        return (
            <Link to='/patients'><button className={classes.Button}>Go to HomePage</button></Link>
        )
    }
    else {
        return (
        <button className={classes.Button} onClick={() => history.goBack()}>Go to Previous Page</button>
    )
}
  
}



export default Button
