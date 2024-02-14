import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ loggedIn, email }) => {
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        // Navigate to the login page when the button is clicked
        navigate('/Login');
    };

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <div>Welcome!</div>
            </div>
            <p>Menu</p>
            <div className="buttonContainer">
                <input
                    className="inputButton"
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"}
                />
                {loggedIn && <div>Your email address is {email}</div>}
                <div className="menuOption">About</div>
                <div className="menuOption">Contact us</div>
                <div className="menuOption"><strong>What's on</strong></div>
            </div>
           
        </div>
    );
};

export default Home;
