import Card from "./components/Card";
import Header from "./components/Header";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css";
// console.log(contacts);

const App = () => {
    return (
        <div className="row justify-content-center gap-1 m-3">
            <h1 className="text-danger text-center m-4 border-bottom display-1">
                FullVitaminStack Team
            </h1>
            {contacts.map((item) => {
                const { id, name, imgURL, phone, email } = item;
                return (
                    <>
                        <Card
                            id={id}
                            name={name}
                            imgURL={imgURL}
                            phone={phone}
                            email={email}
                        />
                    </>
                );
            })}
        </div>
    );
};

export default App;
