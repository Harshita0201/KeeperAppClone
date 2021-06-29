import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const[isExpanded, setExpanded]=useState(false);

  const [note, setNote]=useState({
    title :"",
    content:""
  });

  function handleChange(event){
     const {name, value} = event.target;
     setNote( prevNote=>{
       return {
         ...prevNote,
         [name]:value
       }
     })
  }  

  function submitNote(event){
    props.onAdd(note); //to pass the current create state of note to app.jsx where onAdd will add the note to array of notes
    setNote({
      title :"",
      content:""
    }); //to clear the inout area for adding new notes values
    event.preventDefault(); //to prevent page from refreshing 
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input 
          onChange={handleChange}
          name="title" 
          placeholder="Title" 
          value={note.title} /> : null}
        
        <textarea 
          onChange={handleChange}
          onClick={expand}
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1}
          value={note.content} />
        <Zoom in={isExpanded}>
           <Fab onClick={submitNote}>
             <AddIcon/>
           </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
