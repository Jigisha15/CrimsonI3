import { Check, ChevronRight, Crown, Gem, Play, Users } from "lucide-react";
import "./main-bottom.css"
import vip_editor from "@/public/assets/video_section/vip_editor.svg"

const plans = [
	{
		id: 1,
		name: 'ノーマル英文校正',
		icon: Crown,
		color: 'muted',
		price: '5.5',
		description: '原稿の文章が「英語として正しいか」を重点的にチェックし添削する英文校正サービスです。徹底的な文法チェックに加え、専門用語の用法・スペルも精査し、正確で読みやすい論文英語に仕上げます。',
		checks: ['10%単語割引', '原稿評価カルテ（詳細版1ページ）', '投稿規程チェック', '英文校正証明書']
	},
	{
		id: 2,
		name: 'アドバンス英文校正',
		icon: Crown,
		color: 'gold',
		price: '10',
		description: '英語の文法チェックに加え、論旨の展開や内容の妥当性にまで踏み込んで文章を分析し、より説得力のある英文を提案する校正サービスです。論文としての構成もチェックして、英語原稿全体の質を高めます。',
		checks: ['20%単語割引', '原稿評価カルテ（詳細版4ページ）', '投稿規程チェック', '英文校正証明書', '英文カバーレター']
	},
	{
		id: 3,
		name: 'トップインパクト英文校正',
		icon: Gem,
		color: 'blue',
		price: '27',
		description: '英語論文の言語や構造のチェックに加え、学術的内容も精査し、インパクトファクターの高いトップジャーナルへの研究論文掲載をサポート。ジャーナル投稿前の論文改善につながる事前査読が無料で含まれます。',
		checks: ['20%単語割引', 'トップインパクトレポート', '原稿評価カルテ（論文診断レポート）', '投稿規程チェック', '英文校正証明書', '英文カバーレター', '盗用・剽窃チェック']
	},
]

export function MainBottom() {

	return (
		<div className="plans">
			{plans.map((plan) => {
				const Icon = plan.icon;
				return (
					<article className="plan-card" key={plan.id}>
						<div className="top-div">
							<div
								className={`plan-icon ${plan.color}`}>
								<Icon size={38} />
							</div>

							<div
								className="plan-meta">
								<span className="recommended">
									{plan.color === 'gold' ? 'おすすめ' : plan.color === 'blue' ? '模擬査読付き' : ''}
								</span>

								<span className="people">
									<Users size={15} />
									{plan.color === 'blue' ? '3名体制' : '2名体制'}</span>
							</div>
						</div>

						<h3>{plan.name}</h3>

						<h4>校正内容</h4>

						<p>{plan.description}</p>

						<div className="vip">
							<img src={vip_editor.src} alt="" />
							<span>最高評価の校正者による<br />VIP校正者パックも</span>
						</div>

						<div className="price">
							1単語 <strong>{plan.price}</strong> 円〜
						</div>

						<h4>英文校正につく無料特典</h4>

						<ul>{plan.checks.map(check =>
							<li key={check}>
								<Check size={16} />{check}</li>
						)}
						</ul>

						<h4 className="after">ご校正後のアフターサービス</h4>

						<div className="service-list">
							<div>ライティングアドバイス <b>無料</b>
								<span>1年間</span>
							</div>

							<div>査読対応オプション <b>無料</b>

								<span>1年間</span>
							</div>

							<div>あんしん保証（無制限再校正） <b>無料</b><span>1年間</span>
							</div>

							<div>担当校正者Q&A <b>無料</b><span>1年間</span>
							</div>

						</div>

						<a className="details" href="#">{plan.name}の詳細へ　<ChevronRight size={20} /></a>
					</article>
				)
			})}
		</div>
	)
}