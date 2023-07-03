import Card from "./components/Card";
import Header from "./components/Header";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css";
// console.log(contacts);

const App = () => {
    return (
        <div className="container">
            <h1 className="text-danger text-center">FullVitaminStack Team</h1>
            {contacts.map((item) => {
                const { id, name, imgURL, phone, email } = item;
                return (
                    <div key={id}>
                        <Card
                            name={name}
                            imgURL={imgURL}
                            phone={phone}
                            email={email}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default App;
