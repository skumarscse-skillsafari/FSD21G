import { useParams, useNavigate } from "react-router";
import data from '../Data/data';

const Profile = () => {
    let {userId} = useParams();
    let navigate = useNavigate();
    let userProfile = data.find((user) => user.id === parseInt(userId));
    console.log(userProfile);
  return (
    <div>
        <h2>Profile Component</h2>
        <p>Welcome, {userProfile.firstName}!!!</p>
        <p>Your ID: {userId}</p>
        <p>Your lastName: {userProfile.lastName}</p>
        <p>Your age: {userProfile.age}</p>
        <button onClick={() => navigate('/profiles')}>Go back to Profiles Page...</button>
    </div>
  )
}

export default Profile;