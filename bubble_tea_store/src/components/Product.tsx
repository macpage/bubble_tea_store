function Product(props) {
  return (
    <div className="product">
      <img></img>
      <div>
        {props.title}
        {props.price}
        <button>Add</button>
      </div>
    </div>
  );
}

export default Product;
