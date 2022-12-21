import {Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, LineChartOutlined } from "@ant-design/icons";
import Link from "next/link";

function Signin()
{
    const onFinish = (values) => {
        console.log("Values => ", values);
    } ;

return(
    <Row>
        <Col span={8} offset={8}>
            <h1 style={{ paddingTop: "100px" }}>Sign In</h1>  
        

        <Form
            name="normal_login"
            className="login-form"
            initialValues={{  remember: true }}
            onFinish={onFinish}
        >
            <Form.Item name="emial" rules={[{ required: true, type: "email", message: "Please input your Email"}]}>
                <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Emial"/>
            </Form.Item>
            
            <Form.Item name="password" rules={[{ required: true, message: "Please input your Password"}]}>
                <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="Password"/>
            </Form.Item>
            
            <Link href="/forgot-password">Forgot Password</Link>
            <br /><br />
            <Form.Item>

                <Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                </Button>

                <br /><br />

                Or <Link href="/signup">Register now!</Link>
            </Form.Item>
        </Form>

        </Col>
    </Row>
);
    
}

export default Signin;