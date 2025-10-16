const Button = ({ title, className, style, onClick, display }) => {
  return (
    <div>
      <button
        className={`btn ${className}`}
        onClick={onClick}
        style={style}
        display={display}
      >
        {title}
      </button>
    </div>
  );
};
export default Button;
