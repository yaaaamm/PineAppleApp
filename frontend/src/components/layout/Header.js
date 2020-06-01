import React from 'react';
import  { Link } from 'react-router-dom'


function Header() {
    return(
            <header>
                <div className="container mt-10">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Главная</Link>
                    </li>
                     <li className="nav-item">
                    <Link className="nav-link" to="/person_add">Добавить контакт</Link>
                     </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/person_list">Список контактов</Link>
                    </li>
                    </ul>
                    </div>
            </header>

    )
}


export default Header;