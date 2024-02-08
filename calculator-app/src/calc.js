import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [operands, setOperands] = useState({ x: 0, y: 0 });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setOperands({ ...operands, [e.target.name]: parseFloat(e.target.value) });
  };

  const performOperation = async (operation) => {
    try {
      const response = await axios.post(`http://localhost:8000/calc/${operation}`, operands);
      setResult(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <input name="x" type="number" value={operands.x} onChange={handleChange} />
      <input name="y" type="number" value={operands.y} onChange={handleChange} />
      
      <button onClick={() => performOperation('add')}>Add</button>
      <button onClick={() => performOperation('sub')}>Subtract</button>
      <button onClick={() => performOperation('mul')}>Multiply</button>
      <button onClick={() => performOperation('div')}>Divide</button>
      <button onClick={() => performOperation('mod')}>Modulo</button>
      <button onClick={() => performOperation('pow')}>Power</button>
      <button onClick={() => performOperation('root')}>Root</button>
      <button onClick={() => performOperation('log')}>Logarithm</button>
      
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculator;