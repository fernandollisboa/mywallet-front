import styled from 'styled-components';

export default function Form(props) {
  return (
    <FormWrapper disabled={props.disabled} onSubmit={props.onSubmit}>
      {props.children}
    </FormWrapper>
  );
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

  input {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 10px;
    width: 100%;
    height: fit-content;
    border: none;
    border-radius: 5px;
    padding: 12px 10px;
  }

  .password-input {
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: 5px;
    padding: 12px 10px;
    margin-bottom: 10px;

    input {
      margin-bottom: 0px;
      border-radius: 0px;
      padding: 0px;
    }
  }

  & > button {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 5px;
    color: white;
    width: 100%;
    max-width: 350px;
    height: 50px;
    border-radius: 10px;
    background-color: var(--btn-color);
    opacity: ${(props) => {
      console.log(props);
      return props.disabled ? 0.8 : 1;
    }};
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
