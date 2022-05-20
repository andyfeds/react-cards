const Card = (props) => {
  return (
    <>
      <div className={'list-group-item'}>
        <h1>{props.title}</h1>;
      </div>
    </>
  );
};

export default Card;
