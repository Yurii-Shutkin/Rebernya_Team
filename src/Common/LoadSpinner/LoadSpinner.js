import React from 'react';
import './LoadSpinner.scss'; // Создайте соответствующий CSS файл для стилизации спиннера

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
