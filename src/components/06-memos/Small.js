import React from 'react'

// memo renders the component only if there is any change to its elements
export const Small = React.memo(({ value }) => {

  console.log('Me volví a llamar :(');

  return (
    <small>
      { value }
    </small>
  )
});
