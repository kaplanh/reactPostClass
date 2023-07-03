const Card = ({ id, name, imgURL, phone, email }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <h5 class="card-title">{name}</h5>
            <img src={imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{phone}</p>
                <p className="card-text">{email}</p>
            </div>
        </div>
    );
};

export default Card;
