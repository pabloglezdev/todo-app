import { useState } from 'react';
import type { PriorityType } from '../../../types/misc';

const getComputedCheckboxColor = (priority: PriorityType, checked: boolean) => {
  const checkboxColor = {
    none: `${checked ? 'bg-accents-gray' : 'bg-accents-gray/10'} border-accents-gray`,
    low: `${checked ? 'bg-accents-pink' : 'bg-accents-pink/10'} border-accents-pink`,
    medium: `${checked ? 'bg-accents-orange' : 'bg-accents-orange/10'} border-accents-orange`,
    high: `${checked ? 'bg-accents-blue' : 'bg-accents-blue/10'} border-accents-blue`,
  };

  const hover = {
    none: `${checked ? 'hover:bg-accents-gray' : 'hover:bg-white'}`,
    low: `${checked ? 'hover:bg-accents-pink' : 'hover:bg-white'}`,
    medium: `${checked ? 'hover:bg-accents-orange' : 'hover:bg-white'}`,
    high: `${checked ? 'hover:bg-accents-blue' : 'hover:bg-white'}`,
  };

  return `${checkboxColor[priority]} ${hover[priority]}`;
};

const getTickComputedStyles = (priority: PriorityType, checked: boolean) => {
  const tickColor = {
    none: 'text-accents-blue',
    low: 'text-accents-pink',
    medium: 'text-accents-orange',
    high: 'text-accents-blue',
  };

  const finalColor = checked ? 'text-white' : tickColor[priority];
  const showTick = checked
    ? 'opacity-100'
    : 'opacity-0 group-hover:opacity-100';

  return `${finalColor} ${showTick}`;
};

interface CheckboxProps {
  priority?: PriorityType;
  isChecked?: boolean;
}

const styles = {
  checkbox: 'w-5 h-5 rounded-full border flex items-center justify-center',
  tick: 'w-3 h-3 opacity-0 group-hover:opacity-100',
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { priority = 'none', isChecked = false } = props;

  return (
    <div
      className={`${styles.checkbox} ${getComputedCheckboxColor(priority, isChecked)}`}
    >
      <svg
        className={`${styles.tick} ${getTickComputedStyles(priority, isChecked)}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Checkbox icon</title>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default Checkbox;
