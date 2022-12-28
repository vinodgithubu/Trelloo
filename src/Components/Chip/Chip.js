import React from 'react'
import { X } from 'react-feather'
import './Chip.css'
function Chip({ text, closeBtn, bgColor, onClose }) {
    return (
        <div className='Chip' style={{ backgroundColor: bgColor }}>
            {text}
            {closeBtn && <X onClick={onClose ? onClose() : ""} />}
        </div>
    )
}

export default Chip;