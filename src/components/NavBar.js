import React, { useState } from 'react'

function NavBar(props) {

    const onClickHandler = e => {
        e.preventDefault();
        props.setSection(e.target.id);
        if (!active.isActive) {
            setActive(
                {
                    btn: e.target.id,
                    isActive: true
                }
            )
            e.target.classList.add('navbar__btn--active');
        }
        else{
            document.querySelector('.navbar__btn--active').classList.remove('navbar__btn--active');
            setActive(
                {
                    btn: e.target.id,
                    isActive: true
                }
            )
            e.target.classList.add('navbar__btn--active');
        }
    }

    const [active, setActive] = useState({ btn: '', isActive: false });
    return (
        <nav className='navbar'>
            <button id='xpath' className='navbar__btn navbar__btn--xpath' onClick={onClickHandler}>XPath</button>
            <button id='xmlfile' className='navbar__btn navbar__btn--xml' onClick={onClickHandler}>XML File</button>
            <button id='dtdfile' className='navbar__btn navbar__btn--dtd' onClick={onClickHandler}>DTD File</button>
            <button id='xsdfile' className='navbar__btn navbar__btn--xsd' onClick={onClickHandler}>XML Schema File</button>
        </nav>
    )
}

export default NavBar