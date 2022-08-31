import { WorkItem } from "../../components/Work";

const Work = () => {
  return (
    <WorkItem
      title="オーストラリア留学知恵袋"
      badge="2020"
      category="メディアサイト制作"
      url="https://ryugaku-chiebukuro.com/"
      stacks="webpack/ejs/Scss/WordPress/jQuery"
      img1="/images/works/thumbRyugaku.webp"
      img2="/images/works/thumbRyugaku2.webp"
      alt="オーストラリア留学知恵袋Webサイト画像"
      period="1ヶ月"
    >
      デザイン・WordPress構築を担当。既存テーマのJINとオリジナルテーマを使用しブログ機能を構築。
      <br />
      カスタム投稿機能、トップページにカテゴリ別投稿一覧表示など、WordPressの基本的な機能を実装
    </WorkItem>
  );
};
export default Work;
