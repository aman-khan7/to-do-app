import { useDraggable } from "@dnd-kit/core";

export const Item = (props) => {
  const { item, container } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item,
    data: {
      container,
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <li ref={setNodeRef} style={style}>
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
