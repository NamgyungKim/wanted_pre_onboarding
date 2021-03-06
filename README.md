# ๐ฉ์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ ์ฝ์ค ์ ๋ฐ๊ณผ์ 

![ckazubyqigyqb515__1080_790](https://user-images.githubusercontent.com/87519250/152908179-4fde3d07-ecbf-4163-a2ec-95e7f2786a9f.jpg)
๊ณผ์ : https://codestates.notion.site/5f83f7a007664f1abcf0cdbcbbbbd521

## ๐ ๋ชฉ์ฐจ

- [๐ฉ์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ ์ฝ์ค ์ ๋ฐ๊ณผ์ ](#์ํฐ๋-ํ๋ฆฌ์จ๋ณด๋ฉ-์ฝ์ค-์ ๋ฐ๊ณผ์ )
  - [๐ ๋ชฉ์ฐจ](#-๋ชฉ์ฐจ)
  - [๐ฟ์คํ ๋ฐฉ๋ฒ](#์คํ-๋ฐฉ๋ฒ)
  - [๐๋ฐฐํฌ](#๋ฐฐํฌ)
  - [๐ฉโ๐ป๊ตฌํ](#๊ตฌํ)
    - [๐ Toggle](#-toggle)
    - [๐ Modal](#-modal)
    - [๐ Tab](#-tab)
    - [๐ Tag](#-tag)
    - [๐ AutoComplete](#-autocomplete)
    - [๐ ClickToEdit](#-clicktoedit)

<br/>
<br/>

## ๐ฟ์คํ ๋ฐฉ๋ฒ

```bash
$ git clone git@github.com:NamgyungKim/wanted_pre_onboarding.git

$ cd ./wanted_pre_onboarding/custom-component

$ npm install

$ npm run start

```

<br/>
<br/>

## ๐๋ฐฐํฌ

https://friendly-fermi-7483ff.netlify.app/

<br />
<br />

## ๐ฉโ๐ป๊ตฌํ

### ๐ Toggle

- ํ ๊ธ๋ฒํผ ํด๋ฆญ ์ toggleBtn ์ํ๊ฐ bool ๊ฐ์ผ๋ก ๋ํ๋จ

<br/>

![1 Toggle](https://user-images.githubusercontent.com/87519250/152916390-5d993c70-bff2-4abe-a406-8a978c0000c3.gif)

**โ ์ฌ์ฉ ๋ฐฉ๋ฒ**

```js
const [toggle, setToggle] = useState(false);
```

| prop                     | Type | Description   |
| ------------------------ | ---- | ------------- |
| toggle ( isRequired )    | bool | ํ ๊ธ์ On/Off |
| setToggle ( isRequired ) | func | ์ํ ๋ณ๊ฒฝ     |

**โ ๊ตฌํ๋ฐฉ๋ฒ**

- checkBox์ ์ฒดํฌ์ํ๋ฅผ useState๋ฅผ ์ฌ์ฉํด ๋ณ๊ฒฝํด์ฃผ์๋ค.

  ```js
  // checkbox ์ฒดํฌ์ฌ๋ถ
  const [toggleBtn, setToggleBtn] = useState(false);
  ```

- Toggle ํด๋ฆญ์ ๋ฐ๋ฅธ ON/OFF ๋ณ๊ฒฝ

  1. Toggle๋ฅผ ํด๋ฆญํ๋ฉด ์ฒดํฌ๋ฐ์ค๊ฐ ์ ํ/์ ํ์ทจ์ ๊ฐ ๋๊ณ , ref๋ฅผ ํตํด ๋ฐ์์จ ์ฒดํฌ๋ฐ์ค์ ์ํ๊ฐ `setToggleBtn(toggleCheck.current.checked)`๋ก ๋ณ๊ฒฝ๋๋ค.

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

  2. ์คํ์ผ์ css ์์ checkbox๊ฐ ์ ํ๋์์๋๋ฅผ :checked ๋ฅผ ํตํด ๋ณ๊ฒฝํด ์ฃผ์๋ค.
     ์ด๋ ๋ฐฐ๊ฒฝ์ ์์ง์ด๋ ํ๋์์ span์ผ๋ก ๋๊ณ  ์ข์ฐ๋ก ์ด๋์์ผ์ฃผ์๋ค.
     ๋๊ทธ๋ผ๋ฏธ์๋ํ ์ฐ์ธก์ผ๋ก 58px ์ด๋์์ผ์ฃผ์๋ค.

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

**โ ์ด๋ ค์ ๋ ์ **

๋ณดํต ํ ๊ธ๋ฒํผ์ ๋ง๋ค๋ background์๋ง ๋ฐ๊ฟ์ฃผ๋ ์์ผ๋ก ๋ง์ด๋ค ํ๋ค.<br />
ํ์ง๋ง ์๊ตฌ์ฌํญ์์๋ background์์ ๋ฐ๊พธ์ง ์๊ณ  ์์ด์๋ ๋ฐ์ค๊ฐ ์ข์ฐ๋ก ์ฌ๋ผ์ด๋ ๋๋ ํ์์ผ๋ก ๊ตฌํ๋์ด์์๋ค.<br />
๊ทธ๋ถ๋ถ์๋ํด์ ์ด๋ป๊ฒ ๊ตฌํํ ๊น ์๊ฐ์ ํ๋ค๊ฐ `label`์ overflow๋ฅผ hidden์ผ๋ก ๋๊ณ , `<span />`์ label์์ ๋ฃ์ด `translateX()`๋ฅผ ์ด์ฉํ์ฌ ์ข์ฐ๋ก ์์ง์ฌ์ฃผ์๋ค.<br />

<br/>
<br/>
<br/>
<br/>

### ๐ Modal

- Open Modal ๋ฒํผ ํด๋ฆญ์ ๋ชจ๋ฌ ์ฐฝ์ด ์ด๋ฆฌ๊ณ , ๋ฐฐ๊ฒฝ์ด `rgba(0, 0, 0, 0.3)` ์์ผ๋ก ๋ฐ๋๋ค.
- x ๋ฒํผ ํด๋ฆญ ์ ๋ชจ๋ฌ์ฐฝ์ด ๋ซํ๋ค.

![2 Modal](https://user-images.githubusercontent.com/87519250/152916893-7645cf7b-6f5a-4b3d-875b-eccaca805ccc.gif)

**โ ์ฌ์ฉ ๋ฐฉ๋ฒ**

| prop      | Type   | Description   |
| --------- | ------ | ------------- |
| modalText | string | ๋ชจ๋ฌ์ฐฝ ๋ฉ์์ง |

**โ ๊ตฌํ๋ฐฉ๋ฒ**

- useState์ true/false๊ฐ์ ํตํด ๋ชจ๋ฌ์ฐฝ์ ๋ณด์ฌ์ค ์ฌ๋ถ๋ฅผ ๊ฒฐ์ ํ์๋ค.

  ```js
  const [showModal, setShowModal] = useState(false);
  ```

- ๋ชจ๋ฌ์ฐฝ์ ์ด๋ฆฌ๊ณ  ๋ซํ

  1.  ModalBtn์ ํด๋ฆญ ์ onClick์์ showModal์ true๋ก ๋ณ๊ฒฝ
  2.  ์ดํ ๋ชจ๋ฌ์ฐฝ์ xํด๋ฆญ์์ showModal์ false๋ก ๋ณ๊ฒฝ
  3.  showModal์ ๋ฐ๋ผ์ ModalWindow๊ฐ ๋ํ๋๊ณ  ์ฌ๋ผ์ง๋ค.

      ```js
      return(
        /* ๋ชจ๋ฌ๋ฒํผ */
        <ModalBtn type="button" onClick={() => setShowModal(true)}>
          Open Modal
        </ModalBtn>;

        /* ๋ชจ๋ฌ์ฐฝ */
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

### ๐ Tab

- ํญ๋ฒํผ ํด๋ฆญ ์ ํด๋น ํญ๋ด์ฉ์ด ๋ณด์ฌ์ง๋ค.

![3 Tab](https://user-images.githubusercontent.com/87519250/152916913-837efa2e-8414-4e4d-a81b-839f717d4fa8.gif)

**โ ์ฌ์ฉ ๋ฐฉ๋ฒ**

```js
const tabMenu = [
  { name: "Tab1", con: <Tab1 /> },
  { name: "Tab2", con: <Tab2 /> },
  { name: "Tab3", con: <Tab3 /> },
];
```

| prop                   | Type | Description                               |
| ---------------------- | ---- | ----------------------------------------- |
| tabMenu ( isRequired ) | arr  | [{name: 'string ํญ๋ช', con: '์ปดํฌ๋ํธ'},] |

**โ ๊ตฌํ๋ฐฉ๋ฒ**

- Tab๋งค๋ด๋ map์ ํตํด์ ์์ฑํ๋ค. ๊ทธ๋์ tabMenu๋ฅผ ์ถ๊ฐํ  ๊ฒฝ์ฐ์๋ ์๋์ผ๋ก Tab๋ฉ๋ด์ ๊ธธ์ด๊ฐ ๋์ด๋๋ค.

  ```js
  // Tab ์ปจํ์ธ 
  const Tab1 = () => <div>Tab menu One</div>;
  const Tab2 = () => <div>Tab menu Two</div>;
  const Tab3 = () => <div>Tab menu Three</div>;

  // Tab ๋งค๋ด๋ช, ์ปจํ์ธ 
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

- ํญ ๋ฒํผ ํด๋ฆญ ์ ํด๋น ํญ์ ๋ด์ฉ์ด ๋ณด์ธ๋ค.

  1. ํญ ๊ธ๋ฆญ ์ tabMenu์ index๋ฒํธ๋ก useState๊ฐ ๋ณ๊ฒฝ๋๋ค.
  2. `<Content>{tabMenu[tabBtn].con}</Content>`๋ฅผ ํตํด index๋ฒํธ์ ์ปจํ์ธ ๊ฐ ๋ํ๋๋ค.

<br/>
<br/>
<br/>
<br/>

### ๐ Tag

- input์ ํ์คํธ๋ฅผ ์๋ ฅํ๊ณ  ์ํฐ๋ฅผ ํ์ ๋ Tag ์์ฑ
- ์์ฑ๋ Tag๋ ์ค๋ฅธ์ชฝ์ x ๋ฒํผ์ ํตํด ์ ๊ฑฐ ๊ฐ๋ฅ

![4 Tag](https://user-images.githubusercontent.com/87519250/152916917-b55af0fc-dcbc-44a4-bd21-1c59af44743e.gif)

**โ ์ฌ์ฉ ๋ฐฉ๋ฒ**

```js
const [tags, setTags] = useState(["CodeState", "codding"]);
```

| prop                   | Type | Description |
| ---------------------- | ---- | ----------- |
| tags ( isRequired )    | arr  | ํ๊ทธ ๋ฐฐ์ด   |
| setTags ( isRequired ) | func | ์ํ ๋ณ๊ฒฝ   |

**โ ๊ตฌํ๋ฐฉ๋ฒ**

- usState์ ๋ฐฐ์ด์ ์ถ๊ฐ

  1. input์ ํ์คํธ๋ฅผ ์๋ ฅํ๊ณ  ์ํฐ๋ฅผ ๋๋ฅผ ์ addTag()ํจ์ ์คํ
  2. tags์ inputํ์คํธ์ value๋ฅผ ๋ฐฐ์ด๋ค์ ์ถ๊ฐ ์ํค๊ณ  value๋ฅผ ์ง์์ค๋ค.

     ```js
     const [tags, setTags] = useState(["CodeState", "codding"]);
     const inputRef = useRef(); //input ์์ value๋ฅผ ๊ฐ์ ธ์ค๊ธฐ์ํด ์ฌ์ฉํ๋ค.

     // ํ๊ทธ ์ถ๊ฐ
     const addTag = (e) => {
       if (e.key === "Enter") {
         //tags๋ด์ฉ์ item์ผ๋ก ๋ณต์ฌ ํด์ ์ฌ์ฉ
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

- ํ๊ทธ ์ ๊ฑฐ

  1.  ํ๊ทธ์ x ํด๋ฆญ ์ removeTag ํจ์์คํ, ํด๋ฆญํ ํ๊ทธ์ index๊ฐ์ num์ผ๋ก ๊ฐ์ ธ์จ๋ค.
  2.  ๋ฐ์์จnum๋ฅผ ์ด์ฉํด ๋ฐฐ์ด์ ์์ ํด์ค๋ค.

  ```js
  const [tags, setTags] = useState(["CodeState", "codding"]);

  // ํ๊ทธ ์ ๊ฑฐ
  const removeTag = (num) => {
    //tags๋ด์ฉ์ item์ผ๋ก ๋ณต์ฌ ํด์ ์ฌ์ฉ
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

**โ ์ด๋ ค์ ๋ ์ **

- focus์์ input์ด ์๋ ๋ค๋ฅธ๊ณณ์ outline์ด ์์ฑ๋๋๋กํ๋๊ฑด ์ด๋ฒ์ ์ฒ์ ๋ง๋ค์ด๋ด์ ๋ค๋ฅธ ๊ณณ์์๋ ์ฐพ์๋ณด๋ฉฐ ๋ง๋ค์๋ค. css์ :focus-within์ด๋ผ๋ ์์ฑ์ด ์์๊ณ  ๊ทธ ์์ฑ๋ง์ผ๋ก ๊ฐ๋จํ๊ฒ ํ  ์ ์์๋ค.
- ๊ธฐ์กด inputํ๊ทธ์๋ :focus์ outline: none์ผ๋ก ํด์ฃผ๊ณ , ๊ฒ์ ๊ฐ์ธ๋ box์ :focus-within ์ border๊ฐ์ ์ฃผ์๋ค.

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

### ๐ AutoComplete

- input์ ํ์คํธ ์๋ ฅ ํ ์ํฐ์ ์๋ ฅ๊ฒฐ๊ณผ๊ฐ ์ ์ฅ์ด๋๋ค.
- ํ์คํธ ์๋ ฅ ์ ๊ทธ ํ์คํธ๋ก ์์๋๋ ์ด์  ๊ธฐ๋ก์ ๋ณด์ฌ์ค๋ค.
- ๊ฐ์ฅ์ต๊ทผ์ ์๋ ฅํ๋ ์์ผ๋ก ์์์๋ถํฐ ํ์๋๋ค. ์ด์ ์ ์๋ ฅํ๋ ๊ฐ์ ๋ค์ ์๋ ฅํ์ ๊ฒฝ์ฐ์๋ ์๋จ์ผ๋ก ์์น๊ฐ ๋ณ๊ฒฝ๋๋ค.
- x ๋ฒํผ ํด๋ฆญ์ ์๋ ฅ๋์ง ์๊ณ  ํ์คํธ๋ง ์ ๊ฑฐ๋๋ค.
- ์๋์์ฑ์ ๋ง์ฐ์ค๋ก ํด๋ฆญ๊ณผ ๋ฐฉํฅํค๋ก ์ ํ ๊ฐ๋ฅํ๋ค.
- focus๊ฐ ๋ค๋ฅธ๊ณณ์ ๊ฐ์์๋๋ ์๋์์ฑ์ฐฝ์ด ๋ซํ๋ค.

![5 AutoComplete](https://user-images.githubusercontent.com/87519250/152916921-30d6468c-45f2-4fce-8341-0ee2c8ceb821.gif)

**โ ์ฌ์ฉ ๋ฐฉ๋ฒ**

```js
// ์๋ ๋น๋ฐฐ์ด๋ก ๋์ด์ผํ์ง๋ง test์ผ์ด์ค๋ก ๋ด์๋์์ต๋๋ค.
const [autoComplete, setAutoComplete] = useState(["abc", "apple", "ask"]);
```

| prop                           | Type | Description |
| ------------------------------ | ---- | ----------- |
| autoComplete ( isRequired )    | arr  | ์๋์์ฑ    |
| setAutoComplete ( isRequired ) | func | ์ํ ๋ณ๊ฒฝ   |

**โ ๊ตฌํ๋ฐฉ๋ฒ**

- input์๋ ฅ์ ์๋์์ฑ ๊ธฐ๋ฅ
  1. ์๋์์ฑํ  ํค์๋๋ค useState์ ๋ฐฐ์ด๋ก ๋์ด ์์ ์์์๋ก ์ต๊ทผ ์๋ ฅ๊ฐ
  2. keyword arr๋ฅผ input์ ์๋ ฅ๊ฐ์ ๋ฐ๋ฅธ filter๋ฅผ ํด์ค ํ map ์ผ๋ก ๋ํ๋
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
            // ์ต๋ 10๊ฐ๋ง ๋ณด์ฌ์ฃผ๊ธฐ
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
- input ์๋์์ฑ ์ ํ (ํด๋ฆญ, ๋ฐฉํฅํค)

  1. ์๋์์ฑ๋ ํค์๋ ํด๋ฆญ ์, ๋ฐฉํฅํค๋ก focus์ focusAutoComplete ํจ์ ์คํ

  ```js
  let focusPosition = 0;
  const focusAutoComplete = (e) => {
    setShowAutoComplete(true);
    e.preventDefault(); //๋ฐฉํฅํค ์๋ ฅ์ ์คํฌ๋กค์ด๋๋ฐฉ์ง

    // ํค์๋ ํฌ์ปค์ค ์ํ์์ ์ํฐ ํ๊ฑฐ๋ ํค์๋ ํด๋ฆญ ์
    // input์ ๊ทธ ํค์๋ ์๋ ฅ
    if (e.key === "Enter" || e.type === "click") {
      setInputValue(e.target.innerHTML);
    }

    // press up key
    // ๋ง์ฝ ๊ฐ์ฅ์๋จ์์ up key ๋๋ ธ์ ๊ฒฝ์ฐ ๋ฐฐ์ด ๊ฐ์ฅ ์๋๊ฐ focus
    if (e.keyCode === 38) {
      if (focusPosition === 0) {
        focusPosition = ulRef.current.children.length - 1;
        ulRef.current.children[0].focus();
      } else {
        focusPosition--;
      }
      // focusPosition์ ํฌ์ปค์ค
      ulRef.current.children[focusPosition].focus();
      // ํฌ์ปค์ค๋ value๋ฅผ input์ ๋ฃ์ด์ฃผ๊ธฐ
      inputRef.current.value = ulRef.current.children[focusPosition].innerHTML;
    }

    // press down key
    // ๋ง์ฝ ๊ฐ์ฅํ๋จ์์ down key ๋๋ ธ์ ๊ฒฝ์ฐ ๋ฐฐ์ด ๊ฐ์ฅ ์๋ฅผ focus
    if (e.keyCode === 40) {
      if (focusPosition === ulRef.current.children.length - 1) {
        focusPosition = 0;
        ulRef.current.children[0].focus();
      } else {
        focusPosition++;
      }
      // focusPosition์ ํฌ์ปค์ค
      ulRef.current.children[focusPosition].focus();
      // ํฌ์ปค์ค๋ value๋ฅผ input์ ๋ฃ์ด์ฃผ๊ธฐ
      inputRef.current.value = ulRef.current.children[focusPosition].innerHTML;
    }
  };
  ```

- ์๋์์ฑ ํค์๋ ์ถ๊ฐ
  1. input์ text๋ฅผ ์๋ ฅํ๊ณ  ์ํฐ ์ addKeyword ํจ์ ์คํ
  ```js
  const addKeyword = (e) => {
    const copyKeyword = keyword.slice();
    // 2. ์ํฐํค์์๋ง ์คํ
    if (e.key === "Enter") {
      // 3. ์ํฐ์ input์ ๊ฐ์ด keyword์ ์ด๋ฏธ ๊ธฐ์กดํ๋ ๊ฐ์ธ์ง ํ๋จ
      if (keyword.indexOf(inputValue) === -1) {
        // 4-1. ๋ฐฐ์ด์ ์๋ ์๋ก์ด ๊ฐ์ด๋ฉด ์๋์์ฑ๋ฐฐ์ด์ ์ถ๊ฐ
        copyKeyword.unshift(inputValue);
        setKeyword(copyKeyword);
      } else {
        // 4-2. ๊ธฐ์กดํ๋ ๊ฐ์ด๋ฉด ๋ฐฐ์ด ๊ฐ์ฅ ์์ผ๋ก ์ด๋
        copyKeyword.splice(copyKeyword.indexOf(inputValue), 1);
        setKeyword(copyKeyword);
        copyKeyword.unshift(inputValue);
      }
      // 5. input์ value ์ง์ฐ๊ณ , ํฌ์ปค์ค์์
      setInputValue("");
      setShowAutoComplete(false);
    }
  };
  ```

**โ ์ด๋ ค์ ๋ ์ **

- ์ด๋ฒ ๊ณผ์ ์์ ๊ฐ์ฅ ์ด๋ ค์ ๋ ๋ถ๋ถ์ธ์๋ค. <br />
  ์ฐ์  ์๋ฃํ์๋ ์ํํด๋ณด๋ฉฐ ์๊ฐ๊ณผ ๋ค๋ฅด๊ฒ ์๋ํ๋ ๋ถ๋ถ์ด ๋ง์์ ์์ ํด์ฃผ๋๋ผ ์ค๋๊ฑธ๋ ธ๋ค. <br />
  input์์์ ๋ฐฉํฅํค๋ฅผ ๋๋ ์๊ฒฝ์ฐ์๋ ์๋์์ฑ์ focus๋๋๋ก ํ๊ณ ,
  ๋ฐฉํฅํค ์๋ ฅ์ ์คํฌ๋กค์ด๋๋ฐฉ์ง๋ฅผ ํด์ฃผ๋๋ฑ ์์ํ๊ฒ ์์ ํด์ฃผ์ด์ผํ  ๊ฒ๋ค์ด ๋ง์๋ค. <br />
  ์ง๊ธ์ ์ด์ฐ์ด์ฐ ์ฝ์์ ๋จ๋ ์ ๋ฌ์ฐฝ๋ ๋ค ํด๊ฒฐ์ ํ๊ณ , ์ฝ๋๋ ๋๋ฆ ์ ๋ฆฌ๋ฅผ ํ์ผ๋ ๋ค๋ฅธ ๋ ์ข์ ๋ฐฉ์์ด ์์ง ์์๊น ํ๋ ์๊ฐ์ด ๋ ๋ค.

<br/>
<br/>
<br/>
<br/>

### ๐ ClickToEdit

- ์๋ ฅ ์์ ํด๋ฆญ ์ input์ผ๋ก ๋ณ๊ฒฝ๋๋ฉฐ ๊ฐ์ ์๋ ฅ ํ  ์ ์๊ฒ๋๋ค.
- ์๋ ฅ์ด ๋๋ ํ focus out์ ํ๋ฉด ์๋ ๊ฒฐ๊ณผ๊ฐ ๋ณ๊ฒฝ๋๋ค.

![6 ClickToEdit](https://user-images.githubusercontent.com/87519250/152916922-e305edd4-a5c3-4dc4-b0a2-c04ad4c6304d.gif)

**โ ์ฌ์ฉ ๋ฐฉ๋ฒ**

```js
const [form, setForm] = useState([
  { label: "์ด๋ฆ", text: "๊น๋จ๊ฒฝ", chainge: false },
  { label: "๋์ด", text: 26, chainge: false },
]);
```

| prop                   | Type | Description                                 |
| ---------------------- | ---- | ------------------------------------------- |
| form ( isRequired )    | arr  | { label:string, text: any, chainge: false } |
| setForm ( isRequired ) | func | ์ํ ๋ณ๊ฒฝ                                   |

**โ ๊ตฌํ๋ฐฉ๋ฒ**

- prop์ผ๋ก ์๋ useState๋ฅผ ๊ฐ์ ธ์๋ค. <br />
  ์ด๋ ๊ฒ ๋ฐฐ์ด๋ก ๊ฐ์ ธ์ด์ผ๋ก์ form์ ์ด๋ฆ, ๋์ด ์ด์ธ์ ๋ค๋ฅธ ๊ฐ์ ์ถ๊ฐ๋ก ๋ฐ์ ์์ผํ๋ ๊ฒฝ์ฐ ์ฌ๊ธฐ๋ง ์์ ํด๋ ์๋ ๋ฐ์๋๋ค.

```js
const [form, setForm] = useState([
  { label: "์ด๋ฆ", text: "๊น๋จ๊ฒฝ", chainge: false },
  { label: "๋์ด", text: 26, chainge: false },
]);
```

- div ๋ฐ์ค ํด๋ฆญ์ input box๋ก ๋ณ๊ฒฝ <br />
  : ํด๋ฆญํ ๋ฐ์ค์ index๋ฅผ ๊ฐ์ ธ์์ chainge๋ฅผ false๋ก ๋ณ๊ฒฝํจ์ผ๋ก div๊ฐ input ์ผ๋ก ๋ฐ๋๋ก๋๋ก ํ์๋ค.

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

- form ๋ณ๊ฒฝ์ input์ ๋ฐ๋ก ํฌ์ปค์ค : <br />
  ์์์ item.chainge๊ฐ true๋ก ๋ณ๊ฒฝ๋๋ฉด ํด๋ฆญํ inputbox๊ฐ ์๋ ํฌ์ปค์ค๋๋๋กํ์๋ค. <br />
  ํฌ์ปค์ค ์ดํ, item.text๊ฐ input ์์ผ๋ก ๋ฐ๋ก ๋ค์ด๊ฐ๋๋ก ํ๋ค.

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

- ํฌ์ปค์ค ์์ ์ input์ ์๋ ฅ๊ฐ set์ผ๋ก ์ํ ๋ณ๊ฒฝ<br />
  ํฌ์ปค์ค ์์๊ณผ ๋์์ item์ chainge๊ฐ false๋ก ๋ณ๊ฒฝ๋๋ฉฐ, inputํ๊ทธ๊ฐ div๋ก ๋ณ๊ฒฝ๋๋ค.
  ๊ทธ๋ฆฌ๊ณ  input์์ ์๋ ฅํ ๋ง์ง๋ง ๊ฐ์ setForm์ ๋ฃ์ด์ค์ผ๋ก์ ์ํ๋ฅผ ๋ณ๊ฒฝํ๋ค.

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

**โ ์ด๋ ค์ ๋ ์ **

- ์๋ ง์์๋ฅผ ํด๋ฆญ ํ์๋ input์ผ๋ก ๋ฐ๋๋ฉฐ ๋์์ ๋ฐ๋ก input์ ํฌ์ปค์ค ๋๋๋ก ํด์ผํ๋ ๋ถ๋ถ์์ ์ด๋ ค์์ ๊ฒช์๋ค. ์ฒ์์๋ div์ onClick ํจ์ ์์`inputName.current.focus()`๋ฅผ ๋ฃ์ด์ฃผ์๋ค. ํ์ง๋ง ๊ทธ๋ ๊ฒ ํ์ ๊ฒฝ์ฐ ์์ง inputbox๊ฐ ๋๋๋ง ๋๊ธฐ ์ ์ด๋ผ ์ค๋ฅ๊ฐ ๋ด๋ค. <br />
  ๊ทธ๋์ ์ด๋ถ๋ถ์ useEffect๋ฅผ ์ด์ฉํด์ ํด๊ฒฐํด์ฃผ์๋ค.<br />
