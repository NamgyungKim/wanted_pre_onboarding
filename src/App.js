import React from "react";
import AutoComplete from "./component/AutoComplete";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

const App = () => {
  return (
    <div>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
    </div>
  );
};

export default App;
