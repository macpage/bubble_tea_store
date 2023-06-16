function Product(props) {
  return (
    <div className="product">
      {props.img}
      {props.title}
      {props.price}
      {props.button}
    </div>
  );
}

export default Product;
