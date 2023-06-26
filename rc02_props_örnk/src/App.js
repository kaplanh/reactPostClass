import Main from "./Main";
import { data } from "./helper/data";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    // console.log(data);
    return (
        <div  className="row">
            {data.map((item) => {
                //   console.log(item);
                const { id, name, hour, image } = item;
                return (
                    <div className="container-fluid">
                        <Main id={id} name={name} hour={hour} image={image} />
                    </div>
                );
            })}
        </div>
    );
};

export default App;
