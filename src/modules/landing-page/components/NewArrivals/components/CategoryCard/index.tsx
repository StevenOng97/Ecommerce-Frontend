import { useState } from 'react';
import './style.scss';

const CategoryCard = ({ categoryCard }: any) => {
  const { label, action = () => {}, value } = categoryCard;

  const [filter, setFilter] = useState<string>(''); 

  const className = filter === value ? 'category-card active' : 'category-card';
  return (
    <div className={className} onClick={action}>
      <span className="fw-bold">{label}</span>
    </div>
  );
};

export default CategoryCard;
