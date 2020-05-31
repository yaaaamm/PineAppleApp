import React from 'react';
import  { Link } from 'react-router-dom'


function Header() {
    return(
        <div className="container">
            <header>
                <nav className="nav justify-content-center">
                    <Link className="nav-link" to="/">Главная</Link>
                    <Link className="nav-link" to="/person_add">Добавить контакт</Link>
                    <Link className="nav-link active" to="/person_list">Список контактов</Link>
                </nav>
            </header>
        </div>
    )
}


export default Header;