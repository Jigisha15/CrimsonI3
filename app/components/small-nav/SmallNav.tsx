"use client";

import { useState } from "react";
import { ChevronDown, House, Menu, X } from "lucide-react";
import Link from "next/link";
import "./small-nav.css"

const tabs = [
	{
		label: "英語ネイティブの英文校正",
		href: "/english-proofreading",
	},
	{
		label: "ジャーナル投稿支援",
		href: "/journal-support",
	},
	{
		label: "学術AIツール",
		href: "/academic-ai",
	},
	{
		label: "学術翻訳",
		href: "/academic-translation",
	},
	{
		label: "エナゴについて",
		href: "/about",
	},
	{
		label: "FAQ＆学習リソース",
		href: "/faq",
	},
];

const tabContent = [
	"英語ネイティブの英文校正",
	"ジャーナル投稿支援",
	"学術AIツール",
	"学術翻訳",
	"エナゴについて",
	"FAQ＆学習リソース",
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
						{/*{tabs.map((tab, index) => (
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
						))}*/}
						{tabs.map((tab) => (
							<Link
								key={tab.label}
								href={tab.href}
								className="btn main-tab"
							>
								<span>{tab.label}</span>
								<ChevronDown size={20} className="btn-span" />
							</Link>
						))}
					</div>
				</div>
				{/*<h2>{tabContent[selectedTab]}</h2>*/}

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

							{/*{tabs.map((tab, index) => (
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
							))}*/}

							{tabs.map((tab, index) => (
								<Link
									key={tab.label}
									href={tab.href}
									className={`mobile-tab ${selectedTab === index ? "is-selected" : ""
										}`}
									onClick={() => handleTabClick(index)}
								>
									<span>{tab.label}</span>
									<ChevronDown size={18} />
								</Link>
							))}
						</div>
					)}

				</div>

			</div>
		</nav>
	)
}