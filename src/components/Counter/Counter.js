import { useState, useEffect } from 'react';
import Controls from './Controls';
import { Value } from './Value';
import './Counter.css';

export const Counter = () => {
  const step = 1;
  const initialValue = 0;

  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue(prevState => prevState + step);
  };
  const handleDecrement = () => {
    setValue(prevState => prevState - step);
  };

  useEffect(() => {
    console.log('Start useEffect');
  }, [value]);

  return (
    <div className="Counter">
      <Value value={value} />
      <Controls onDecrement={handleDecrement} onIncrement={handleIncrement} />
    </div>
  );
};

// class protoCounter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   static propTypes = {};

//   state = { value: this.props.initialValue };

//   handleIncrement = () => {
//     this.setState(prevState => ({ value: prevState.value + 1 }));
//   };
//   handleDecrement = () => {
//     this.setState(prevState => ({ value: prevState.value - 1 }));
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div className="Counter">
//         <Value value={value} />
//         <Controls
//           onDecrement={this.handleDecrement}
//           onIncrement={this.handleIncrement}
//         />
//       </div>
//     );
//   }
// }

export default Counter;
