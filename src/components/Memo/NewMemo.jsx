import { memo } from "react";

const NewMemo = (props) => {
    console.log('NewMemo render',props.newCount)
  return (
    <div>NewMemo{props.newCount}</div>
  )
}

export default memo(NewMemo);