import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {

  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    searchText(text)
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-yellow-100">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
          <button className="bg-red-500 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
            <p className="font-semibold text-xs">Search</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch
