import React from 'react';

import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Divider, Typography, message, Space } from 'antd';

import { loginUser } from '../../../api/user'

export const LoginPage = () => {
    const onFinish = async (values) => {
        try {
            const checkLogin = await loginUser(values);
            if (checkLogin) {
                message.success('Đăng nhập thành công!');
                setTimeout(() => {
                    window.location.href = "/"
                }, 1000);
            } else {
                throw new Error('Đăng nhập thất bại!');
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <main className='flex justify-center items-center h-screen bg-[#f9fafb]'>
            <Form name="normal_login" className="login-form w-[500px] p-5 bg-[#ffffff] rounded-lg shadow-2xl" onFinish={onFinish} autoComplete="off">
                <Typography.Title className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center items-center">
                    Đăng nhập
                </Typography.Title>

                <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }, { type: 'email', message: 'Vui lòng nhập địa chỉ email hợp lệ!' }]} >
                    <Input prefix={<UserOutlined className="site-form-item-icon p-2" />} placeholder="Email" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]} >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon p-2" />} type="password" placeholder="Mật khẩu" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot font-normal text-blue-400 hover:text-red-500" href="">
                        Quên mật khẩu
                    </a>
                </Form.Item>

                <Form.Item className='flex justify-center'>
                    <Button type="primary" ghost htmlType="submit" className="login-form-button" block> Đăng nhập </Button>
                </Form.Item>

                <Divider>Hoặc</Divider>

                <div className="flex justify-center items-center">
                    <a href='#'><i className="fa-brands fa-facebook text-[33px] text-blue-600"></i></a>

                    <a href='#'><img src="http://localhost:5173/image/google.png" className="w-[33px] h-[33px] ml-3" alt="google" /></a>
                </div>

                <span className='flex justify-center mt-5'>
                    Bạn chưa có tài khoản?<a className='ml-1 font-normal text-blue-400 hover:text-red-500' href="/register">Đăng ký ngay!</a>
                </span>
            </Form>
        </main>
    )
}