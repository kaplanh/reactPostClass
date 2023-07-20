import { Outlet } from "react-router-dom";
import About from "../components/About";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="p-3">
      <h1>Home sayfasi</h1>
      {/* <About />
      <Courses /> */}
      <Outlet/>
    </div>
  );
};

export default Home;
