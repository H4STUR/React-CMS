import { Layout } from "antd";
import { Empty } from 'antd';


import AdminLayout from "../../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

function Boosters()
{
    return(
    <AdminLayout>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ "marginTop": "200px"}}/>
    </AdminLayout>
    );
    
}

export default Boosters;

