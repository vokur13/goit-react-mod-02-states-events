import { useState, useEffect, useReducer } from 'react';
import Controls from './Controls';
import { Value } from './Value';
import './Counter.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error(`Unsupported action action type ${action.type}`);
  }
}

function init(initialState) {
  return { ...initialState, count: initialState.count + 100 };
}

export const Counter = () => {
  const step = 1;
  const initialValue = { count: 0 };

  //   const [value, setValue] = useState(initialValue);
  const [state, dispatch] = useReducer(countReducer, initialValue, init);

  const handleIncrement = () => {
    dispatch({ type: 'increment', payload: step });
  };
  const handleDecrement = () => {
    dispatch({ type: 'decrement', payload: step });
  };

  useEffect(() => {
    console.log('Start useEffect');
  }, [state.count]);

  return (
    <div className="Counter">
      <Value value={state.count} />
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
