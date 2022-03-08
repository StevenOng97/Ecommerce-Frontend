import { useState } from 'react';
import './style.scss';
import Button from '../../../../../../components/Button/Button';

const CategoryCard = ({ categoryCard }: any) => {
  const { label, action = () => { }, value } = categoryCard;

  const [filter, setFilter] = useState<string>('');

  const className = filter === value ? 'category-card active' : 'category-card';
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
