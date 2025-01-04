import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./scss/app.scss";

//*1- npm i sass or yarn add sass
//*2-proje kücükse scss klasörü acip icinde _mixin.scss, _reset.scss, variable.scss, app.scss, card.module.scss gibi sass dosyalarini aciyoruz ve app.scss de topladigimiz mixin varibale vb scss dosyalarini App.jsx de import ediyoruz import "./scss/app.scss"

//* yada her componente özel bir scss klasörü ve scss dosyasi olusturup direkt o componente import ediyoruz
//* sass i module ile birlikte kullanbiliriz mesela scss klasörü icinde Header.jsx e özel olusturdugumheader.module.scss dosyasini Header.jsx de bu sekilde import ediyorum import HeaderStyle from "../scss/header.module.scss";

import data from "./data";

function App() {
    return (
        <>
            <Header />
            <Card data={data} />
            <Footer />
        </>
    );
}

export default App;
