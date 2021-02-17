import React from 'react'

const MainMenu = () => {
    return (
        <nav className="collapse navbar-collapse">
            <ul className="header-nav nav navbar-nav">
                <li className="active">
                    <a href="index.html">Home</a>
                </li>

                <li className="menuparent">
                    <a href="about.html">About</a>

                    <ul className="submenu">
                        <li><a href="pastors.html">Pastors</a></li>
                        <li><a href="sermon-detail.html">Sermon Detail</a></li>
                        <li><a href="detail.html">Post Detail</a></li>
                    </ul>
                </li>  

                <li>
                    <a href="sermons.html">Sermons</a>
                </li>

                <li>
                    <a href="events.html">Events</a>
                </li>

                <li>
                    <a href="blog.html">Blog</a>
                </li>

                <li>
                    <a href="contact.html">Contact</a>
                </li>                        
            </ul>        
        </nav>
    )
}

export default MainMenu