const Card = ({ id, name, hour, image }) => {
    return (
        <div
            className="border"
            style={{}}
            key={id}
        >
            <div className="">
                <img className="" width="100px" src={image} alt="" />
            </div>
            <div className="">
                <h5 className="">Lesson Name:{name}</h5>
                <p className="">Lesson Hour:{hour}</p>
            </div>
        </div>
    );
};

export default Card;
