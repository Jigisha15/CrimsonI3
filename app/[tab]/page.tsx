import { notFound } from "next/navigation";
import "./tab-page.css"

const tabContent: Record<string, {
	title: string;
	description: string;
}> = {
	"english-proofreading": {
		title: "英語ネイティブの英文校正",
		description: "英語ネイティブによる英文校正サービスです。",
	},

	"journal-support": {
		title: "ジャーナル投稿支援",
		description: "学術ジャーナルへの投稿をサポートします。",
	},

	"academic-ai": {
		title: "学術AIツール",
		description: "研究者向けのAIツールをご紹介します。",
	},

	"academic-translation": {
		title: "学術翻訳",
		description: "専門的な学術翻訳サービスです。",
	},

	"about": {
		title: "エナゴについて",
		description: "エナゴについてご紹介します。",
	},

	"faq": {
		title: "FAQ＆学習リソース",
		description: "よくある質問と学習リソースです。",
	},
};

export default async function TabPage({
	params,
}: {
	params: Promise<{ tab: string }>;
}) {
	const { tab } = await params;

	const content = tabContent[tab];

	if (!content) {
		notFound();
	}

	return (
		<>
			<nav aria-label="breadcrumb nav-breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><a href="/">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Current Page</li>
				</ol>
			</nav>

			<div className="card tab-card">
				<div className="card-body">
					<h1>{content.title}</h1>
					<p>{content.description}</p>
				</div>
			</div>
		</>
	);
}