import { Component } from 'react';

const styles = {
  cartDetail: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: '30px',
    boxShadow: '1px 5px 5px rgb(0,0,0,.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa',
  },
};

class CartDetail extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div style={styles.cartDetail}>
        <ul style={styles.ul}>
          {cart.map((product) => (
            <li style={styles.li} key={product.id}>
              <img
                alt={product.name}
                src={product.img}
                width="50"
                height="32"
              />
              {product.name}
              <span> {product.count} </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CartDetail;
