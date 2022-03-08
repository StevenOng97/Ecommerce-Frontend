import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  color: #FF9800;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const color = '#FF9800';
const Loader = ({ loading }: any) => {
  return (
    <div className="loader-container">
      <SyncLoader loading={loading} css={override} size={40} color={color} />
    </div>
  );
};

export default Loader;