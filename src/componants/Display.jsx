function Display({ displayValue }) {
  return (
    <div className="display">
      <input
        type="text"
        name="display"
        id="display"
        placeholder="display"
        value={displayValue}
        readOnly
      />
    </div>
  );
}

export default Display;
