import { Link } from "@chakra-ui/react"
import { WorkItem } from "../../components/Work"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Work = () => {
  return (
    <WorkItem
      title='ポケモンクイズ'
      badge='2023'
      category='Webアプリ - ポケモン名前当てクイズ'
      url='https://pokemon-quiz-one.vercel.app/'
      stacks='JavaScript/Next.js/Vercel'
      img1='/images/works/pokemon1.webp'
      img2='/images/works/pokemon2.webp'
      alt='ポケモンゲーム'
      period='2時間'
    >
      ポケモンAPIを使い、簡単なクイズアプリを作成。ランダムにポケモンの画像が抽出され、答えを押すと名前が表示される名前当てゲームです。友達などとこのポケモンなんだっけ？などと話しながら遊ぶと盛り上がります。
      <br />
      <Link href='https://github.com/webroaster/pokemon_quiz' target='_blank'>
        Github : https://github.com/webroaster/pokemon_quiz
        <ExternalLinkIcon mx='2px' />
      </Link>
    </WorkItem>
  )
}
export default Work
