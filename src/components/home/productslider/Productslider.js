import React, { useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux'
import { getproduct } from '../../../actions/ProductActions';
import { CircularProgress } from '@mui/material';
import Product from './Product';




export const PreviousBtn = ({ className, onClick, style }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: 'blue' }} fontSize='medium' />
    </div>
  )
}

export const NextBtn = ({ className, onClick, style }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: 'blue' }} fontSize='medium' />
    </div>
  )
}






const Productslider = ({ category, page }) => {

  const { products, loading } = useSelector(state => state.AllProducts)
  const dispatch = useDispatch()
  const val = products && products[category] ? Math.min(products[category].length, 5) : 5;

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: val,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };


  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getproduct("", "", "", page, category, 0, category))
  }, [category, dispatch, page])

  return (
    <div className='flex mt-4 bg-white border-3 shadow-sm'>
      {/* left side */}

      {/* right side */}
      <div className=' flex-1 py-2 overflow-hidden'>
        <div className=' border-b p-4'>
          <h1 className=' text-xl font-bold capitalize'>Best of {category}</h1>
          <div  className='' style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
        <div id = "products_list" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/MSO/Phase1/PC/01_400x400._CB577719316_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/MSO/Phase1/PC/02_400x400._CB577719316_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/MSO/Phase1/PC/03_400x400._CB577719316_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/MSO/Phase1/PC/04_400x400._CB577719316_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/MSO/Phase1/PC/06_400x400._CB577719316_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        </div>
        </div>
        <div className=' border-b p-4'>
          <h1 className=' text-xl font-bold capitalize'>Shop deals in top categories</h1>
          <div  className='' style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
        <div id = "products_list" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/CentralPage/Shovler/D96279181_INWLD_Jupiter_CentralPage-Inputs_DesktopShoveler_400x400_2._CB578799628_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Halo/Centralstore/DesktopShoveler_400x400._CB578703747_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/OHL/23/Central/Footer/card/jupiter/Shoveler/DesktopShoveler_400x400_2x_1._CB576780577_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG_22/Varun/jupiter/23/CH/Header/DesktopShoveler_400x400_LATV._CB578771166_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        <div id = "d-flex" >
          <a href='#'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/PCShoveler/fashion-400-400._CB576770209_.jpg' style={{height:230,width:200}}></img></a>
        </div>
        </div>
        </div>

        <div className='p-3 flex justify-center'>
          {!loading ?
            <div className=' w-full '>


              <Slider {...settings}>
                {
                  products && products[category] && products[category].map((elem, index) => {

                    return (
                      <Product key={index} elem={elem} index={index} />
                    )
                  })

                }
              </Slider>
            </div>
            : <CircularProgress className=' text-center' />
          }
        </div>


      </div>
    </div>
  )
}

export default Productslider