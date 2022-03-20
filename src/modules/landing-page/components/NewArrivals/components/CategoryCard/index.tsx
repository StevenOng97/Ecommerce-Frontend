import './style.scss';
import Button from '../../../../../../components/Button/Button';

const CategoryCard = ({ categoryCard, currentFilter }: any) => {
  const { label, action = () => {}, value } = categoryCard;

  const className = currentFilter === value ? 'category-card active' : 'category-card';
  return (
    <Button
      context={label}
      contextStyle="fw-bold"
      className={className}
      onClick={action}
    />
  );
};

export default CategoryCard;
