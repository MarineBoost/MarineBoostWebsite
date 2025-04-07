// src/components/Loader.js
import React from "react";
import { ColorRing } from 'react-loader-spinner';
import logo from "../../utils/images/marineboost.jpeg";

const Loader = () => {
  return (
    <div
      className="loader-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* Centered Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          position: 'absolute',
          zIndex: 2,
        }}
      />

      {/* Spinner Around Logo */}
      <div style={{ zIndex: 1 }}>
        <ColorRing
          visible={true}
          height="150"
          width="100"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  );
};

export default Loader;
