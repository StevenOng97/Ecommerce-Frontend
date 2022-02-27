import './style.scss';

const CategoryCard = ({ categoryCard }: any) => {
  const { label, action = () => {} } = categoryCard;
  
  return (
    <div className="category-card" onClick={action}>
      <span className="fw-bold">{label}</span>
    </div>
  );
};

export default CategoryCard;