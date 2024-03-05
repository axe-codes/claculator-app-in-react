const CalButtons = ({ btns, onBtnClick }) => {
  return (
    <div className="calbtn">
      {btns.map((item, index) => (
        <button
          id={`button_${index}`}
          className="c-btn"
          onClick={(event) => onBtnClick(item, event)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CalButtons;
