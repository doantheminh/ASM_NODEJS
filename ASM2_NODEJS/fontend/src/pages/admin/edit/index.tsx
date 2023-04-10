import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { editProduct, getOne } from '../../../api/product'
import { InputNumber, Input, Image, Button } from 'antd';
const { TextArea } = Input;

export const EditPage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getOne(id);
            setProduct(data);
        };
        getProduct();
    }, []);

    const onHandleSubmit = (data: {}[], id: string) => {
        editProduct(data, id)
    }

    return (
        <div>
            <div className='flex justify-center items-center border-b-[2px]'>
                <span className='text-[25px] font-bold mb-5'>Chỉnh sửa sản phẩm</span>
            </div>

            <div className='flex'>
                <div className='flex items-center mt-3'>
                    <span className='mr-1.5 font-normal text-[14px]'>Tên sản phẩm</span>
                    <Input className='w-[350px]' placeholder="Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                </div>

                <div className='flex items-center mt-3 ml-3'>
                    <span className='mr-1.5 font-normal text-[14px]'>Thương hiệu</span>
                    <Input placeholder="Brand" value={product.brand?.name} />
                </div>

                <div className='flex items-center ml-3'>
                    <div className='flex items-center mt-3'>
                        <span className='mr-1.5 font-normal text-[14px]'>Giá bán</span>
                        <InputNumber className='w-auto' placeholder="Price" value={product.price} onChange={(value) => setProduct({ ...product, price: value })} />
                    </div>

                    {/* <div className='flex items-center mt-3'>
                        <span className='ml-1.5  mr-1.5 font-normal text-[14px]'>Giá gốc</span>
                        <InputNumber className='w-auto' placeholder="Price" value={product.original_price} onChange={(value) => setProduct({ ...product, original_price: value })} />
                    </div> */}
                </div>
            </div>

            <div className='flex justify-between mt-5'>
                {/* <div className='gird'>
                    <span className='mr-5 font-normal text-[14px]'>Mô tả ngắn</span>
                    <TextArea className='mt-2' rows={7} value={product.short_description} />
                </div> */}

                <div className='mt-1'>
                    <Image width={200} src={product.images?.[0]?.base_url} />
                </div>
            </div>

            <div className='mt-5'>
                <div className='mt-3'>
                    <span className='mr-5 font-normal text-[14px]'>Mô tả</span>
                    <TextArea className='mt-2' rows={5} value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                </div>
            </div>

            <div className='flex justify-center items-center mt-5'>
                <Button type='primary' ghost onClick={() => onHandleSubmit(product, id)}>Sửa</Button>
            </div>
        </div>
    )
}