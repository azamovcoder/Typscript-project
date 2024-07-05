import "./Hero.scss"

import {FC, Fragment} from 'react'

import HeroBox from "../../assets/hero-box.png"

const Hero: FC = () => {
  return (
    <Fragment>
        <div className="hero">

            <div className="hero__box">
                <img src={HeroBox} alt="" />
            </div>
            <p className="hero__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
        </div>
    </Fragment>
  )
}

export default Hero