import { WorkItem } from "../../components/Work";

const Work = () => {
  return (
    <WorkItem
      title="Dressmaker"
      badge="2021"
      category="人材募集サイト（求人サイトLP）"
      url="https://dress-maker.com/"
      stacks="webpack/ejs/Scss/WordPress/jQuery"
      img1="/images/works/thumbDressMaker.webp"
      img2="/images/works/thumbDressMaker2.webp"
      alt="DressmakerWebサイト画像"
      period="1ヶ月"
    >
      企画設計・デザイン・WordPress構築を担当。WordPressオリジナルテーマで構築し、再利用できるコンポーネントを意識したコーディング。
      女性向けかつシンプルなデザイン。
    </WorkItem>
  );
};
export default Work;
