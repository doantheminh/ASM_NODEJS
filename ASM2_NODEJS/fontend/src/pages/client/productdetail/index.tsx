import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getOne } from "../../../api/product";

import { ProductInfo } from "./component/product-info";
import { Specifications } from "./component/specifications";
import { Description } from "./component/description";

import { IProduct } from "../../../interface/model";

export const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>([])

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getOne(id);
            setProduct(data);
        };
        getProduct();
    }, []);

    return (
        <main className="w-full flex justify-center">
            <div className="w-[1500px]">
                <div className="border-b mt-3 h-[50px] flex items-center">
                    <h1 className="font-normal text-[18px] leading-[29px] ml-[150px]">{product.name}</h1>
                </div>

                <div className="mt-10 flex justify-center items-center">
                    <div className="w-[1200px]">

                        <ProductInfo data={product} />

                        <div className="mt-10">
                            <Specifications data={product} />

                            <Description data={product} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}