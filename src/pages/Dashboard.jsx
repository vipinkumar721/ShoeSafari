import { signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { auth } from "../config/firebase";
import { Button } from "antd";

const Dashboard = () => {
  const { user } = useAuth();
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <h1>Welcome to the ShoeSafari Dashboard</h1>
      <p>user name{user?.email}</p>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
};

export default Dashboard;
