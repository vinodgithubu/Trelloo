import React, { useState } from 'react'
import { X } from 'react-feather'
import './EditableCard.css'
function EditableCard({ text, placeholder, btnText, onSubmit, addBtnClass, editeClass }) {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <div className='EditableCard'>
            {showEdit ?
                <form className={`EditableCard-edit ${editeClass || ""}`} onSubmit={(e) => {
                    e.preventDefault();
                    if (onSubmit) {
                        onSubmit();
                    }
                }}>
                    <input type="text" defaultValue={text} placeholder={placeholder || "Enter item"} />
                    <div className='EditableCard-footer' >
                        <button type="submit">{btnText || "Add"}</button>
                        <X onClick={() => setShowEdit(false)} />
                    </div>
                </form>
                :
                <p className={`EditableCard-display ${addBtnClass || ""}`} onClick={() => setShowEdit(true)}>{text || "Add card"}</p>
            }
        </div>
    )
}

export default EditableCard