import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.scss';

const UserCard = (props) => {
    return (
        <div>
            {props.loginData.length === 0 ? "" : <h1>Card for matched user</h1>}
            {props.loginData.length === 0 ? <h1>List is empty, please type characters in the form and press Submit!</h1> :
                <Link to="/search-github-users-classbased/repositories"><button onClick={props.getRepo} type="submit" className="userCardLink">
                    <div>
                        <img src={props.avatar} alt={props.name} />
                        <h1>{!props.name ? "User did not defind a name" : props.name}</h1>
                        <p>{!props.description ? "User has no descritpion!" : props.description.slice(0, 90) + '...'}</p>
                    </div>
                </button></Link>
            }
        </div>
    )
};

export default UserCard;