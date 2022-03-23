import './style.scss';

const DirectoryPath = ({currentProduct} :any) => {
  const {categories, title} = currentProduct
  return (
    <div className="directory-wrapper">
      <ul className="directory-list">
        <li className="directory-item">Home</li>
        <li className="directory-item">{categories}</li>
        <li className="directory-item">{title}</li>
      </ul>
    </div>
  );
};

export default DirectoryPath;



