import {MdDeleteForever} from 'react-icons/md'

const Note = () => {
    return(
        <div className="note">
            <span>Hello! This is the first note.</span>
            <div className="note-footer"></div>
                <small>13/04/2021</small>   
                <MdDeleteForever className="delete-icon" size="1.3em"/>   
        </div>
    )
}

export default Note;