function Product(props) {
  return (
    <div id="Product">
      <img src="assets/lol.png" alt="" />
      {<button id="back">{props.BackButton}</button>}
      {<button id="forward">{props.ForwardButton}</button>}
    </div>
  );
}

export default Product;
