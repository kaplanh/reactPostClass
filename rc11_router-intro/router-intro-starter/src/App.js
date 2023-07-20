import "./App.css";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import About from "./components/About";
import Courses from "./components/Courses";
// BrowserRouter ==> dede
// Routes ==> baba
// Route==> çocuk
// Nav-Footer ==> amca (yeğenler amcalarını görür)

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="about" element={<About />} />
                    <Route path="courses" element={<Courses />} />
                </Route>
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
