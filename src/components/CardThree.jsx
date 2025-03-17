export default function CardThree({ image }) {
  return (
    <div className="w-[30%] bg-[#B8E900] rounded-[30px] p-10">
      <img
        src={image}
        alt="no-img"
        className="rounded-[30px] w-[full] aspect-square"
      />
    </div>
  );
}
