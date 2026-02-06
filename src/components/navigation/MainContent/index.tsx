import Checkbox from '../../ui/Checkbox';

const MainContent: React.FC = () => {
  return (
    <div>
      <Checkbox />
      <Checkbox priority="low" />
      <Checkbox priority="medium" isChecked />
      <Checkbox priority="high" />
    </div>
  );
};

export default MainContent;
