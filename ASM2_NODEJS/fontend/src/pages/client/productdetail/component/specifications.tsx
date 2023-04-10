import { IProduct } from "../../../../interface/model";

type Props = {
    data: IProduct,
}

export const Specifications = ({ data }: Props) => {
    return (
        <div className="bg-[#FFF]">
            <div className="pt-2">
                <h2 className="text-center text-[#D70018] font-normal text-[18px] leading-[22px]">ĐẶC ĐIỂM NỔI BẬT</h2>
            </div>

            <div className="text-[#444444] font-normal text-[14px] leading-[22px] p-2">
                <div className="flex items-center w-[auto] h-[auto] rounded-[4px] mt-3">
                    <div className="text-[13px] leading-[21px] font-normal text-[#4F4F4F] bg-[#EFEFEF] w-[250px]">
                        {data?.specifications?.[0]?.attributes.map(function (item) {
                            return (
                                <div>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>

                    <div className="text-[13px] leading-[21px] font-normal text-[#242424] ml-3">
                        {data?.specifications?.[0]?.attributes.map(function (item) {
                            return (<div>
                                {item.value}
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}