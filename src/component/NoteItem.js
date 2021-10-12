import React, { useState } from 'react'

function NoteItem(props) {
  const [state, setstate] = useState(1);
  const handleClick=()=>{
    if(state===1)
    {
setstate(2);

    }
    else{
setstate(1);

    }
  }
    return(
<>
{
  // console.log(localStorage.getItem(props.data.id))
 
}
        <div className="card col-md-3 mx-3 my-3">
           
  <div class="card-body">
    <h5 class="card-title">{state===1?props.data.name:props.data.last}</h5>
    <a href="#" class="btn btn-primary" onClick={handleClick}>{state===1?"show last name":"show firts name"}</a>
 
  </div>
        </div>
        </>
    )
}

export default NoteItem
