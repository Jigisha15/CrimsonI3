"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import "./main-top.css"

export function MainTop() {
	const [copied, setCopied] = useState(false);

	const couponCode = "JUNETDO";

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(couponCode);
			setCopied(true);

			setTimeout(() => {
				setCopied(false);
			}, 2000);
		} catch (error) {
			console.error("Failed to copy:", error);
		}
	};

	return (
		<div className="yellow-div">

			<div className="main-yellow-div">

				<div className="top-dark-div">
					早稲田大学様専用<span className="top-dark-div-span">10%</span>割引コード
				</div>

				<div className="bottom-text-div">

					{/* COPY SECTION */}
					<div className="copy-div">

						<div className="copy-text-div">

							<h1>
								{couponCode}
							</h1>

							<button
								type="button"
								onClick={handleCopy}
								aria-label="Copy coupon code"
							>
								{copied ? <Check size={20} /> : <Copy size={20} />}
							</button>

						</div>

						<div className="bottom-dark-yellow-div">
							クーポンコードがコピーされました!
						</div>

					</div>


					{/* DIVIDER */}
					<div className="grey-border-div"></div>


					{/* INSTRUCTIONS */}
					<ul className="right-list">

						<li>
							割引コードWASEDAをお見積もり・ご依頼フォームの右手にあるスペシャルコード入力欄にご入力ください。
						</li>

						<li>
							コード右のアイコンをクリックすると、
							コードがクリップボードにコピーされます
						</li>

					</ul>

				</div>

			</div>

		</div>
	)
}