import {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const {user} = useContext(UserContext);
  if (!user)
    <h1 className="bg-gray-600 text-white text-center mt-3 text-3xl inline-block p-4">
      Not logged In
    </h1>;

  return <div>Profile : {user.username}</div>;
}

export default Profile;
