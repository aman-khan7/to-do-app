import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { DragAndDropArea } from "./drag-and-drop-area.component";

function App() {
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [thirdList, setThirdList] = useState([]);
  const [fourthList, setFourthList] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const fourthList = localStorage.getItem("fourthList")
      ? JSON.parse(localStorage.getItem("fourthList"))
      : [];
    setFourthList(fourthList);
  }, []);
  return (
    <div className="min-h-screen min-w-full bg-center bg-no-center bg-cover bg-gradient-to-b from-yellow-200 ">
      <div className="flex flex-col gap-6 h-screen">
        <div className="flex justify-center pt-16">
          <input
            className="px-4 py-4 border-black rounded-sm w-[60%]"
            placeholder="enter something "
            onChange={(e) => {
              setText(e.target.value || "");
            }}
            value={text}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.keyCode === 13) {
                const list = [...fourthList, text];
                setFourthList(list);
                const fourthListString = JSON.stringify(list);
                localStorage.setItem("fourthList", fourthListString);
                setText("");
              }
            }}
          />
        </div>
        <DndContext
          onDragEnd={(o) => {
            const { active, over } = o;
            const itemId = active.id;
            const currentContainterId = active.data.current.container;
            const dropContainerId = over.id;
            console.log({ itemId, currentContainterId, dropContainerId });

            if (currentContainterId === "1") {
              const newList = firstList.filter((a) => {
                return a !== itemId;
              });
              setFirstList(newList);
            } else if (currentContainterId === "2") {
              const newList = secondList.filter((a) => {
                return a !== itemId;
              });
              setSecondList(newList);
            } else if (currentContainterId === "3") {
              const newList = thirdList.filter((a) => {
                return a !== itemId;
              });
              setThirdList(newList);
            } else if (currentContainterId === "4") {
              const newList = fourthList.filter((a) => {
                return a !== itemId;
              });
              setFourthList(newList);
            }
            if (dropContainerId === "1") {
              const newList = [...firstList, itemId];
              setFirstList(newList);
            } else if (dropContainerId === "2") {
              const newList = [...secondList, itemId];

              setSecondList(newList);
            } else if (dropContainerId === "3") {
              const newList = [...thirdList, itemId];
              setThirdList(newList);
            } else if (dropContainerId === "4") {
              const newList = [...fourthList, itemId];
              setFourthList(newList);
            }
          }}
        >
          <DragAndDropArea
            firstList={firstList}
            secondList={secondList}
            thirdList={thirdList}
            fourthList={fourthList}
          />
        </DndContext>
      </div>
    </div>
  );
}

export default App;
