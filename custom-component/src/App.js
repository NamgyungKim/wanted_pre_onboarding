import React, { useState } from "react";
import ComponentWrap from "./component/common/ComponentWrap";
import {
  Toggle,
  Modal,
  Tab,
  Tag,
  AutoComplete,
  ClickToEdit,
} from "./component/main";
import { Tab1, Tab2, Tab3 } from "./component/tabContents/TabContents";

const tabMenu = [
  { name: "Tab1", con: <Tab1 /> },
  { name: "Tab2", con: <Tab2 /> },
  { name: "Tab3", con: <Tab3 /> },
];

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [tags, setTags] = useState(["CodeState", "codding"]);
  const [autoComplete, setAutoComplete] = useState([
    // 원래 빈배열로 두어야하지만 test케이스로 담아두었습니다.
    "abc",
    "apple",
    "ask",
    "admit",
    "acess",
    "test case",
  ]);
  const [form, setForm] = useState([
    { label: "이름", text: "김남경", chainge: false },
    { label: "나이", text: 26, chainge: false },
  ]);

  return (
    <div>
      {/* Toggle */}
      <ComponentWrap
        title="Toggle"
        contents={<Toggle toggle={toggle} setToggle={setToggle} />}
      />

      {/* Modal */}
      <ComponentWrap
        title="Modal"
        contents={<Modal modalText={"HELLOW CODESTATES"} />}
      />

      {/* Tab */}
      <ComponentWrap title="Tab" contents={<Tab tabMenu={tabMenu} />} />

      {/* Tag */}
      <ComponentWrap
        title="Tag"
        contents={<Tag tags={tags} setTags={setTags} />}
      />

      {/* AutoComplete */}
      <ComponentWrap
        title="AutoComplete"
        contents={
          <AutoComplete
            autoComplete={autoComplete}
            setAutoComplete={setAutoComplete}
          />
        }
      />

      {/* ClickToEdit */}
      <ComponentWrap
        title="ClickToEdit"
        contents={<ClickToEdit form={form} setForm={setForm} />}
      />
    </div>
  );
};

export default App;
