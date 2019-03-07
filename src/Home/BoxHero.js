import React from 'react';
import Radium from 'radium';
import background from '../Assets/money.jpeg';
import Auth from '../Auth/Signin';

const styles = {

    divlog: {
        position: 'absolute',
        top: '60%',
        left: '45%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold'
    },

    boxhero: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        color: 'white',
        textAlign: 'center'
        
    }


}

const BoxHero = (props) => {
    return (
        <div>
            <div style={styles.boxhero}></div>
            <div style={styles.divlog}>
                <Auth setToken={props.setToken} />
            </div>
        </div>
    )
}

export default Radium(BoxHero);
