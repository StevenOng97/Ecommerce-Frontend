import SyncLoader from 'react-spinners/SyncLoader';

const override = `
  display: block;
  margin: 0 auto;
  color: #fff;
`;

const color="#fff"
const ButtonLoader = ({ loading }: any) => {
  return (
    <SyncLoader loading={loading} css={override} size={10} color={color}/>
  );
};

export default ButtonLoader;
