import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Login() {
  // store username, password and error in state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    //HardCoded Credentials check
    if (username === "admin" && password === "admin123") {
      navigate("/dashboard"); // Redirect to Dashboard page
    } else {
      setError("Invalid Credentials!!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-zinc-50 min-h-1 gap-4 shadow-lg px-4 w-1/4 rounded-xl py-8">
        <h1 className="font-semibold text-xl mb-4">Login</h1>
        {/* Username */}
        <Input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Error */}
        {error && <p className="">{error}</p>}

        {/* Button */}
        <Button className="mt-2" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
