import { useDroppable } from "@dnd-kit/core";
import { Item } from "./item";

export const Category = (props) => {
  const { bgColor, borderColor, textBgColor, title, id } = props;
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      className={`${bgColor} border  ${borderColor} py-4 px-4 rounded-lg shadow-2xl`}
    >
      <div className="flex flex-col gap-2">
        <strong
          className={`text-white ${textBgColor}  py-2 px-4 flex justify-center rounded-md`}
        >
          {title}
        </strong>
        <ul className="flex flex-col gap-2">{props.children}</ul>
      </div>
    </div>
  );
};
