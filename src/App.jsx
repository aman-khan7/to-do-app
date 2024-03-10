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
        <DndContext>
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
