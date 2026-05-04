import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import EssentialGear from "../components/home/EssentialGear";
import FeaturesSection from "../components/home/FeaturesSection";
import TrendingNow from "../components/home/TrendingNow";
import StorySection from "../components/home/StorySection";
import Footer from "../components/layout/Footer";

const Dashboard = () => {
  return (
    <>
      <HeroSection />
      <EssentialGear />
      <TrendingNow />
      <FeaturesSection />
      <StorySection />
    </>
  );
};

export default Dashboard;
