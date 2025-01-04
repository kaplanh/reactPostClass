import Card from "./components/Card";
import Header from "./components/Header";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css"; //bootstrap' classlarini kullanabilmek icin önce projeye terminalden npm i bootstrap yada yarn add bootstrap ekleyip ardindan app.jsx icinde direkt node_modules icindeki yolunu yazarak import ediyoruz
import "./styles.css"; //css dosyalari direk yol belirtilerek import edilir
// console.log(contacts);

const App = () => {
    return (
        <div className="row justify-content-center gap-1 m-3">
            {/* <h1 className="text-danger text-center m-4 border-bottom display-1">
                FullVitaminStack Team
            </h1> */}
            <Header />
            {/* map metodunu kullanirken ve kullanacagin kartlari baska bir componentten cagiracaksan flex olusturmak icin map'in icinde olacagi div i row kabul edeceksin map'den sonraki div i fragment olarak kullan(<></>) ve alttan cagiracagin component'in div ini col olarak düsün */}

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
