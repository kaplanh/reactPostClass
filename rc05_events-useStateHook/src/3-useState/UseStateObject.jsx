import { useState } from "react";
const UseStateObject = () => {
    const [values, setValues] = useState({
        name: "",
        age: 0,
        sallary: 0,
        toggle:false
    });   

    

    const handleValues = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value,toggle:!toggle });
    };
    // console.log(values);

    return (
        <div>
            <h1 >USE STATE OBJECT</h1>
            <h2 onMouseOver={handleToggle}>NAME:{values.name}</h2>
            <input
                onChange={handleValues}
                type="text"
                name="name"
                id="name"
                value={values.name}
            />
            <h2>AGE:{values.age}</h2>
            <input
                onChange={handleValues}
                type="number"
                name="age"
                id="age"
                value={values.age}
            />
            <h2 >Salary:{values.sallary}</h2>
            <input
                onChange={handleValues}
                type="number"
                name="sallary"
                id="sallary"
                value={values.sallary}
            />
            <br />

            <button>Change Name</button>

            <button>inc age</button>
            <button onClick={handleValues}>inc salary</button>

            <button onClick={handleValues}>Full Change</button>

            <button onClick={handleToggle}>Toggle</button>
        </div>
    );
};

export default UseStateObject;
