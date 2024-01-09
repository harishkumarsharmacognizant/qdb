import React, { useState } from 'react';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

import { Layout,theme } from 'antd';
import Sidebar from './components/Sidebar';
import PageHeader from './components/PageHeader';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
     <Sidebar/>
      <Layout>
        <PageHeader/>
         
              <Routes>
                <Route  path="/" element={<Dashboard />} />
                <Route  path="blogs" element={<Blogs />} />
                <Route  path="blogs/:id" element={<BlogDetails />} />
              </Routes>
               
      </Layout>
    </Layout>
  );
};

export default App;