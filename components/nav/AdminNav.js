import { Menu, Button, Layout } from "antd";
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import {
    DashboardOutlined,
    UserOutlined,
    DesktopOutlined,
    RollbackOutlined,
    ShoppingCartOutlined,
    PictureOutlined,
    PoundOutlined,
    SettingOutlined,
    LineChartOutlined,
    AndroidOutlined,

} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;
//hooks

const AdminNav = () =>
{
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('');

    const windowWidth = useWindowWidth();

    useEffect(() => {
            setCollapsed(windowWidth < 800);
    }, [windowWidth < 800]);

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    const activeName = (name) => `${current === name && "active"}`;

    return (
        
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>

        <Menu defaultOpenKeys={["sub1", "sub2"]} mode="inline" theme="dark" inlineCollapsed={collapsed}>

            <Menu.Item key="1" icon={<DashboardOutlined />}> <Link href="/admin" className={activeName("/admin")}> Dashboard </Link></Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}> <Link href="/admin/users/users" className={activeName("/admin/users/users")}>Users</Link></Menu.Item>

            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Sites">
                <Menu.Item key="3"><Link href="/admin/sites/sites" className={activeName("/admin/sites/sites")}>All Sites</Link></Menu.Item>
                <Menu.Item key="4"><Link href="/admin/sites/new" className={activeName("/admin/sites/new")}>Add Site</Link></Menu.Item>
                <Menu.Item key="5"><Link href="/admin/posts/new" className={activeName("/admin/posts/new")}>Add Post</Link></Menu.Item>
            </SubMenu>

            <Menu.Item key="6" icon={<AndroidOutlined />}> <Link href="/admin/users/boosters" className={activeName("/admin/users/boosters")}>Boosters</Link></Menu.Item>
            <Menu.Item key="7" icon={<PoundOutlined />}> <Link href="/admin/sites/orders" className={activeName("/admin/sites/orders")}>Orders</Link></Menu.Item>
            <Menu.Item key="8" icon={<LineChartOutlined />}> <Link href="/admin/sites/statistics" className={activeName("/admin/sites/statistics")}>Statistics</Link></Menu.Item>

            <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Store">
                <Menu.Item key="9"><Link href="/admin/store/products" className={activeName("/admin/store/products")}>All Products</Link></Menu.Item>
                <Menu.Item key="10"><Link href="/admin/store/new" className={activeName("/admin/store/new")}>Add Product</Link></Menu.Item>
            </SubMenu>

            <Menu.Item key="11" icon={<PictureOutlined />}> <Link href="/admin/media/showmedia" className={activeName("/admin/media/showmedia")}>Media</Link></Menu.Item>
            <Menu.Item key="12" icon={<SettingOutlined/>}> <Link href="/admin/sites/settings" className={activeName("/admin/sites/settings")}>Settings</Link></Menu.Item>
            <Menu.Item key="13" icon={<RollbackOutlined />}> <Link href="/">Home Page</Link></Menu.Item>

        </Menu>
            
        </Sider>
    );
};

export default AdminNav;