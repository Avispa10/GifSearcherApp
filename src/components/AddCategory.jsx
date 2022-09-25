import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  //console.log(props);
  const [inputValue, setinputValue] = useState("");

  const changeInputEvent = (event) => {
    const inputType = event.target.value;
    setinputValue(inputType);
  };

  const submitValue = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //de aca debiera enviar a GifcomponentAPP el nuevo submit value.

    console.log(inputValue);
    onAddCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    <form onSubmit={submitValue}>
      <input
        onChange={changeInputEvent}
        type="text"
        placeholder="Category"
        value={inputValue}
      />
    </form>
  );
};
