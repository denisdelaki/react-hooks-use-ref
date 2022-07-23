import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
function handleMeasureClick() {
  const div = elementRef.current
  console.log("measurements:", div.getBoundingClientrect())
}
  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClickCapture={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;
