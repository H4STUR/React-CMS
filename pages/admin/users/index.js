import React from 'react';
import { Layout, Space, Table, Tag, Button } from 'antd';
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

import AdminLayout from "../../../components/layout/AdminLayout";

const { Content, Sider } = Layout;
const PropTypes = require('prop-types');


function Users()
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() 
    {
        axios.get(process.env.SERVER).then(function(response) {
            setUsers(response.data);
            console.log(response.data);
        }).catch(function(error) {
            console.error(error);
        });
    }

    //DATA INSIDE TABLE

      const Roles = [ 
        {id: 1, role: "Admin", color: "green"},
        {id: 2, role: "Moderator", color: "green"},
        {id: 3, role: "Booster", color: "red"},
        {id: 4, role: "VIP Booster", color: "gold"},
        {id: 5, role: "User", color: "gray"},
        ]

      const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Role',
          key: 'privilege',
          dataIndex: 'privilege',
          render: (_, { privilege }) => (
            <>
              {Roles.map((role) => {
                if(role.id == privilege)
                return (
                  <Tag color={role.color} key={role.id}>
                    {role.role}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Edit</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
      const data = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        privilege: user.privilege,
    }));


    return(
    <AdminLayout>

        <Table columns={columns} dataSource={data} className="dark-theme-table" />


    </AdminLayout>
    );
    
}

export default Users;