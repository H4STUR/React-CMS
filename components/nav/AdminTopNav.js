import {useState} from "react";
import ToggleTheme from "../ToggleTheme"
import {Menu} from "antd";
import Link from "next/link";
import { MailOutlined, LogoutOutlined, LoginOutlined, UserAddOutlined} from "@ant-design/icons";
import React from "react";

const {SubMenu} = Menu;

const AdminTopNav = () =>
{
    const [current, setCurrent] = useState("mail");

    const handleClick = (e) => 
    {
        console.log("click", e);
        setCurrent(e.key);
    };



    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="dashboard" >
                <Link href="/admin">Admin Dashboard</Link>
            </Menu.Item>

            <Menu.Item key="signup" icon={<UserAddOutlined />}>
                <Link href="/signup">Signup</Link>
            </Menu.Item>
            <Menu.Item key="login" icon={<LoginOutlined />}>
                <Link href="/signin">Signin</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                <Link href="">Logout</Link>
            </Menu.Item>

            {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu> */}
            <Menu.Item key="toggletheme" style={{ marginLeft: "auto" }}>
                <ToggleTheme />
            </Menu.Item>
            
        </Menu>
    );
};

export default AdminTopNav;