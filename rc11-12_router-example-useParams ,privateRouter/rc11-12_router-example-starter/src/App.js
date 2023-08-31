// import Footer from "./components/Footer";
// import Nav from "./components/Nav";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import People from "./pages/People";
// import NotFound from "./pages/NotFound";

import { AppRouter } from "./router/AppRouter";

function App() {
    return (
        <>
            {/* <Nav />
      <Home />
      <People />
      <Contact />
      <NotFound />
      <Footer /> */}
            <AppRouter />
        </>
    );
}

export default App;
