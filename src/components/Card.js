const Card = props => {

  const handleViewButtonClick = (event) =>{
    props.handleClick(props.id);
  }
  return (
    <>
      <div className="card sm-card">
        <img className="card-img-top" src={props.img} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <button
            className="btn btn-primary"
            onClick={handleViewButtonClick}
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
