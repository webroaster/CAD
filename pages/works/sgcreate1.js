import { WorkItem } from "../../components/Work";

const Work = () => {
  return (
    <WorkItem
      title="SGクリエイト"
      badge="2021"
      category="個人メディアサイト制作"
      url="https://sgcreate1.com/"
      stacks="gulp/ejs/Scss/WordPress/parallax"
      img1="/images/works/thumbSgcreate1.webp"
      img2="/images/works/thumbSgcreate2.webp"
      alt="SGクリエイトWebサイト画像"
      period="1ヶ月"
    >
      企画設計・デザイン・WordPress構築を担当。既存テーマのJINを使用しブログ機能を構築。
      ブログやカスタム投稿機能を有し更新可能。
      <br />
      全体的に柔らかい雰囲気でシンプルなデザインで。
    </WorkItem>
  );
};
export default Work;
