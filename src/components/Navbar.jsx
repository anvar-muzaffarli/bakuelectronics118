import React , {useRef} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'


import Balans from './Balans'
const Navbar = ({total,money}) => {

  

  const closeBtnRef = useRef()
  const searchIconRef = useRef()
    // acilacaq pencere overlayRef
  const overlayRef = useRef()


    const closeOverlay = e => {
      const kliklenenElement = e.target
      // alert("Calisir")

      if(kliklenenElement.classList.contains('cross-icon')) {
        overlayRef.current.classList.remove('active')
      }
    }

    const openOverlay = e => {
        const kliklenenElement = e.target

        if(kliklenenElement.classList.contains('s-icon')) {
            overlayRef.current.classList.add('active')
        }
        // alert("Calisir")
    }



  return (
    <>
    <div className="overlay" ref={overlayRef} >
        <ImCross className='cross-icon' onClick={closeOverlay} ref={closeBtnRef}/>
        <input className='overlay-search-input' type="search" placeholder='Search in IT Brains Search' />
    </div>

    
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="	https://www.bakuelectronics.az/assets/img/logo.svg" alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="s-input">
        <input type="text" />
        <AiOutlineSearch className='s-icon' ref={searchIconRef} onClick={openOverlay} />
       

      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
          <a class="nav-link active text-danger" aria-current="page" href="/kampaniyalar">Kampaniyalar</a>
          <a class="nav-link" href="/magazalar">Mağazalar</a>
          <a class="nav-link" href="#"><Balans total={total} money={money}/></a>
          <a class="nav-link" href="#">143 </a>
        </div>
      </div>
    </div>
  </nav>

  </>
  )
}

export default Navbar