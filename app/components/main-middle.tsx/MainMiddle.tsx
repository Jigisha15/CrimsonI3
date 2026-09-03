"use client"

import "./main-middle.css"
import { useState } from "react"
import lady from "@/public/assets/main_section/lady.png"

export function MainMiddle() {
	const [activeTab, setActiveTab] = useState<'proofreading' | 'promotion'>('proofreading')

	return (
		<div className="center_content">
			<h1 className="research-promo-title-p">研究そのものに注力いただくための研究支援があります</h1>

			<div className="promo-tabs" role="tablist" aria-label="研究支援サービス">
				<button
					className={activeTab === 'proofreading' ? 'is-active' : ''}
					type="button"
					role="tab"
					aria-selected={activeTab === 'proofreading'}
					onClick={() => setActiveTab('proofreading')}>
					英文校正サービス
				</button>

				<button
					className={activeTab === 'promotion' ? 'is-active' : ''}
					type="button"
					role="tab"
					aria-selected={activeTab === 'promotion'}
					onClick={() => setActiveTab('promotion')}>
					研究プロモーションサービス
				</button>
			</div>


			<div className="promo-divs">
				<div className="promo-div1">
					<img src={lady.src} alt="" />
				</div>

				<div className="promo-div2">
					<h1 className="">
						論文アクセプトを支援
						分野の専門家による
						英文校正
					</h1>

					<h2 className="">
						最大3名の専門校正者が言語、論旨、内容を精査し
						論文の質を向上させます<br />
						AI使用論文にも対応。研究の背景や意図を汲み取り、
						丁寧な校正を行います。
					</h2>
				</div>
			</div>
		</div>
	)
}