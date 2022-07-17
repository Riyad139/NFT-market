export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="border-2 text-sm text-gray-500 font-medium  py-2 px-4 border-gray-500 rounded-lg"
    >
      {props.name}
    </button>
  );
}
