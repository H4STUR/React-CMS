import { Layout } from "antd";

import AdminLayout from "../../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

function Users()
{
    return(
    <AdminLayout>
        <h1> All Users</h1>
    </AdminLayout>
    );
    
}

export default Users;