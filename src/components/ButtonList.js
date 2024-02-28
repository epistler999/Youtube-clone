import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming", "Songs","Live","Soccer","Cricket","Cooking","Cricket","Valentines","Cricket","Cooking","Cricket"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item,id) => (<Button key={id} name={item}/>))}
    </div>
  );
};

export default ButtonList;
