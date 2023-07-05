import React, { memo } from 'react'

function Child(props) {
  console.log('I am also here!');

  // Crazy calculation --> 

  const incrementChild = () => {
    props.updateChildCounter(Math.random());
  }

  return (
    <div>
        <p>{props.childCount}</p>
        <button onClick={incrementChild}>Increment Child</button>
    </div>
  )
}


export default memo(Child);
