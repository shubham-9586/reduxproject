import React from 'react'
import Noteitem from './NoteItem'


 import PersonArray from '../PersonArray.js'  

function Notes() {

    return (
        <div>
         {
       PersonArray.map((data)=>{
        return <Noteitem data={data} />
       })

         }
        {/* <a href="/" className="btn btn-primary container" onClick={handleClick}>swap all</a> */}
        </div>
    )
}

export default Notes
