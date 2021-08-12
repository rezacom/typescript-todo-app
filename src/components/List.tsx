import React from "react";
import { TState as Props } from "../App";

interface IProps {
  todos: Props["todos"];
}

const List: React.FC<IProps> = ({ todos }) => {
  const renderItem = (): JSX.Element[] => {
    return todos.map((item) => (
      <li className="item">
        <div className="item__pic">
          <img src={item.url} alt="" />
        </div>
        <div className="item__detail">
          <h3>{item.name}</h3>
          <span>{item.age} years old</span>
        </div>
        <div className="item__desc">
          <p>{item.note}</p>
        </div>
      </li>
    ));
  };
  return <ul className="list">{renderItem()}</ul>;
};

export default List;
