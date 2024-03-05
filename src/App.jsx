import { useEffect, useState } from "react";

function App() {
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [thirdList, setThirdList] = useState([]);
  const [fourthList, setFourthList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("mount");
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
                setFourthList([...fourthList, text]);
                setText("");
              }
            }}
          />
        </div>
        <div className="grid grid-cols-4 gap-8 px-8 pb-8 grow">
          <div className=" bg-red-500 border border-red-950 py-4 px-4 rounded-lg shadow-2xl ">
            <div className="flex flex-col gap-2">
              <strong className="text-white bg-red-700 py-2 px-4 flex justify-center rounded-md">
                URGENT AND IMPORTANT
              </strong>
              <ul className="flex flex-col gap-2">
                {firstList.map((item) => {
                  return (
                    <li
                      key={item}
                      className="border border-red-950 hover:bg-white cursor-pointer py-2 px-2 rounded-lg"
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="  bg-orange-500 border border-orange-950 py-4 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              <strong className="text-white bg-orange-700 py-2 px-4 flex justify-center rounded-md">
                URGENT
              </strong>
              <ul className="flex flex-col gap-2">
                {secondList.map((item) => {
                  return (
                    <li
                      key={item}
                      className="border border-orange-950 hover:bg-white cursor-pointer py-2 px-2 rounded-lg"
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="  bg-yellow-500 border border-yellow-950 py-4 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              <strong className="text-white bg-yellow-700 py-2 px-4 flex justify-center rounded-md">
                IMPORTANT
              </strong>
              <ul className="flex flex-col gap-2">
                {thirdList.map((item) => {
                  return (
                    <li
                      key={item}
                      className="border border-yellow-950 hover:bg-white cursor-pointer py-2 px-2 rounded-lg"
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="  bg-green-500 border border-green-950 py-4 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              <strong className="text-white bg-green-700 py-2 px-4 flex justify-center rounded-md">
                NOT URGENT NOT IMPORTANT
              </strong>
              <ul className="flex flex-col gap-2">
                {fourthList.map((item) => {
                  return (
                    <li
                      key={item}
                      className="border border-green-950 hover:bg-white cursor-pointer py-2 px-2 rounded-lg"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
