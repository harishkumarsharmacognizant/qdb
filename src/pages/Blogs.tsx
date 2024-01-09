import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';

interface DataType { 
    title?: string;
    body?: string;
    userId?:number;
    id?:number;
}

const apiUrl = `${process.env.REACT_APP_API_URL}/users/1/posts`;
const Blogs: React.FC = () => {
    
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        setList(res);
      });
  }, []);

  
  return (
    <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      minHeight: 280,
     
    }}
  >
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<Link to={`/blogs/${item.id}`}>Edit</Link>, <a key="list-loadmore-more">delete</a>]}
        >
          <Skeleton avatar title={false} loading={false}  active>
            <List.Item.Meta              
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.body}
            />
          </Skeleton>
        </List.Item>
      )}
    />
    </Content>
  );
};

export default Blogs;