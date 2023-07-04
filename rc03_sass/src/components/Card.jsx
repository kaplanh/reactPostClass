

const Card = ({ data }) => {
  console.log(data)
  //? js
  return (
    <div >
      {data.map((item) => {
        //? JS
        const { id, name, job, img, comment } = item
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p>{comment}</p>
            <img src={img} alt="img" />
            <div >
              <button >Small</button>
              <button >Large</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
