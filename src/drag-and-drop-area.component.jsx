import { Category } from "./category.component";
import { Item } from "./item";

export const DragAndDropArea = (props) => {
  const { firstList, secondList, thirdList, fourthList } = props;

  return (
    <div className="grid grid-cols-4 gap-8 px-8 pb-8 grow">
      <Category
        bgColor="bg-red-500"
        borderColor="border-red-950"
        textBgColor="bg-red-700"
        title="URGENT AND IMPORTANT"
        id="1"
      >
        {firstList.map((item) => {
          return <Item item={item} key={item} container="1" />;
        })}
      </Category>
      <Category
        bgColor="bg-orange-500"
        borderColor="border-orange-950"
        textBgColor="bg-orange-700"
        title="URGENT"
        id="2"
      >
        {secondList.map((item) => {
          return <Item item={item} key={item} container="2" />;
        })}
      </Category>
      <Category
        bgColor="bg-yellow-500"
        borderColor="border-yellow-950"
        textBgColor="bg-yellow-700"
        title="IMPORTANT"
        id="3"
      >
        {thirdList.map((item) => {
          return <Item item={item} key={item} container="3" />;
        })}
      </Category>
      <Category
        bgColor="bg-green-500"
        borderColor="border-green-950"
        textBgColor="bg-green-700"
        title="NOT URGENT AND NOT IMPORTANT"
        id="4"
      >
        {fourthList.map((item) => {
          return <Item item={item} key={item} container="4" />;
        })}
      </Category>
    </div>
  );
};
