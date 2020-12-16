import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
];
const buildControls = (props) => (
  <div className='BuildControls'>
    <p>
      Current Price : <strong>{props.price}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        disabled={props.disabled[ctrl.type]}
        removed={() => props.ingredientRemoved(ctrl.type)}
        added={() => props.ingredientAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}

    <button
      onClick={props.ordered}
      disabled={!props.purchasable}
      className='OrderButton'>
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
