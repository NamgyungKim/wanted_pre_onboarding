# 🚩원티드 프리온보딩 코스 선발과제

![ckazubyqigyqb515__1080_790](https://user-images.githubusercontent.com/87519250/152908179-4fde3d07-ecbf-4163-a2ec-95e7f2786a9f.jpg)
과제: https://codestates.notion.site/5f83f7a007664f1abcf0cdbcbbbbd521

## 🚀배포

https://wanted-preonbording.netlify.app/

<br />
<br />

## 📄 목차

- [🚩원티드 프리온보딩 코스 선발과제](#원티드-프리온보딩-코스-선발과제)
  - [📄 목차](#-목차)
  - [💿실행 방법](#실행-방법)
  - [🚀배포](#배포)
  - [👩‍💻구현](#구현)
    - [📌 Toggle](#-toggle)
    - [📌 Modal](#-modal)
    - [📌 Tab](#-tab)
    - [📌 Tag](#-tag)
    - [📌 AutoComplete](#-autocomplete)
    - [📌 ClickToEdit](#-clicktoedit)

<br/>
<br/>

## 💿실행 방법

```bash
$ git clone git@github.com:NamgyungKim/wanted_pre_onboarding.git

$ cd ./wanted_pre_onboarding/custom-component

$ npm install

$ npm run start

```

<br/>
<br/>



## 👩‍💻구현

### 📌 Toggle

- 토글버튼 클릭 시 toggleBtn 상태가 bool 값으로 나타남

<br/>

![1 Toggle](https://user-images.githubusercontent.com/87519250/152916390-5d993c70-bff2-4abe-a406-8a978c0000c3.gif)

**✔ 사용 방법**

```js
const [toggle, setToggle] = useState(false);
```

| prop                     | Type | Description   |
| ------------------------ | ---- | ------------- |
| toggle ( isRequired )    | bool | 토글의 On/Off |
| setToggle ( isRequired ) | func | 상태 변경     |

**✔ 구현방법**

- checkBox의 체크상태를 useState를 사용해 변경해주었다.

  ```js
  // checkbox 체크여부
  const [toggleBtn, setToggleBtn] = useState(false);
  ```

- Toggle 클릭에 따른 ON/OFF 변경

  1. Toggle를 클릭하면 체크박스가 선택/선택취소 가 되고, ref를 통해 받아온 체크박스의 상태가 `setToggleBtn(toggleCheck.current.checked)`로 변경된다.

     ```js
     return (
       //input checkbox
       const toggleCheck = useRef();
       {/* Toggle */}
       <ToggleBtn onClick={() => setToggleBtn(toggleCheck.current.checked)}>
         <input id="toggle" type="checkbox" ref={toggleCheck} />
         <label htmlFor="toggle">
           <span />
         </label>
       </ToggleBtn>
     );
     ```

  2. 스타일은 css 에서 checkbox가 선택되었을때를 :checked 를 통해 변경해 주었다.
     이때 배경에 움직이는 파란색을 span으로 두고 좌우로 이동시켜주었다.
     동그라미원또한 우측으로 58px 이동시켜주었다.

     ```scss
     input {
       display: none;
       transition: all 0.4s;
       :checked + label span {
         transform: translateX(0);
       }
       :checked + label:before {
         transform: translateX(58px);
       }
     }
     span {
       display: block;
       position: absolute;
       left: 0;
       width: 100px;
       height: 40px;
       transform: translateX(-100%);
       background-color: var(--main-color);
       transition: all 0.4s;
       content: "";
     }
     ```

**✔ 어려웠던 점**

보통 토글버튼을 만들때 background색만 바꿔주는 식으로 많이들 한다.<br />
하지만 요구사항에서는 background색을 바꾸지 않고 색이있는 박스가 좌우로 슬라이드 되는 형식으로 구현되어있었다.<br />
그부분에대해서 어떻게 구현할까 생각을 하다가 `label`의 overflow를 hidden으로 두고, `<span />`을 label안에 넣어 `translateX()`를 이용하여 좌우로 움직여주었다.<br />

<br/>
<br/>
<br/>
<br/>

### 📌 Modal

- Open Modal 버튼 클릭시 모달 창이 열리고, 배경이 `rgba(0, 0, 0, 0.3)` 색으로 바뀐다.
- x 버튼 클릭 시 모달창이 닫힌다.

![2 Modal](https://user-images.githubusercontent.com/87519250/152916893-7645cf7b-6f5a-4b3d-875b-eccaca805ccc.gif)

**✔ 사용 방법**

| prop      | Type   | Description   |
| --------- | ------ | ------------- |
| modalText | string | 모달창 메시지 |

**✔ 구현방법**

- useState의 true/false값을 통해 모달창의 보여줌 여부를 결정하였다.

  ```js
  const [showModal, setShowModal] = useState(false);
  ```

- 모달창의 열리고 닫힘

  1.  ModalBtn을 클릭 시 onClick에서 showModal을 true로 변경
  2.  이후 모달창의 x클릭시에 showModal을 false로 변경
  3.  showModal에 따라서 ModalWindow가 나타나고 사라진다.

      ```js
      return(
        /* 모달버튼 */
        <ModalBtn type="button" onClick={() => setShowModal(true)}>
          Open Modal
        </ModalBtn>;

        /* 모달창 */
        {showModal ? (
          <ModalWindow>
            <div>
              <button onClick={() => setShowModal(false)} />
              <p>HELLOW CODESTATES</p>
            </div>
          </ModalWindow>
        ) : null}
      )
      ```

<br/>
<br/>
<br/>
<br/>

### 📌 Tab

- 탭버튼 클릭 시 해당 탭내용이 보여진다.

![3 Tab](https://user-images.githubusercontent.com/87519250/152916913-837efa2e-8414-4e4d-a81b-839f717d4fa8.gif)

**✔ 사용 방법**

```js
const tabMenu = [
  { name: "Tab1", con: <Tab1 /> },
  { name: "Tab2", con: <Tab2 /> },
  { name: "Tab3", con: <Tab3 /> },
];
```

| prop                   | Type | Description                               |
| ---------------------- | ---- | ----------------------------------------- |
| tabMenu ( isRequired ) | arr  | [{name: 'string 탭명', con: '컴포넌트'},] |

**✔ 구현방법**

- Tab매뉴는 map을 통해서 생성했다. 그래서 tabMenu를 추가할 경우에도 자동으로 Tab메뉴의 길이가 늘어난다.

  ```js
  // Tab 컨텐츠
  const Tab1 = () => <div>Tab menu One</div>;
  const Tab2 = () => <div>Tab menu Two</div>;
  const Tab3 = () => <div>Tab menu Three</div>;

  // Tab 매뉴명, 컨텐츠
  const tabMenu = [
    { name: "Tab1", con: <Tab1 /> },
    { name: "Tab2", con: <Tab2 /> },
    { name: "Tab3", con: <Tab3 /> },
  ];

  cosnt Tab = () => {
    return (
      <>
        <TabBox>
        {
          tabMenu.map((item, num) => (
          <div
            className={tabBtn === num ? "active" : ""}
            onClick={() => setTebBtn(num)}
            key={num}
          >
            {item.name}
          </div>
        ))}
        </TabBox>
        <Content>{tabMenu[tabBtn].con}</Content>
      </>
    )
  }
  ```

- 탭 버튼 클릭 시 해당 탭의 내용이 보인다.

  1. 탭 글릭 시 tabMenu의 index번호로 useState가 변경된다.
  2. `<Content>{tabMenu[tabBtn].con}</Content>`를 통해 index번호의 컨텐츠가 나타난다.

<br/>
<br/>
<br/>
<br/>

### 📌 Tag

- input에 텍스트를 입력하고 엔터를 했을 때 Tag 생성
- 생성된 Tag는 오른쪽의 x 버튼을 통해 제거 가능

![4 Tag](https://user-images.githubusercontent.com/87519250/152916917-b55af0fc-dcbc-44a4-bd21-1c59af44743e.gif)

**✔ 사용 방법**

```js
const [tags, setTags] = useState(["CodeState", "codding"]);
```

| prop                   | Type | Description |
| ---------------------- | ---- | ----------- |
| tags ( isRequired )    | arr  | 태그 배열   |
| setTags ( isRequired ) | func | 상태 변경   |

**✔ 구현방법**

- usState에 배열을 추가

  1. input에 택스트를 입력하고 엔터를 누를 시 addTag()함수 실행
  2. tags에 input텍스트의 value를 배열뒤에 추가 시키고 value를 지워준다.

     ```js
     const [tags, setTags] = useState(["CodeState", "codding"]);
     const inputRef = useRef(); //input 안의 value를 가져오기위해 사용했다.

     // 태그 추가
     const addTag = (e) => {
       if (e.key === "Enter") {
         //tags내용을 item으로 복사 해서 사용
         const item = tags.slice();
         item.push(inputRef.current.value);
         setTags(item);
         inputRef.current.value = "";
       }
     };

     return (
       <TagBox>
         {/* tags */}
         {tags.map((item, num) => {
           return (
             <TagBtn key={num}>
               <span>{item}</span>
               <button onClick={() => removeTag(num)} />
             </TagBtn>
           );
         })}
         {/* input */}
         <Input
           ref={inputRef}
           onKeyPress={addTag}
           placeholder="Press enter to add tags"
           type="text"
         />
       </TagBox>
     );
     ```

- 태그 제거

  1.  태그의 x 클릭 시 removeTag 함수실행, 클릭한 테그의 index값을 num으로 가져온다.
  2.  받아온num를 이용해 배열을 수정해준다.

  ```js
  const [tags, setTags] = useState(["CodeState", "codding"]);

  // 태그 제거
  const removeTag = (num) => {
    //tags내용을 item으로 복사 해서 사용
    const item = tags.slice();
    item.splice(num, 1);
    setTags(item);
  };

  return (
    <TagBox>
      {/* tags */}
      {tags.map((item, num) => {
        return (
          <TagBtn key={num}>
            <span>{item}</span>
            <button onClick={() => removeTag(num)} />
          </TagBtn>
        );
      })}
    </TagBox>
  );
  ```

**✔ 어려웠던 점**

- focus시에 input이 아닌 다른곳에 outline이 생성되도록하는건 이번에 처음 만들어봐서 다른 곳에서도 찾아보며 만들었다. css에 :focus-within이라는 속성이 있었고 그 속성만으로 간단하게 할 수 있었다.
- 기존 input태그에는 :focus시 outline: none으로 해주고, 겉에 감싸는 box에 :focus-within 에 border값을 주었다.

  ```scss
  .TagBox {
    :focus-within {
      border: 1px solid var(--main-color);
    }
  }
  input {
    :focus {
      outline: none;
    }
  }
  ```

<br/>
<br/>
<br/>
<br/>

### 📌 AutoComplete

- input에 택스트 입력 후 엔터시 입력결과가 저장이된다.
- 택스트 입력 시 그 텍스트로 시작되는 이전 기록을 보여준다.
- 가장최근에 입력했던 순으로 위에서부터 표시된다. 이전에 입력했던 값을 다시 입력했을 경우에도 상단으로 위치가 변경된다.
- x 버튼 클릭시 입력되지 않고 텍스트만 제거된다.
- 자동완성은 마우스로 클릭과 방향키로 선택 가능하다.
- focus가 다른곳에 가있을때는 자동완성창이 닫힌다.

![5 AutoComplete](https://user-images.githubusercontent.com/87519250/152916921-30d6468c-45f2-4fce-8341-0ee2c8ceb821.gif)

**✔ 사용 방법**

```js
// 원래 빈배열로 두어야하지만 test케이스로 담아두었습니다.
const [autoComplete, setAutoComplete] = useState(["abc", "apple", "ask"]);
```

| prop                           | Type | Description |
| ------------------------------ | ---- | ----------- |
| autoComplete ( isRequired )    | arr  | 자동완성    |
| setAutoComplete ( isRequired ) | func | 상태 변경   |

**✔ 구현방법**

- input입력시 자동완성 기능
  1. 자동완성할 키워드들 useState의 배열로 나열 앞에 있을수록 최근 입력값
  2. keyword arr를 input의 입력값에 따른 filter를 해준 후 map 으로 나타냄
  ```js
  const [keyword, setKeyword] = useState([
    "abc",
    "apple",
    "ask",
    "admit",
    "acess",
    "test",
  ]);
  {
    showAutoComplete && inputValue !== "" ? (
      <ul ref={ulRef}>
        {keyword
          .filter((item) => {
            const regExp = new RegExp(`^${inputValue}`);
            return regExp.test(item);
          })
          .map((item, num) => {
            // 최대 10개만 보여주기
            if (num < 10) {
              return (
                <li
                  onClick={focusAutoComplete}
                  onKeyDown={focusAutoComplete}
                  key={num}
                  tabIndex="0"
                  className="autoComplete"
                >
                  {item}
                </li>
              );
            }
            return null;
          })}
      </ul>
    ) : null;
  }
  ```
- input 자동완성 선택 (클릭, 방향키)

  1. 자동완성된 키워드 클릭 시, 방향키로 focus시 focusAutoComplete 함수 실행

  ```js
  let focusPosition = 0;
  const focusAutoComplete = (e) => {
    setShowAutoComplete(true);
    e.preventDefault(); //방향키 입력시 스크롤이동방지

    // 키워드 포커스 상태에서 엔터 하거나 키워드 클릭 시
    // input에 그 키워드 입력
    if (e.key === "Enter" || e.type === "click") {
      setInputValue(e.target.innerHTML);
    }

    // press up key
    // 만약 가장상단에서 up key 눌렸을 경우 배열 가장 아래가 focus
    if (e.keyCode === 38) {
      if (focusPosition === 0) {
        focusPosition = ulRef.current.children.length - 1;
        ulRef.current.children[0].focus();
      } else {
        focusPosition--;
      }
      // focusPosition을 포커스
      ulRef.current.children[focusPosition].focus();
      // 포커스된 value를 input에 넣어주기
      inputRef.current.value = ulRef.current.children[focusPosition].innerHTML;
    }

    // press down key
    // 만약 가장하단에서 down key 눌렸을 경우 배열 가장 위를 focus
    if (e.keyCode === 40) {
      if (focusPosition === ulRef.current.children.length - 1) {
        focusPosition = 0;
        ulRef.current.children[0].focus();
      } else {
        focusPosition++;
      }
      // focusPosition을 포커스
      ulRef.current.children[focusPosition].focus();
      // 포커스된 value를 input에 넣어주기
      inputRef.current.value = ulRef.current.children[focusPosition].innerHTML;
    }
  };
  ```

- 자동완성 키워드 추가
  1. input에 text를 입력하고 엔터 시 addKeyword 함수 실행
  ```js
  const addKeyword = (e) => {
    const copyKeyword = keyword.slice();
    // 2. 엔터키에서만 실행
    if (e.key === "Enter") {
      // 3. 엔터시 input의 값이 keyword에 이미 기존하는 값인지 판단
      if (keyword.indexOf(inputValue) === -1) {
        // 4-1. 배열에 없는 새로운 값이면 자동완성배열에 추가
        copyKeyword.unshift(inputValue);
        setKeyword(copyKeyword);
      } else {
        // 4-2. 기존하는 값이면 배열 가장 앞으로 이동
        copyKeyword.splice(copyKeyword.indexOf(inputValue), 1);
        setKeyword(copyKeyword);
        copyKeyword.unshift(inputValue);
      }
      // 5. input의 value 지우고, 포커스아웃
      setInputValue("");
      setShowAutoComplete(false);
    }
  };
  ```

**✔ 어려웠던 점**

- 이번 과제에서 가장 어려웠던 부분인였다. <br />
  우선 완료후에도 시현해보며 생각과 다르게 작동하는 부분이 많아서 수정해주느라 오래걸렸다. <br />
  input안에서 방향키를 눌렀을경우에도 자동완성에 focus되도록 하고,
  방향키 입력시 스크롤이동방지를 해주는등 자잘하게 수정해주어야할 것들이 많았다. <br />
  지금은 어찌어찌 콘솔에 뜨는 애러창도 다 해결을 했고, 코드도 나름 정리를 했으나 다른 더 좋은 방식이 있지 않을까 하는 생각이 든다.

<br/>
<br/>
<br/>
<br/>

### 📌 ClickToEdit

- 입력 상자 클릭 시 input으로 변경되며 값을 입력 할 수 있게된다.
- 입력이 끝난 후 focus out을 하면 아래 결과가 변경된다.

![6 ClickToEdit](https://user-images.githubusercontent.com/87519250/152916922-e305edd4-a5c3-4dc4-b0a2-c04ad4c6304d.gif)

**✔ 사용 방법**

```js
const [form, setForm] = useState([
  { label: "이름", text: "김남경", chainge: false },
  { label: "나이", text: 26, chainge: false },
]);
```

| prop                   | Type | Description                                 |
| ---------------------- | ---- | ------------------------------------------- |
| form ( isRequired )    | arr  | { label:string, text: any, chainge: false } |
| setForm ( isRequired ) | func | 상태 변경                                   |

**✔ 구현방법**

- prop으로 아래 useState를 가져왔다. <br />
  이렇게 배열로 가져옴으로서 form에 이름, 나이 이외에 다른 값을 추가로 받아 와야하는 경우 여기만 수정해도 자동 반영된다.

```js
const [form, setForm] = useState([
  { label: "이름", text: "김남경", chainge: false },
  { label: "나이", text: 26, chainge: false },
]);
```

- div 박스 클릭시 input box로 변경 <br />
  : 클릭한 박스의 index를 가져와서 chainge를 false로 변경함으로 div가 input 으로 바뀌로도록 하였다.

```js
const clickForm = (index) => {
  const newForm = form.map((item, i) => {
    if (index === i) return { ...item, chainge: true };
    return item;
  });
  setForm(newForm);
};
```

```js
{
  form.map((item, index) =>
    item.chainge ? (
      <div key={index}>
        <label>{item.label}</label>
        <input name={item.label} ref={inputRef} onBlur={onBlur} type="text" />
      </div>
    ) : (
      <div key={index}>
        <span>{item.label}</span>
        <div name={item.label} onClick={() => clickForm(index)}>
          {item.text}
        </div>
      </div>
    )
  );
}
```

- form 변경시 input에 바로 포커스 : <br />
  위에서 item.chainge가 true로 변경되면 클릭한 inputbox가 자동 포커스되도록하였다. <br />
  포커스 이후, item.text가 input 안으로 바로 들어가도록 했다.

  ```js
  useEffect(() => {
    form.forEach((item) => {
      if (item.chainge === true) {
        inputRef.current.focus();
        inputRef.current.value = item.text;
      }
    });
  }, [form]);
  ```

- 포커스 아웃 시 input에 입력값 set으로 상태 변경<br />
  포커스 아웃과 동시에 item의 chainge가 false로 변경되며, input태그가 div로 변경된다.
  그리고 input에서 입력한 마지막 값을 setForm에 넣어줌으로서 상태를 변경했다.

  ```js
  const onBlur = (e) => {
    const newForm = form.map((item) => {
      if (item.label === e.target.name)
        return { ...item, text: e.target.value, chainge: false };
      return item;
    });
    setForm(newForm);
  };
  ```

**✔ 어려웠던 점**

- 입렧상자를 클릭 했을때 input으로 바뀌며 동시에 바로 input에 포커스 되도록 해야하는 부분에서 어려움을 겪었다. 처음에는 div에 onClick 함수 안에`inputName.current.focus()`를 넣어주었다. 하지만 그렇게 했을 경우 아직 inputbox가 랜더링 되기 전이라 오류가 떴다. <br />
  그래서 이부분을 useEffect를 이용해서 해결해주었다.<br />
