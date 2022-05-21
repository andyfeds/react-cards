import { useRef } from "react";

function TextInput() {
  const myInputRef = useRef(null);

  const handleFocus = () => {
    myInputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={myInputRef} />
      <button className="btn btn-secondary" onClick={handleFocus}>
        Focus
      </button>
    </>
  );
}

export default TextInput;