import "./Header.scss"

import {FC, Fragment, useState} from 'react'

import { AiOutlineSearch } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import EnterImg from "../../../assets/enter.svg"
import { FaBarsStaggered } from "react-icons/fa6";
import LogoImg from "../../../assets/logo.svg"
import PhoneImg from "../../../assets/phone.svg"

const Header:FC = () => {

    const [show, setShow]= useState<boolean>(false)
    
  return (
    <Fragment>
        <div className={`header__overlay ${show ? 'header__overlay__show' : ''}`  }
        onClick={():void=> setShow( false) }
                     
        ></div>
        <div className="header">

        <div className=" header__info container-min">
            <div className="header__info__item">
            <img src={PhoneImg} alt="phone.svg" />
            <p>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
            </div>
            <div className="header__info__item">
                <img src={EnterImg} alt="door.svg" />
                <p>Войти / Регистрация</p>
            </div>
        </div>
        </div>
        <header>
            <div className="header">
                <div className="header__main container-min">
                    <div className="header__logo">
                        <img src={LogoImg} alt="" />
                    </div>
                    <ul className={`header__list ${show ? 'header__list__show' : ''}  `} >
                        <li>
                            <span>Понравилось</span>
                        </li>
                        <li>
                            <span>личный кабинет</span>
                        </li>
                        <li>
                            <span>настройки</span>
                        </li>
                        <li>
                            <BiCart fontSize={`20px`} />
                        </li>
                        <li>
                           <AiOutlineSearch  fontSize={`20px`}  />
                        </li>
                           
                    </ul>
                    <button onClick={():void=> setShow((prev:boolean)=> !prev) }
                     className="header__bar"> <FaBarsStaggered/></button>
                </div>
            </div>
        </header>

    </Fragment>
  )
}

export default Header