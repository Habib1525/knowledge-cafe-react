
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
   const [bookmarks, setbookmarks] = useState([]);
   const [readingtime, setreadingtime] = useState(0);

   const handleAddToBookmark =  blog =>{
    const newBookmarks = [...bookmarks, blog]
    setbookmarks(newBookmarks);
   }
   const handlemarkasread =(id, time)=>{
    const newreadingtime =readingtime + time;
    setreadingtime( newreadingtime);

    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id!==id);
    setbookmarks(remainingBookmarks);
     
   }

  return (
    <>
      <Header ></Header> 
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handlemarkasread={handlemarkasread}></Blogs> 
        <Bookmarks bookmarks={bookmarks} readingtime={readingtime} ></Bookmarks>
      </div>  
    </>
  )
}

export default App
