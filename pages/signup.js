import {Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, LineChartOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";

import {useState} from "react";


function Signup()
{

    const onFinish = async (values) => {
    console.log("Values => ", values);

    axios.get(process.env.SERVER+"auth.php", values,
        {
            withCredentials: true,
        }).then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });

    // axios.post(process.env.SERVER, values,
    //         {
    //             withCredentials: true,
    //         }).then(response => {
    //             console.log(response.data);
    //           })
    //           .catch(error => {
    //             console.log(error);
    //           });
    };


return(

    <Row>
        <Col span={8} offset={8}>
            <h1 style={{ paddingTop: "100px" }}>Sign Up</h1>  
        

        <Form
            name="normal_login"
            className="login-form"
            initialValues={{  remember: true }}
            onFinish={onFinish}
        >
            <Form.Item name="username" rules={[{ required: true, message: "Please input your Username"}]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"></Input>
            </Form.Item>

            <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please input your Email"}]}>
                <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Emial"/>
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: "Please input your Password"}]}>
                <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="Password"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                </Button>
                <br /><br />
                Or <Link href="/signin">Login now!</Link>
            </Form.Item>
        </Form>


        </Col>
    </Row>
);
    
}

export default Signup;