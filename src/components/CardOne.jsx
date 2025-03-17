import { Icon } from "@iconify/react";

export default function CardOne({ title, desc, image }) {
  return (
    <div className="w-[30%] bg-[#2F2F2F] rounded-[30px] p-6 flex flex-col items-center gap-6">
      <div className="flex justify-between items-center w-full">
        <p className="text-[#B8E900] text-[24px]">{title}</p>
        <div className="w-[50px] h-[50px] bg-[#454545] rounded-[50%] flex items-center justify-center">
          <Icon
            icon="line-md:arrow-up"
            width="24"
            height="24"
            color="white"
            className="rotate-45"
          />
        </div>
      </div>
      <p className="text-[14px] w-[80%] text-center">{desc}</p>
      <img src={image} alt="no-img" className="rounded-[30px]" />
    </div>
  );
}
