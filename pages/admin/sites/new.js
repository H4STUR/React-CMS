import { Layout } from "antd";

import AdminLayout from "../../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

function NewSite()
{
    return(
    <AdminLayout>
        <h1> Create new site</h1>
    </AdminLayout>
    );
    
}

export default NewSite;