import {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };

  return (
    <div className="flex flex-col  text-gray-700">
      <h2 className="text-2xl font-bold mb-8">Login</h2>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded border-gray-300 p-2 mb-4  focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded border-gray-300 p-2 mb-4  focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
