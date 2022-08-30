import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'

const Xo = () => {
    const [value, setValue] = useState(0)
    const [winner, setWinner] = useState('')
    let [gameValues, setgameValues] = useState(['', '', '', '', '', '', '', '', ''])
    //  console.log(gameValues.length)
    const hanldeUpdateValue = (e) => {
        if (gameValues[Number(e.currentTarget.attributes['index'].value)] || winner) {
            return e.preventDefault()
        }
        setValue(prev => prev + 1)
        // if(val > 2 && )
        value % 2 === 0 ? gameValues.splice(Number(e.currentTarget.attributes['index'].value), 1, 'X') : gameValues.splice(Number(e.currentTarget.attributes['index'].value), 1, '0')
        // console.log(gameValues)
        if (!winner) {
            checkWinner()
        }

    }
    function checkWinner() {
        // console.log(gameValues[0] , gameValues[1] , gameValues[2],gameValues[0] === gameValues[1] )
        const val = gameValues.toString().replace(/,/g, '').trim().length
        console.log(val, gameValues.toString().replace(/,/g, ''))
        if (val > 2 && gameValues[0] === gameValues[1] && gameValues[1] === gameValues[2] && gameValues[0] && gameValues[1] && gameValues[2]) {
            // alert('hello')
            gameValues[0] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
        if (val > 2 && gameValues[0] === gameValues[3] && gameValues[3] === gameValues[6] && gameValues[0] && gameValues[3] && gameValues[6]) {
            gameValues[0] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
        if (val > 2 && gameValues[2] === gameValues[5] && gameValues[5] === gameValues[8] && gameValues[2] && gameValues[5] && gameValues[8]) {
            gameValues[2] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
        if (val > 2 && gameValues[6] === gameValues[7] && gameValues[7] === gameValues[8] && gameValues[6] && gameValues[7] && gameValues[8]) {
            gameValues[6] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
        if (val > 2 && gameValues[0] === gameValues[4] && gameValues[4] === gameValues[8] && gameValues[0] && gameValues[4] && gameValues[8]) {
            gameValues[0] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
        if (val > 2 && gameValues[2] === gameValues[4] && gameValues[4] === gameValues[6] && gameValues[2] && gameValues[4] && gameValues[6]) {
            gameValues[2] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
        if (val > 2 && gameValues[3] === gameValues[4] && gameValues[4] === gameValues[5] && gameValues[3] && gameValues[4] && gameValues[5]) {
            gameValues[3] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
        if (val > 2 && gameValues[1] === gameValues[4] && gameValues[4] === gameValues[7] && gameValues[1] && gameValues[2] && gameValues[7]) {
            // alert(gameValues[1])
            gameValues[1] === 'X' ? setWinner('Player 1 Won 😍😍😍') : setWinner('Player 2 Won 😍😍😍')
        }
    }
    return (
        <div className='maincontainer '>
            <div className='mainRow'>
                <div className='border-end border-bottom border-dark d-flex justify-content-center flex-wrap'
                    onClick={(e) => hanldeUpdateValue(e)} index='0' >
                    <span >{gameValues[0]}</span></div>
                <div className=' d-flex justify-content-center flex-wrap border-end border-bottom border-dark'
                    onClick={(e) => hanldeUpdateValue(e)} index='1'>
                    <span >{gameValues[1]}</span></div>
                <div className=' d-flex justify-content-center flex-wrap border-bottom border-dark'
                    onClick={(e) => hanldeUpdateValue(e)} index='2'>
                    <span >{gameValues[2]}</span></div>
            </div>
            <div className='mainRow'>
                <div className=' d-flex justify-content-center flex-wrap border-end border-bottom  border-dark'
                    onClick={(e) => hanldeUpdateValue(e)} index='3'>
                    <span >{gameValues[3]}</span></div>
                <div className=' d-flex justify-content-center flex-wrap border-end border-bottom border-dark'
                    onClick={(e) => hanldeUpdateValue(e)} index='4'>
                    <span >{gameValues[4]}</span></div>
                <div className=' d-flex justify-content-center flex-wrap border-bottom border-dark'
                    onClick={(e) => hanldeUpdateValue(e)} index='5'>
                    <span >{gameValues[5]}</span></div>
            </div>
            <div className='mainRow'>
                <div className=' d-flex justify-content-center flex-wrap border-end  border-dark'
                    onClick={(e) => hanldeUpdateValue(e)} index='6'>
                    <span >{gameValues[6]}</span></div>
                <div className=' d-flex justify-content-center flex-wrap border-end  border-dark'
                    onClick={(e) => hanldeUpdateValue(e)} index='7'>
                    <span >{gameValues[7]}</span></div>
                <div className=' d-flex justify-content-center flex-wrap '
                    onClick={(e) => hanldeUpdateValue(e)} index='8'>
                    <span >{gameValues[8]}</span></div>
            </div>

            <Row className='mt-4'>
                {!winner ? <small className='fs-4 text-center text-dark'>Player {value % 2 === 0 ? '1' : ' 2'} turn</small> : ''}
            </Row>
            <Row>
                <small className='fs-4 text-center text-danger '>{winner} </small>
            </Row>
        </div>
    )
}

export default Xo