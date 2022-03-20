import { Component } from 'react';
import Products from './components/products/Products';
import Layout from './components/layout/Layout';
import Title from './components/title/Title';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Tomate',
        price: 1500,
        img: '/assets/img/products/tomate.jpg',
      },
      {
        id: 2,
        name: 'Lechuga',
        price: 500,
        img: '/assets/img/products/lechuga.jpg',
      },
      {
        id: 3,
        name: 'Habas',
        price: 2500,
        img: '/assets/img/products/habas.jpg',
      },
    ],
    cart: [],
    isCartVisible: false,
  };

  addToCart(product) {
    const { cart } = this.state;
    const found = cart.find((productCart) => productCart.id === product.id);

    this.updateCart(cart, product, found);
  }

  updateCart(cart, product, productFound) {
    if (!productFound) {
      cart.push({ ...product, count: 1 });
    } else {
      productFound.count += 1;
    }

    this.setState({ cart });
  }

  // () => this.showCart() en Navbar
  // showCart() {
  //   this.setState({ isCartVisible: !this.state.isCartVisible });
  // }

  showCart = () => {
    const { isCartVisible, cart } = this.state;

    if (!!cart.length) {
      this.setState({ isCartVisible: !isCartVisible });
    }
  };

  render() {
    const { isCartVisible, products, cart } = this.state;

    return (
      <div>
        <Navbar
          cart={cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products
            products={products}
            addToCart={(product) => this.addToCart(product)}
          />
        </Layout>
      </div>
    );
  }
}
export default App;
