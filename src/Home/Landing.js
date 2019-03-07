import React from 'react';
import MortIndex from '../Mortgage/MortIndex';

const Landing = (props) => {
    return(
        <div>
            <MortIndex token={props.sessionToken}/>            
        </div>
    )
}

export default Landing;