import { Button, ButtonProps } from 'antd';
import { ReactNode } from 'react';

interface IButton extends ButtonProps {
  children?: ReactNode;
}

const CommonButton = ({ children, ...restProps }: IButton) => {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  );
};

export default CommonButton;