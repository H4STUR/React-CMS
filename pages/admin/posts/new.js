import { Layout } from "antd";

import AdminLayout from "../../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

function NewPost()
{
    return(
    <AdminLayout>
        <h1> Create new post</h1>
    </AdminLayout>
    );
    
}

export default NewPost;