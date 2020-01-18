import React from 'react'
// import NavItems from './NavItems'

const NavBar = (props) => {
    return (<div className='navItems'>

        <button>Travel</button>
        <button>{<a href="/map">Location</a>}</button>
        <button>WishList</button>
        <button>{<a href="/buds">Buds</a>}</button>
    </div>

    )
}
export default NavBar