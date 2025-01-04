// import "./Buton.css"
import ButonStyle from "./Buton.module.css";

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.
//* tek kelimeli bir class ismini moduleName.class seklinde yazabiliriz yada moduleName["class"] seklinde yazilir
//* ORN:moduleName["class-adi"]

const Buton = ({ btn }) => {
    return (
        // <div className="title">
        <div className={ButonStyle.title}>
            {/* bizim module.css ile yazdigimiz <div className={ButonStyle.title}>  i webbeck <button class="Buton_title__9Rael"> </button>  gibi unique bir class a dönüstürüyor*/}
            {/* <button className="btn-blue">{btn}</button> */}
            <button className={ButonStyle["btn-blue"]}>{btn}</button>
        </div>
    );
};

export default Buton;
