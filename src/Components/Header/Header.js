import React from 'react'

import burger from '../../Assets/images/burger_line_list.png'
import settings from '../../Assets/images/settings.png'
import arrowDown from '../../Assets/images/ArrowDown.png'

import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left wrapper">
          <button className="header__left-burger">
            <img className="icon" src={burger} alt="BurgerIcon" />
          </button>
          <a className="logo" href="#">
            Stand
          </a>
        </div>
        <div className="header__right wrapper">
          <button className="header__right-settings">
            <img className="icon" src={settings} alt="SettingsIcon" />
          </button>
          <div className="header__right-user">
            <p>Палади Максим</p>
            <img
              className="header__right-userIcon"
              src={arrowDown}
              alt="ArrowIcon"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
