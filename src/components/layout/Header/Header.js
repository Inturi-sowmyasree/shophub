import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Primarydropdown from './Primarydropdown';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {

  const [toggleprimary, setToggleprimary] = useState(false)
  const [togglesecondary, setToggleSecondary] = useState(false)

  const { Products } = useSelector(state => state.Cart)
  const { user } = useSelector(state => state.User)


  const primarytoggle = () => {
    setToggleprimary(!toggleprimary)
  }
  const secondarytoggle = () => {
    setToggleSecondary(!togglesecondary)
  }

  const { pathname } = useLocation()
   

  useEffect(() => {
    setToggleprimary(false)
    setToggleSecondary(false)
  }, [pathname])




  return (
    <div className=' sticky z-50 py-2 top-0 p-1.2 capitalize w-full d-flex justify-center gap-10 flex items-center text-white' id = "header_color">

    {/* bg-[#923ca1] */}

      {/* logo and search container starts */}
      <div className='italic font-bold ' id = 'title'>
          <Link to={'/'}><h1 className='font-extrabold text-[1.32rem] '>ShopHub</h1> </Link>
          <h6 className=' text-xs'>Explore <span className=' text-yellow-300'>the every need <AddShoppingCartIcon sx={{ color:'grey', fontSize:'22px'}} /></span>  </h6>
        </div>
      <div className=' flex gap-8  justify-around items-center ' id='title'>
        
        <SearchBar />
      </div>
      {/* logo and search container ends */}

      {/* right container start */}
      <div className=' flex items-center gap-10 font-bold relative' >
        {
          user ?
            <div onClick={primarytoggle} className=' cursor-pointer flex gap-10'>
              <h1 className='capitalize'> {user.name}</h1>
              <span  className=' relative  cursor-pointer'>       
                  {toggleprimary ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </span>
            </div>
            :
            <>
              <button onClick={primarytoggle} className=' px-10 py-1 bg-white font-semibold   text-primary' id='login-button' >
                Login
              </button>
            </>

        }
        {toggleprimary && <Primarydropdown toggleprimary={toggleprimary} setToggleSecondary={setToggleprimary} />}

        <a href="/">Seller</a>


        {/* <span onClick={secondarytoggle} className=' relative  cursor-pointer'>More
          <span className=' px-1'>
            {togglesecondary ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </span> */}

        {/* {togglesecondary && <Secondarydropdown />} */}

{
        <NavLink to={'/cart'} className='cursor-pointer'>
          <span className=' px-1'> <Badge badgeContent={Products ? Products.length : 1} color='secondary'  ><ShoppingCartIcon fontSize='small' /></Badge> </span>
          cart
        </NavLink> }


      </div>
      {/* right container end */}

    </div>
  )
}

export default Header