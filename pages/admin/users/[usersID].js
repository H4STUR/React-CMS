import { Layout } from "antd";
import { useRouter } from "next/router";

import AdminLayout from "../../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

function UsersDetails()
{
    const router = useRouter();
    const usersID = router.query.usersID;


    return(
        <AdminLayout>
            <h1> Edit User {usersID}</h1>
        </AdminLayout>
    );
}

export default UsersDetails;