import {Link} from 'react-router-dom';
import data from "../Data/data";

function Profiles() {
    console.log(data);
    return (
        <div>
            <h2>Profiles Component</h2>
            {data.map((user) => (
                <div key={user.id}>
                    <p>User firstName: {user.firstName}</p>
                    <Link to={`/profiles/profile/${user.id}`}>More Info...</Link>
                <hr />
                </div>
            ))}
        </div>
    )
}

export default Profiles;