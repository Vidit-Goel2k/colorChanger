const Input = (
    { colorValue, setColorValue, isDarkText, setIsDarkText }
  ) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
            type="text" 
            id="colorInput" 
            placeholder="Add Color Name"
            autoFocus
            required
            value={colorValue}
            onChange={(e)=>setColorValue(e.target.value)}
        />
        <button
          type="button"
          onClick={()=>{setIsDarkText(!isDarkText)}}
        >
          Toggle Text Color
        </button>
    </form>
  );
};

export default Input;
