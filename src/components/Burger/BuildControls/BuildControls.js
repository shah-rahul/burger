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
    {controls.map((ctrl) => (
      <BuildControl
        disabled={props.disabled[ctrl.type]}
        removed={() => props.ingredientRemoved(ctrl.type)}
        added={() => props.ingredientAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
  </div>
);
export default buildControls;
