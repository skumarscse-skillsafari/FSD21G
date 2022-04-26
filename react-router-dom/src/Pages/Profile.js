import {useParams, useNavigate, Link} from 'react-router-dom';
function Profile() {
    let {username} = useParams(); // {username: 'john'}
    let navigate = useNavigate();
    console.log(navigate);
    return (
        <div>
            <h2>Profile Component</h2>
            <p>Welcome, {username}!!!</p>
            <Link to='/profile/:username'>John</Link>
            <button onClick={() => navigate('/')}>Go to Home Page</button>
        </div>
    )
}

export default Profile;