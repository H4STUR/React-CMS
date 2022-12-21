import { Layout } from "antd";

import AdminLayout from "../../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

function NewUser()
{
    return(
    <AdminLayout>
        <h1> Add User</h1>
    </AdminLayout>
    );
    
}

export default NewUser;