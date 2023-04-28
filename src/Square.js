import React from 'react';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }
class Square extends React.Component {
    render() {
      const { value, onClick } = this.props;
      let logo;
  
      if (value === 'X') {
        logo = <img src="images/falcons-logo.png" alt="Atlanta Falcons logo" />;
      } else if (value === 'O') {
        logo = <img src="images/panthers-logo.png" alt="Carolina Panthers logo" />;
      }
  
      return (
        <button className="square" onClick={onClick}>
          {logo}
        </button>
      );
    }
  }
  
export default Square;
