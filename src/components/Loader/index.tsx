import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  color: #FF9800;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%)
`;

const color = '#FF9800';
const Loader = ({ loading }: any) => {
  return (
    <div className="loader-container">
      <SyncLoader loading={loading} css={override} size={150} color={color} />
    </div>
  );
};

export default Loader;