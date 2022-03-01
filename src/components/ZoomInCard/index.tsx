import './style.scss';

const ZoomInCard = ({ card }: any) => {
  const { label, image, action = () => {} } = card;

  const style = {
    background: `url(${image}) no-repeat center center`,
  };

  return (
    <div
      className="zoom-in-card d-flex justify-content-center align-items-center animated"
      style={style}
      onClick={action}
    >
      <h4 className="p-2">{label}</h4>
    </div>
  );
};

export default ZoomInCard;
