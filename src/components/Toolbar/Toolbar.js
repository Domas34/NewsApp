import React from 'react';
import './Toolbar.sass'
import {useRef, useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import {FaSearch} from "react-icons/fa";


function Toolbar() {

    let searchRef = useRef()
    let history = useHistory()

    const [getError, setError] = useState('')

    function search() {
        setTimeout(() =>{setError('')}, 7500)
        if (searchRef.current.value.length > 40) {
            return setError('Too many symbols, max (40).')
        }
        if (searchRef.current.value.length === 0) {
            return
        }
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (format.test(searchRef.current.value)) {
            return setError('Please do not use prohibited symbols')
        }
        const param = encodeURI(searchRef.current.value)
        fetch('http://localhost:3001/search/' + param).then(res => res.json())
        history.push('/search/' + param)
    }

    return (
        <div className='toolbar d-flex align-items-center justify-content-center-s column-s justify-content-between'>
            <Link to='/'>
                <img className='toolbar-logo' src="https://i.imgur.com/64OfA9W.png" alt=""/>
            </Link>
            <div>
                <p className='error no-margin no-padding'>{getError}</p>
                <div className='d-flex justify-content-center'>
                    <input onKeyPress={event => {
                        if (event.key === 'Enter') {
                            search()
                        }
                    }} ref={searchRef} type="text" className='search-input' placeholder='Search for articles...'/>
                    <div className='search-button' onClick={() => search()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className='d-flex align-items-center no-padding no-margin'><FaSearch/></p>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Toolbar;