import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;



class Header extends Component {
  render() {
    return (
      <section className="Header-section">
        <Menu
      mode="horizontal"
    >
      <Menu.Item key="mail">
        MARKETPLACE
      </Menu.Item>
      <SubMenu title={<span>AUCTIONS</span>}>
          <Menu.Item>Success Fee</Menu.Item>
          <Menu.Item>Competitive</Menu.Item>
        </SubMenu>
      <SubMenu title={<span>CLIENTS</span>}>
          <Menu.Item>Perm Clients</Menu.Item>
        </SubMenu>
      <SubMenu title={<span>DOCUMENTS</span>}>
          <Menu.Item>Prequalifications</Menu.Item>
        </SubMenu>
      </Menu>
      </section>
    );
  }
}

export default Header;
