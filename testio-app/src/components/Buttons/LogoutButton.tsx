import * as React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ label, onClick }) => (
  <div className="logout-btn fz14" onClick={onClick}>
    {label}
  </div>
);

export default Button;
