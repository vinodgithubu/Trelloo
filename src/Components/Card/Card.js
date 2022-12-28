import React from 'react'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import './Card.css'
function Card() {
    return (
        <div className='Card'>
            <div className='Card-top'>
                <div className='Card-labels'>
                    <Chip text="Prod" bgColor="green" closeBtn={true} ></Chip> 
                </div>
                <MoreHorizontal />
            </div>
            <div className='Card-title'>Dept create</div>
            <div className='Card-bottom'>
                <p> <Clock />24 Spet </p>
                <p> <CheckSquare />2/4 </p>
            </div>
        </div>
    )
}

export default Card