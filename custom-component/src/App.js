import React from "react";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import ComponentWrap from "./component/common/ComponentWrap";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

const App = () => {
  return (
    <div>
      <ComponentWrap title="Toggle" contents={<Toggle />} />
      <ComponentWrap title="Modal" contents={<Modal />} />
      <ComponentWrap title="Tab" contents={<Tab />} />
      <ComponentWrap title="Tag" contents={<Tag />} />
      <ComponentWrap title="AutoComplete" contents={<AutoComplete />} />
      <ComponentWrap title="ClickToEdit" contents={<ClickToEdit />} />
    </div>
  );
};

export default App;
