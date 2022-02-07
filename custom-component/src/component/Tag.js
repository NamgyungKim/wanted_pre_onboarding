import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Box } from "../styles/GlobalStyles";

const Tag = () => {
  const [tags, setTags] = useState(["CodeState", "codding"]);
  const inputRef = useRef();

  // 태그 제거
  const removeTag = (num) => {
    const item = tags.slice();
    item.splice(num, 1);
    setTags(item);
  };

  // 태그 추가
  const addTag = (e) => {
    if (e.key === "Enter") {
      const item = tags.slice();
      item.push(inputRef.current.value);
      setTags(item);
      inputRef.current.value = "";
    }
  };

  return (
    <Box>
      <h1>Tag</h1>
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
    </Box>
  );
};

// TagBox위치
const TagBox = styled.div`
  display: flex;
  width: 80%;
  height: 40px;
  margin: 150px auto;
  border: 1px solid #bbb;
  border-radius: 10px;
  padding: 10px;
  :focus-within {
    border: 1px solid var(--main-color);
  }
`;

// 태그
const TagBtn = styled.div`
  display: flex;
  background-color: var(--main-color);
  color: #fff;
  padding: 10px;
  margin-right: 3px;
  border-radius: 10px;
  font-weight: bold;
  white-space: nowrap;
  > button {
    position: relative;
    width: 20px;
    padding: 0;
    margin-left: 5px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    :before,
    :after {
      position: absolute;
      top: 6px;
      left: 9px;
      width: 2px;
      height: 10px;
      border-radius: 2px;
      background-color: var(--main-color);
      content: "";
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
  }
`;

// input
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 10px;
  margin: 0 0 0 10px;
  padding: 0;
  font-size: 20px;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

export default Tag;
