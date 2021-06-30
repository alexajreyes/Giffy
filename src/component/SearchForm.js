import React, { useState } from 'react'

function Searchform({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  //----------
  const handleSubmit = evt => {
    evt.preventDefault()
    //navegar a otra pagina
    onSubmit({ keyword })
  }
  const handleChange = evt => {
    //capturamos el vaolor
    setKeyword(evt.target.value)
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
