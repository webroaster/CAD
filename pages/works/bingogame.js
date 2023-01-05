import { Link } from "@chakra-ui/react"
import { WorkItem } from "../../components/Work"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Work = () => {
  return (
    <WorkItem
      title='BINGO Game'
      badge='2023'
      category='Webアプリ - BINGO Game'
      url='https://bingogame-three.vercel.app/'
      stacks='JavaScript/Next.js/Vercel'
      img1='/images/works/bingogame1.webp'
      img2='/images/works/bingogame2.webp'
      alt='ビンゴゲーム'
      period='20時間'
    >
      簡単なアプリケーションとしてビンゴゲームを作成。ランダムな数字を重複なしで抽出するビンゴボールや、数字の並びの制約があるビンゴカードを生成するビンゴカード等のクラスを作成し、Next.jsで操作用のコンポーネントなどを構築。初めてWebサイト以外の制作物を最後までデプロイしました。
      <br />
      <Link href='https://github.com/webroaster/bingogame' target='_blank'>
        Github : https://github.com/webroaster/bingogame
        <ExternalLinkIcon mx='2px' />
      </Link>
    </WorkItem>
  )
}
export default Work
