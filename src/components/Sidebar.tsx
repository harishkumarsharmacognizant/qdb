import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';

import {
   
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Image } from 'antd';
import { Typography } from 'antd';

const { Sider } = Layout;
const { Title,Text } = Typography;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  const navigateBlogs = () => {
    navigate('/blogs');
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [profile, setProfile] =useState<{name: string; }>({
    name: '',
  });

  useEffect(() => {
    (async () => {
    const user = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/1`
    );
    setProfile(user.data);
    })();
    }, []);
 
  return (
  
    <Sider trigger={null}>
    <div className="demo-logo-vertical" />
    <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >    <Image rootClassName="profile_image" width={'100%'} src='https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
  />    
  </Image.PreviewGroup>
  <p className='welcome_msg'>Hello</p>
  <h3 className='username' data-testid='userdata'>{profile.name !=='' && profile.name}</h3>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={navigateHome}
      items={[
        {
           
          key: '1',
          icon: <UserOutlined />,
          label: 'Dashboard',
        }
       
      ]}
    />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={navigateBlogs}
      items={[
       
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'Blogs',
        }
       
      ]}
    />
  </Sider>
       
  );
};

export default Sidebar;