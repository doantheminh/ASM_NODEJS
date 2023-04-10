import { IProduct } from "../../../../interface/model"

type Props = {
    data: IProduct,
}

export const Description = ({ data }: Props) => {
    return (
        <div className="font-normal mt-5">
            <p className="text-[15px] leading-[22px] text-[#444444]">
                {data.short_description}
            </p>

            <div className="flex justify-center m-5">
                <button className="text-center border w-[335px] h-[24px] rounded-[10px] shadow-sm">
                    <p className="font-normal text-[14px] leading-[22px] text-[#212529]">Xem thêm</p>
                </button>
            </div>
        </div>
    )
}