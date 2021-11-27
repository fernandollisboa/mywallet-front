import styled from 'styled-components';

export default function Form({ children, onSubmit }) {
  return <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>;
}

const FormWrapper = styled.form`
  border-radius: 20px;
  width: 100%;
  font-size: 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;

  & > input {
    font-size: 20px;
    margin-bottom: 10px;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 10px 8px;
  }

  & > button {
    font-size: 20px;
    cursor: pointer;
    margin-top: 3px;
    color: white;
    width: 100%;
    max-width: 350px;
    height: 50px;
    border-radius: 10px;
    background-color: var(--btn-color);
    min-width: fit-content;
    text-align: center;

    outline: none;
    border-style: none;
    box-shadow: none;

    &:focus,
    &:active {
      border-style: outset;
      border: none;
    }
  }
`;
