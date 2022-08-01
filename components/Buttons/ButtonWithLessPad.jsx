import cl from "classnames";

export default function ButtonWithLessPad(props) {
  return (
    <button
      onClick={props.onClick}
      className={cl(
        "border-2 text-xs  font-medium  py-1 px-1  rounded-lg",
        props.isPhoto
          ? "text-gray-500 border-gray-500"
          : "text-gray-400 border-gray-300"
      )}
    >
      {props.name}
    </button>
  );
}
