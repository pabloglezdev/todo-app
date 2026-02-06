import { useState } from 'react';

const getComputedCheckboxColor = (priority: PriorityType, checked: boolean) => {
  const checkboxColor = {
    none: checked
      ? 'bg-accents-gray border-accents-gray'
      : 'bg-white border-accents-gray',
    low: checked
      ? 'bg-accents-pink border-accents-pink'
      : 'bg-white border-accents-pink',
    medium: checked
      ? 'bg-accents-orange border-accents-orange'
      : 'bg-white border-accents-orange',
    high: checked
      ? 'bg-accents-blue border-accents-blue'
      : 'bg-white border-accents-blue',
  };

  const hover = {
    none: checked
      ? 'hover:bg-accents-gray hover:border-accents-gray'
      : 'hover:bg-white hover:border-accents-gray',
    low: checked
      ? 'hover:bg-accents-pink hover:border-accents-pink'
      : 'hover:bg-white hover:border-accents-pink',
    medium: checked
      ? 'hover:bg-accents-orange hover:border-accents-orange'
      : 'hover:bg-white hover:border-accents-orange',
    high: checked
      ? 'hover:bg-accents-blue hover:border-accents-blue'
      : 'hover:bg-white hover:border-accents-blue',
  };
  return `${checkboxColor[priority]} ${hover[priority]}`;
};

const getTickComputedStyles = (priority: PriorityType, checked: boolean) => {
  const tickColor = {
    none: 'text-accents-gray',
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

type PriorityType = 'none' | 'low' | 'medium' | 'high';

interface CheckboxProps {
  priority?: PriorityType;
  isChecked?: boolean;
}

const styles = {
  checkbox:
    'group w-5 h-5 rounded-full border flex items-center justify-center',
  tick: 'w-3 h-3 opacity-0 group-hover:opacity-100',
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { priority = 'none', isChecked = false } = props;

  const [checked, setChecked] = useState(isChecked);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <button
      type="button"
      className={`${styles.checkbox} ${getComputedCheckboxColor(priority, checked)}`}
      onClick={handleClick}
    >
      <svg
        className={`${styles.tick} ${getTickComputedStyles(priority, checked)}`}
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
    </button>
  );
};

export default Checkbox;
