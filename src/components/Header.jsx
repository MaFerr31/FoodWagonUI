import React from 'react'
import "@fontsource/source-sans-pro";
import logotype from '../assets/Logo.png'
import mapIcon from '../assets/map-marker-alt.png'
import searchIcon from '../assets/Search.png'
import user from '../assets/user.png'

const Header = () => {
  return (
    <div className='header'>
        <a href="/"><img className='header-img' src={logotype} alt="Logotipo" /></a>
        <p className='header-local'><span>Deliver to:</span>
            <img className='header-map' src={mapIcon} alt="Marcador de Mapa" /> 
            Current Location 
            <span className='header-map'>Mohammadpur Bus Stand, Dhaka</span>
        </p>
        <div className='header-icons'>
            <a className="header-search" href='/'><img src={searchIcon} alt="Icone de Busca" />Search Food</a>
            <a className="header-user" href="/"><img src={user} alt="Icone de Usuário" />Login</a>
        </div>

    </div>
  )
}

export default Header