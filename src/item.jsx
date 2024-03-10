import { useDraggable } from "@dnd-kit/core";

export const Item = (props) => {
  const { item } = props;
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: item,
  });
  return (
    <li ref={setNodeRef}>
      <div
        {...listeners}
        {...attributes}
        className="border border-red-950 hover:bg-white cursor-pointer py-2 px-2 rounded-lg"
      >
        {item}
      </div>
    </li>
  );
};
