import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Content } from 'antd/es/layout/layout';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from "react-router-dom";

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  title?: string;
  body?: string;
};
interface DataType { 
    title?: string;
    body?: string;
    userId?:number;
    id?:number;
}
const BlogDetails: React.FC = () =>{
    const params = useParams();
    const apiUrl = `${process.env.REACT_APP_API_URL}/posts/${params.id}`;
    const postApiUrl = `${process.env.REACT_APP_API_URL}/posts/${params.id}`;
    const [data, setData] = useState<DataType>({});
    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();
    const [responseMsg, setResponseMsg] = useState<string>();
    const [list, setList] = useState<DataType>({});
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
      
            var data = {
                title: title,
                body: body,
                id: params.id,
            }
         await  fetch(postApiUrl,
            {
              method: 'PUT',             
            }
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              setResponseMsg('form has been submitted successfully!');
            });
        
    }
    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.title);
          setData(res);
          setList(res);
        });
    }, []);
return(


    <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      minHeight: 280,
     
    }}
  >
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Title"
      name="title"
      rules={[{ required: true, message: 'Title!' }]}
      
    >
      {data.title  && <Input  defaultValue={data.title} onChange={(e) => setTitle(e.target.value)}  /> }
    </Form.Item>

    <Form.Item<FieldType>
      label="Body"
      name="body"
      rules={[{ required: true, message: 'Body' }]}
    >
      {data.body  && <Input  defaultValue={data.body} onChange={(e) => setBody(e.target.value)}/> }
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" onClick={handleSubmit}>
        Submit 
      </Button>
    </Form.Item>
    {responseMsg}
  </Form>
  </Content>
);
}

export default BlogDetails;