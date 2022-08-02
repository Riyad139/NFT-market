export default function PicSection(props) {
  return (
    <div className="w-20 h-20 text-center space-y-1 drop-shadow-2xl">
      <img
        className="w-20 rounded-xl h-16 object-cover"
        src="/FloatingImage/img1.jpg"
        alt=""
      />
      <p className="text-xs text-[#7780a1]">
        {(Math.random() * 5).toPrecision(3)}ETH
      </p>
    </div>
  );
}
