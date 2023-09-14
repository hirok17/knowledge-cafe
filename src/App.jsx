import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadtime] =useState(0);

  const handelBookmark=(blog)=>{
    const newBookmarks=[...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  
  const handeltime=(time, id)=>{
  const newTime=readTime + time;
  setReadtime(newTime);
  
  const remainingbook=bookmarks.filter(bookmark => bookmark.id !==id);
  setBookmarks(remainingbook);
  }
 
  return (
    <>
      <Header></Header>
      <div className='container mx-auto md:flex gap-2 justify-center mt-8 mb-8'>
        <Blogs handelBookmark={handelBookmark} handeltime={handeltime}></Blogs>
        <Bookmark bookmarks={bookmarks} readTime={readTime}></Bookmark>
      </div>
   
     
    </>
  )
}

export default App
