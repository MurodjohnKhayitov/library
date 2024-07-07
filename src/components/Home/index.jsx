import React, { useState } from 'react'
import AddBook from '../AddBook'
import BookList from '../BookList'

function Home() {

  return (
    <div className=' '>
      <AddBook/>
      <BookList/>
    </div>
  )
}

export default Home