import { IProduct } from "../../../../interface/model"

type Props = {
    data: IProduct,
}

export const ProductInfo = ({ data }: Props) => {
    return (
        <div className="flex">
            <div>
                <div>
                    <img src={data.images?.[0].base_url} className="w-[500px] h-[300px]" alt="product" />
                </div>

                <div className="mt-5 flex">
                    <div className="border rounded-[10px] w-[60px] h-[60px] border-[#D1D5DB] grid grid-cols-1 place-items-center ml-1">
                        <i className="fa-solid fa-star"></i>
                        <p className="font-normal text-[10px] leading-[10px] text-[#666666] text-center">Tính năng nổi bật</p>
                    </div>

                    {data.images?.slice(0, 4).map((image, index) => (
                        <div key={index} className="w-[60px] h-[60px] border-[#D1D5DB] flex justify-center items-center ml-1">
                            <img key={index} className="border rounded-[10px]" src={image.base_url} alt="mini-product" />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="h-[300px]">
                    <div className="flex font-normal leading-[22px]">
                        <span className="text-[24px] text-[#D70018]">{data.price} ₫</span>
                        <p className="text-[14px] text-[#707070] ml-3">{data.original_price
                        } ₫</p>
                    </div>

                    <p className="mt-5 font-normal text-[15px] leading-[22px] text-[#444444]"> Mô tả ngắn: {data.short_description}</p>
                </div>

                <div className="ml-32 flex">
                    <button className="bg-[#FF3945] rounded-[4px] w-[233px] h-[48px]">
                        <p className="text-white font-normal text-[14px] leading-[24px] mt-3">Mua ngay</p>
                    </button>

                    <button className="ml-3 flex">
                        <div className="border w-[48px] h-[48px] rounded-[4px] border-[#D70018] flex justify-center items-center">
                            <i className="fa-sharp fa-solid fa-cart-shopping "></i>
                        </div>

                        <p className="ml-2 capitalize text-center text-[#000000] leading-[24px] text-[14px] font-normal w-[68px] h-[48px]">Thêm vào giỏ hàng</p>
                    </button>
                </div>
            </div>
        </div>
    )
}