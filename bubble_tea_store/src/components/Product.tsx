function Product(props) {
  return (
    <div className="product">
      <img src="" alt="" />
      <div className="info">
        <p>{props.title}</p>
        <p>{props.price}</p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default Product;
