import Card from "./components/card/Card";
import data from "./data";

function App() {
    // console.log(data)
    return (
        <>
            <h1>LANGUAGES</h1>
            {/* iteraston (3) */}
            {/* tek satirlik bir statment'imiz varsa () icinde return süz asagidaki gibi yazabiliriz
            {data.map((item) => (
                <Card />
            ))} */}
            {data.map(({ id, language, img, btnName }) => (
                <Card key={id} lang={language} img={img} btn={btnName} />
            ))}
            {/* Birden fazla statemet kullanicaksa o zaman fonksiyonun suslu  ve return keywordu kullanamsi gerekir. */}
            {/* {data.map((item) => {
        const { id, language, img, btnName } = item
        return <Card key={id} lang={language} img={img} btn={btnName} />
      })} */}
            {/* <Card
        id={data[1].id}
        lang={data[1].language}
        img={data[1].img}
        btn={data[1].btnName}
      /> */}
        </>
    );
}

export default App;
