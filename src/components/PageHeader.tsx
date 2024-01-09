import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';

const { Header } = Layout;

const PageHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
  
        <Header style={{ padding: 0, background: colorBgContainer }}>
         
        </Header>
       
  );
};

export default PageHeader;