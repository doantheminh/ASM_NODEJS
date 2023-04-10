import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getUser } from '../../../api/user';

const columns = [
    {
        key: 'name',
        title: 'Tên',
        dataIndex: 'name',
        align: 'center',
        width: '10%'
    },
    {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        align: 'center',
        width: '10%'
    },
    {
        key: 'password',
        title: 'Mật khẩu',
        dataIndex: 'password',
        align: 'center',
        width: '10%',
        render: (text: string) => '********'
    },
    {
        key: 'role',
        title: 'Vai trò',
        dataIndex: 'role',
        align: 'center',
        width: '15%',
    }
];

export const AdminUser: React.FC = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await getUser();
            setUsers(
                data.map((item) => {
                    return {
                        key: item._id,
                        name: item.name,
                        email: item.email,
                        password: item.password,
                        role: item.role
                    }
                }))
        }

        fetchProduct()
    }, [])

    return (
        <Table columns={columns} dataSource={users} pagination={{ pageSize: 3 }} />
    )
}