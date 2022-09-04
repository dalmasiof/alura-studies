import React from "react";

type Props = {};

const List = (props: Props) => {
  const list = [
    {
      task: "ReactS",
      time: "02:00:00",
    },
    {
      task: "JS",
      time: "01:00:00",
    },
    {
        task: "Typescript",
        time: "00:45:00",
      }
  ];
  return (
    <aside>
      <h2>Daily Studies</h2>
      <ul>
        {list.map((item,i) => (
            <li key={i}>
                <h3>{item.task}</h3>
                <span>{item.time}</span>
            </li>
        ) )}
      </ul>
    </aside>
  );
};

export default List;
