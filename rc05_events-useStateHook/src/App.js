import "bootstrap/dist/css/bootstrap.css";
import Events from "./1-events/Events"
import EventsIntro from "./1-events/EventsIntro";
import UseStateObjectIntro from "./3-useState/UseStateObjectIntro";
// import Counter from "./2-classComponent/Counter"
// import UseStateCounter from "./3-useState/UseStateCounter"
// import UseStateObject from "./3-useState/UseStateObject";

function App() {
    return (
        <div className="text-center">
            {/* <EventsIntro/> */}
            {/* <Events /> */}
            {/* <Counter /> */}
            {/* <UseStateObjectIntro/> */}
            {/* <UseStateCounter /> */}
            <UseStateObject />
        </div>
    );
}
export default App;
