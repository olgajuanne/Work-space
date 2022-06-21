import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid silver;
    border-radius: 5px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 5px;
    font-size: 16px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px silver;
    }

    span {
      font-weidht: bold;
      color: white;
      font-weight: 700;
    }
  }

`;

