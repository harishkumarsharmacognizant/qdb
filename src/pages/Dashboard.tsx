import React, { useState } from 'react';
import { Layout } from 'antd';
const {Content } = Layout;

const Dashboard: React.FC = () => {
 
  return (
  
    <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
           
          }}
        >
          Dashboard
        </Content>
       
  );
};

export default Dashboard;