import "./hero.css"

import long_bg from "@/public/assets/hero_section/long_bg.png"
import team from "@/public/assets/hero_section/team.png"
import earth from "@/public/assets/hero_section/earth.png"
import blue_icon from "@/public/assets/hero_section/blue_icon.png"

export function Hero() {
	return (
		<div className="">
			<div className="hero-section">

				{/* LEFT SIDE */}
				<div className="left-div">

					<img
						src={long_bg.src}
						className="bg-yellow-image"
						alt="Full size horizontal image"
					/>

					<div className="left-text-div">

						<h1 className="main-heading">
							早稲田大学関係者の皆さま
						</h1>

						<div className="description-span">
							<p className="p1">エナゴ（Enago）が</p>
							<p className="p2">研究成果の国際発信をお手伝いいたします</p>
						</div>

						<div className="image-text">

							<img
								src={blue_icon.src}
								className="blue-icon"
								alt="Blue icon image"
							/>
							<div className="blue-bg">
								エナゴのサービスは文部科学省の研究支援サービス・
								パートナーシップ（A-PRAS）に認定されています</div>

						</div>

					</div>

				</div>


				{/* RIGHT SIDE */}
				<div className="upper-images">

					<img
						src={team.src}
						className="team-image"
						alt=""
					/>

					<img
						src={earth.src}
						className="earth-image"
						alt=""
					/>

				</div>

			</div>
		</div>
	)
}