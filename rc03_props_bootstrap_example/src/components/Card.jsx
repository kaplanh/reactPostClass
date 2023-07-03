const Card = ({id,name, imgURL, phone, email }) => {
    return (
        <div key={id} className="card col-sm-6 col-md-3 text-center p-3 " >
            <h5 className="card-title text-danger">{name}</h5>
            <img src={imgURL} className="card-img-top rounded-circle bg-danger w-75 mx-auto" alt="..." />
            <div className="card-body">
                <p className="card-text text-success">{phone}</p>
                <p className="card-text text-success">{email}</p>
            </div>
        </div>
    );
};

export default Card;
