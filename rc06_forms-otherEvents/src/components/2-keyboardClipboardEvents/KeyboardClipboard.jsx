import { useState } from "react";
const KeyboardClipboard = () => {
    const [content, setContent] = useState("");

    const handleNumber = (e) => {
        console.log(e.keyCode);
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            e.preventDefault();
            alert("lütfen numara girmeyin");
        }
    };

    const handlePaste = (e) => {
        console.log(e.target);
        // e.target.style.border = "3px solid red"
        e.target.className = "form-control border border-danger border-4";
        e.target.style.fontSize = "50px";
    };

    return (
        <div className="container mt-4  ">
            <h2 className="text-center">
                <span className="spinner-border text-danger"></span>
                Keyboard-Clipboard{" "}
                <span className="spinner-border text-danger"></span>
            </h2>

            <input
                onKeyDown={handleNumber}
                onChange={(e) => {
                    setContent(e.target.value.toLocaleUpperCase());
                }}
                type="text"
                className="form-control "
            />

            <div className="mt-4">
                <h3>Copied Content</h3>
                <p>content:{content}</p>
            </div>

            <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="10"
                onCopy={handlePaste}
            ></textarea>
        </div>
    );
};

export default KeyboardClipboard;
