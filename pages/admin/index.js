import { Layout } from "antd";

import AdminLayout from "../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

function Admin()
{
    return(
    <AdminLayout>
        <h1> Oi it's dashboard innit</h1>
    </AdminLayout>
    );
    
}

export default Admin;