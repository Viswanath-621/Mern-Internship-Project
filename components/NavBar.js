import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <header>
			<a href="#" className="viswa-logo">Track Up</a>

			<ul className="viswa-navlists">
				<li>
					<a href=""
						>HOME</a
					>
				</li>
				<li>
					<a href=""
						>DASHBOARD</a
					>
				</li>
				<li><a href="">PROJECTS</a></li>
				<li><a href="#">NOTIFICATIONS </a></li>
				<li><a href="#">ANALYTICS</a></li>
				<li>
					<a href="">CONTACT ME</a>
				</li>
			</ul>

			<div className="bx bx-menu" id="menu-icon"></div>

        </header>
  )
}
