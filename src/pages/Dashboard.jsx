import { signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { auth } from "../config/firebase";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import EquipNavbar from "../components/EquipNavbar";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import EssentialGear from "../components/home/EssentialGear";
import FeaturesSection from "../components/home/FeaturesSection";
import TrendingNow from "../components/home/TrendingNow";
import StorySection from "../components/home/StorySection";
import ShopPage from "./ShopPage";
import Footer from "../components/layout/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="h-screen bg-[#ccc]">
        {/* <EquipNavbar/> */}
        <Navbar/>
        <HeroSection />
        <EssentialGear />
        <TrendingNow />
        <FeaturesSection />
        <StorySection />
        <ShopPage/>
        <Footer />
        <div>
          <h1>Welcome to the ShoeSafari Dashboard</h1>
          <p>user name{user?.email}</p>
          <Button onClick={handleLogout}>Log Out</Button>
          <Button onClick={() => navigate("/products")}>View Products</Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
