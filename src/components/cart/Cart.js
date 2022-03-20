import { Component } from 'react';
import BubbleAlert from '../bubble-alert/BubbleAlert';
import CartDetail from '../cart-detail/CartDetail';

const styles = {
  cart: {},
  button: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: '12px',
    top: '20px',
  },
};
class Cart extends Component {
  get getBubbleNumber() {
    const totalProducts = this.props.cart.reduce(
      (acc, product) => acc + product.count,
      0
    );

    return totalProducts;
  }

  render() {
    const { cart, isCartVisible, showCart } = this.props;

    return (
      <div style={styles.cart}>
        <span style={styles.bubble}>
          {!!this.getBubbleNumber ? (
            <BubbleAlert value={this.getBubbleNumber} />
          ) : null}
        </span>
        <button onClick={showCart} style={styles.button}>
          Carrito
        </button>
        {isCartVisible ? <CartDetail cart={cart} /> : null}
      </div>
    );
  }
}

export default Cart;
