'use client'

import { useState } from "react"
import "./video.css"
import person1 from "@/public/assets/video_section/person1.png"
import person2 from "@/public/assets/video_section/person2.png"
import person3 from "@/public/assets/video_section/person3.png"

const videoContent = [
	{
		id: 1,
		image: person1,
		h1Text: "千葉大学大学院理学研究院",
		pText: "泉 康雄 教授"
	},
	{
		id: 2,
		image: person2,
		h1Text: "綌合研究大学院大学",
		pText: "久堀 徹先生"
	},
	{
		id: 3,
		image: person3,
		h1Text: "日本大学文理学部社会学科",
		pText: "石岡丈昇 教授"
	},
]

export function Video() {
	return (
		<div className="video-section">

			<div className="video-heading">
				<h1 className="vs-h1">
					エナゴご利用者の声
				</h1>

				<p className="vs-p">
					「ハズレがない」「信頼できる」 エナゴをご利用いただいた研究者の
					ご感想を約2分30秒の動画でお聞きください。
				</p>
			</div>

			<div className="video-div">

				{videoContent.map((vc) => (
					<div
						key={vc.id}
						className="image-text-container"
					>
						<img
							src={vc.image.src}
							alt={vc.h1Text}
							className="background-image"
						/>

						<div className="overlay-text">
							<h1>{vc.h1Text}</h1>
							<p>{vc.pText}</p>
						</div>
					</div>
				))}

			</div>

		</div>
	);
}