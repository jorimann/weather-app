import React, { useRef, useEffect } from "react";

const InputCity = ({ onSubmitHandler, city, onInputHandler }) => {
  const inputRef = useRef(null); // Создаем ссылку на input

  useEffect(() => {
    // Выделяем текст в поле, когда компонент загружается
    if (inputRef.current) {
      inputRef.current.select();
    }
  }, []);

  return (
    <div className="input">
      <input
        type="text"
        value={city}
        onChange={onInputHandler}
        placeholder="City..."
        ref={inputRef} // Привязываем ссылку к input
      />
      <button className="input_btn" type="submit" onClick={onSubmitHandler}>
        Search
      </button>
    </div>
  );
};

export default InputCity;