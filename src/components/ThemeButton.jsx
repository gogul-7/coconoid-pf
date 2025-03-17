export default function ThemeButton({ name }) {
  return (
    <button className="border-2 border-[#B8E900] text-black rounded-2xl w-[200px] py-2 text-[18px] hover:cursor-pointer hover:text-white hover:bg-[#B8E900] hover:shadow-lg transition">
      {name}
    </button>
  );
}
