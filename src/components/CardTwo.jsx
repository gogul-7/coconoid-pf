import { Icon } from "@iconify/react";

export default function CardTwo({ title, desc, image }) {
  return (
    <div className="w-[30%] bg-[#D5D5D5] rounded-[30px] rounded-bl-[200px] p-6 flex flex-col items-center gap-6 relative">
      <div className="flex justify-between items-center w-full">
        <p className="text-[black] text-[24px]">{title}</p>
      </div>
      <p className="text-[14px] w-[80%] text-center text-[#646464]">{desc}</p>
      <img
        src={image}
        alt="no-img"
        className="rounded-[30px] rounded-bl-[200px]"
      />
      <div className="w-[150px] h-[150px] bg-[#B8E900] rounded-[50%] flex items-center justify-center absolute bottom-[10px] left-[10px]">
        <Icon
          icon="line-md:arrow-up"
          width="100"
          style="color: #fff"
          className="rotate-45"
        />
      </div>
    </div>
  );
}
