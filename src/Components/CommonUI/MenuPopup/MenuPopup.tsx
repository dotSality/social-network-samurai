import { Dropdown, MenuProps } from "antd";
import { ReactNode } from "react";

type MenuPropsType = {
  items: MenuProps['items']
  children: ReactNode
}

export const MenuPopup = ({ items, children }: MenuPropsType) => {

  return <Dropdown overlayStyle={{ minWidth: '130px' }} menu={{ items }} trigger={['click']} placement="topRight">
    {children}
  </Dropdown>;
};