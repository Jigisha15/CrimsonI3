"use client"

import { useEffect, useState } from "react";
import { ChevronDown, Headset } from "lucide-react"
import "./navbar.css"

export function Navbar() {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navbar custom-navbar">
			<div className="container-fluid">

				{/* Logo */}
				<a className="navbar-brand" href="#">
					<h1 className="nav-item-h1">
						<span className="nav-item-h1-span">:</span>enago
					</h1>
				</a>

				{/* Hamburger */}
				<button
					className="navbar-toggler"
					type="button"
					onClick={() => setIsOpen((prev) => !prev)}
					aria-expanded={isOpen}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Menu */}
				<div className={`navbar-menu ${isOpen ? "open" : ""}`}>
					<div className="nav-left">

						<button
							type="button"
							className="btn circular-button btn-outline-dark"
						>
							<Headset size={18} />
							お問い合わせ
							<ChevronDown size={16} />
						</button>

						<button
							type="button"
							className="btn btn-outline-dark"
						>
							マイページへログイン
						</button>

						<a
							className="btn btn-primary"
							href="#"
						>
							マイページへログイン
						</a>

					</div>
				</div>

			</div>
		</nav>
	)
}