"use client";

import { useState } from "react";
import { ChevronDown, House, Menu, X } from "lucide-react";
import "./small-nav.css"

const tabs = [
	{ label: "英語ネイティブの英文校正", hasMenu: true },
	{ label: "ジャーナル投稿支援", hasMenu: true },
	{ label: "学術AIツール", hasMenu: true },
	{ label: "学術翻訳", hasMenu: true },
	{ label: "エナゴについて", hasMenu: true },
	{ label: "FAQ＆学習リソース", hasMenu: true },
];

export function SmallNav() {
	const [selectedTab, setSelectedTab] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleTabClick = (index: any) => {
		setSelectedTab(index);
		setMenuOpen(false);
	};

	return (
		<nav className="navbar p-0 tab-bar-div">
			<div className="container-fluid p-0">

				{/* desktop */}
				<div className="desktop-tabs w-100 d-none d-md-flex align-items-center justify-content-center">

					<House className="home-icon shrink-0" />

					<div
						className="tabs-bar btn-group"
						role="group"
						aria-label="Main navigation"
					>
						{tabs.map((tab, index) => (
							<button
								key={tab.label}
								type="button"
								className={`btn main-tab ${selectedTab === index
									? "is-selected"
									: ""
									}`}
								aria-current={
									selectedTab === index
										? "page"
										: undefined
								}
								onClick={() => handleTabClick(index)}
							>
								<span>{tab.label}</span>
								<ChevronDown size={20} className="btn-span" />
							</button>
						))}
					</div>
				</div>

				{/* phone */}
				<div className="mobile-tabs d-md-none w-100">

					{/* Mobile Header */}
					<div className="mobile-tabs-header d-flex align-items-center justify-content-between">

						<House className="home-icon" />

						<button
							type="button"
							className="navbar-toggler mobile-menu-button"
							onClick={() => setMenuOpen((prev) => !prev)}
							aria-label="Toggle navigation"
							aria-expanded={menuOpen}
						>
							{menuOpen ? (
								<X size={26} />
							) : (
								<Menu size={26} />
							)}
						</button>

					</div>

					{/* Mobile Menu */}
					{menuOpen && (
						<div className="mobile-tabs-menu">

							{tabs.map((tab, index) => (
								<button
									key={tab.label}
									type="button"
									className={`mobile-tab ${selectedTab === index
										? "is-selected"
										: ""
										}`}
									onClick={() => handleTabClick(index)}
								>
									<span>{tab.label}</span>

									<ChevronDown size={18} />
								</button>
							))}

						</div>
					)}

				</div>

			</div>
		</nav>
	)
}