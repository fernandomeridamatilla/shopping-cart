import { Component } from 'react';
import Product from '../product/Product';

const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div style={styles.products}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    );
  }
}

export default Products;
