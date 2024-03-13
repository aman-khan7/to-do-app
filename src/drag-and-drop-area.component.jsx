import { Category } from "./category.component";
import { Item } from "./item";

export const DragAndDropArea = (props) => {
  const { firstList, secondList, thirdList, fourthList } = props;

  return (
    <div className="grid grid-cols-4 gap-8 px-8 pb-8 grow">
      <div className=" bg-red-500 border border-red-950 py-4 px-4 rounded-lg shadow-2xl ">
        <div className="flex flex-col gap-2">
          <strong className="text-white bg-red-700 py-2 px-4 flex justify-center rounded-md">
            URGENT AND IMPORTANT
          </strong>
          <ul className="flex flex-col gap-2">
            {firstList.map((item) => {
              return <Item item={item} key={item} />;
            })}
          </ul>
        </div>
      </div>
      <Category
        bgColor="bg-red-500"
        borderColor="border-red-950"
        textBgColor="bg-red-700"
        title="URGENT AND IMPORTANT"
        id="1"
      />
      <div className="  bg-orange-500 border border-orange-950 py-4 px-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-2">
          <strong className="text-white bg-orange-700 py-2 px-4 flex justify-center rounded-md">
            URGENT
          </strong>
          <ul className="flex flex-col gap-2">
            {secondList.map((item) => {
              return <Item item={item} key={item} />;
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
              return <Item item={item} key={item} />;
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
              return <Item item={item} key={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
