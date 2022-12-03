import { WorkItem } from "../../components/Work"

const Work = () => {
  return (
    <WorkItem
      title='おうちでフィリピン留学'
      badge='2020'
      category='オンライン英会話教室運営サイト'
      url='https://english-philippines.com/'
      stacks='webpack/ejs/Bootstrap/WordPress/jQuery'
      img1='/images/works/thumbPhilippines.webp'
      img2='/images/works/thumbPhilippines2.webp'
      alt='おうちでフィリピン留学Webサイト画像'
      period='3ヶ月'
    >
      デザイン・WordPress構築を担当。既存テーマのJINとオリジナルテーマを使用しブログ機能を構築。
      <br />
      17ページの固定ページコーディング、カスタム投稿機能、カテゴリ別のタブ表示など、WordPressの基本的な機能を構築。
    </WorkItem>
  )
}
export default Work
