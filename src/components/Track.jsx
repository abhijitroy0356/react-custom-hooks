
import { memo } from "react";

const Track = memo(({ todo }) => {
  return (
    <div>
      <div>{todo.todo}</div>
      <button>{todo.completed ? 'Done' : 'Not Done'}</button>
      <br />
    </div>
  );
});

export default Track