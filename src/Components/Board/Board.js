import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import EditableCard from '../EditableCard/EditableCard'
import './Board.css'
function Board() {
    return (
        <div className='Board'>
            <div className='Board-top'>
                <p className='Board-top-title'> To do   <span> 2</span></p>
                <MoreHorizontal />
            </div>
            <div className='Board-cards custom-scrolbar'>
                <Card />
                <Card />
                <EditableCard />
            </div>
        </div>
    )
}

export default Board