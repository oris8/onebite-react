export default function Button(props) {
  return (
    <>
      <button>{props.text}</button>
    </>
  );
}

Button.defaultProps = {
  color: "black",
};
