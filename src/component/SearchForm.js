import React, { useState } from 'react'

function Searchform({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleChange = evt => {
    //capturamos el vaolor
    setKeyword(evt.target.value)
  }
  //----------
  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmit({ keyword })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search a gif here ..."
        type="text"
        value={keyword}
        onChange={handleChange}
      />
    </form>
  )
}
export default React.memo(Searchform)
