export default function ButtonFill(props) {
  return (
    <button className="py-[10px] px-4 text-sm bg-gradient-to-r from-[#514cff] via-[#2a27c9] to-[#2a27c9] text-white rounded-lg bg-[#2f2bc8]">
      {props.name}
    </button>
  );
}
