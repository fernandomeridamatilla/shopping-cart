import { Component } from 'react';

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
class AddProductButton extends Component {
  render() {
    const { text, onClick } = this.props;

    return (
      // Dentro de button hereda todas las props indicadas en el padre
      // {...this.props}
      <button style={styles.button} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default AddProductButton;
