export function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h3 className="name">{props.name}</h3>
        <img
          className="circle-img"
          src={props.img}
          height="100px"
          alt="avatar"
        />
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
