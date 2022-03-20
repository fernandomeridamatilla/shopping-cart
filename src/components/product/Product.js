import { Component } from 'react';
import AddProductButton from '../add-product-button/AddProductButton';

const styles = {
  product: {
    border: 'solid 1px #eee',
    boxShadow: '0px 5px 5px rgb(0,0,0, .3)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '15px',
  },
  img: {
    width: '100%',
  },
};

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.name} src={product.img} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <AddProductButton
          text={'Añadir'}
          product={product}
          onClick={addToCart}
        />
      </div>
    );
  }
}

export default Product;
