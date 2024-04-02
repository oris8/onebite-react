import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    // 클릭이벤트처럼 동작하지만 결국 input요소의 값을 변경하는것이기 때문에 onChange로 작성
    onUpdate(id);
  };

  //List.jsx:30 Warning: Each child in a list should have a unique "key" prop. 때문에 체크박스에 readOnly

  return (
    <div className="TodoItem">
      <input
        readOnly
        onChange={onChangeCheckbox}
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
