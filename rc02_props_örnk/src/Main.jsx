import Card from "./Card";

const Main = ({ hour, id, name, image }) => {
    return (
        <div className="d-flex border border-danger">
            <Card id={id} name={name} hour={hour} image={image} />
        </div>
    );
};

export default Main;
