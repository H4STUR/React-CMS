import React from 'react';
import { Layout, Space, Table, Tag, Button } from 'antd';
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
// import PropTypes from 'prop-types';



// import InfiniteScroll from 'react-infinite-scroll-component';

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
        axios.get(process.env.SERVER).then(function(response)
        {
           console.log(response.data);
           setUsers(response.data);
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
      
      const data = users.map((user) =>
        ({
            id: user.id,
            name: user.name,
            email: user.email,
            privilege: user.privilege,
        }));


    return(
    <AdminLayout>
        {/* <div>
            <h1> All Users</h1>
        <table >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody >
                {users.map((user, key) =>
                <tr key={key} >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        {
                            {
                                "1": "Admin",
                                "2": "Moderator",
                                "3": "Booster",
                                "4": "VIP Booster",
                                "5": "User",
                            }[user.privilege]
                        }
                    </td>
                    <td>
                        <Button href={`user/${user.id}/edit`}>EDIT</Button>
                        <Button>DELETE</Button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
        </div> */}

        <Table columns={columns} dataSource={data} className="dark-theme-table" />


        {/* <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ "marginTop": "200px"}}/> */}
    </AdminLayout>
    );
    
}

export default Users;