import "./Footer.scss"

import  { FC, Fragment } from 'react'

import fooImg from "../../../assets/foot.png"

const Footer:FC = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className="container-min">
          
          <h3>наши бренды</h3>
          <div className="footer__cards">
              <img src={fooImg} alt="footer.png" />
              <img src={fooImg} alt="footer.png" />
              <img src={fooImg} alt="footer.png" />
              <img src={fooImg} alt="footer.png" />
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer