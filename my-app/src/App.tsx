import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  useState,
} from "react";

function App() {
  const [text, setText] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleKeyInputEvent = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(text);
  };

  const handleMouseClickEvent = (e: MouseEvent<HTMLButtonElement>) => {
    alert("handleMouseClickEvent");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${text}\nchecked? ${isChecked}`);
  };

  return (
    <div className="App">
      <h1>Form Event</h1>
      <p>{text}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleTextField}
          onKeyDown={handleKeyInputEvent}
        />
        <input type="checkbox" onChange={handleCheckbox} />
        <textarea
          rows={5}
          placeholder="텍스트 입력..."
          onChange={handleTextArea}
        ></textarea>
        <button type="button" onClick={handleMouseClickEvent}>
          click
        </button>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
