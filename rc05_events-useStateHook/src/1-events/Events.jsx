// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
import { useState } from "react";
const Events = () => {
    const [count, setCount] = useState(0);
    const [color,setColor]=useState('text-bg-danger')

    const handleInc = () => {
        setCount(count + 1);
    };

    const handleColor = () => {
        setColor('text-bg-primary p-3 mt-4')
    }

    return (
        <div>
            <p className={color}>Count:{count}</p>
            <div className="btn-group">
                <button onClick={handleInc} className="btn btn-outline-primary">
                    INC
                </button>
                <button
                    onDoubleClick={() => setCount(0)}
                    className="btn btn-outline-danger"
                >
                    <span className="spinner-grow spinner-grow-sm"></span>
                    DEL
                </button>
                <button
                    onClick={
                        count ? () => setCount(count - 1) : () => alert("hata")
                    }
                    className="btn btn-outline-warning"
                >
                    DEC
                </button>
                <button onClick={handleColor} className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm"></span>{" "}
                    Color
                </button>
            </div>
        </div>
    );
};

export default Events;

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
