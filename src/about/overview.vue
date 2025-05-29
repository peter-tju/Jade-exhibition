<template>
  <div class="overview-container">
    <div class="museum-photo">
      <img src="@/assets/about_exhibition.jpeg" alt="关于展览" />
    </div>

    <div class="overview-content">
      <h2 class="overview-title">
        展览概况
        <div class="underline"></div>
        <div class="subtitle">Exhibition Overview</div>
      </h2>

      <div class="overview-text">
        <p>
          玉，作为自然的珍宝和文化的象征，跨越了亿万年地质演变与千年文明沉淀。
        </p>
        <p>
          本次展览由同济大学博物馆携手多家权威机构联合主办，聚焦玉石的科学本源与文化内涵，邀请您开启一场跨越时空的文明对话。本展览在学术主持周征宇教授与邓淑萍教授的深度指导下，由史彦彬、鲁卓然、郜哲锋与刘广阔等策展团队精心策划，融合地质科学、考古文化与当代艺术视角，系统呈现玉石从矿物质构造到精神符号的完整生命史。展览分为“玉之本源”、“玉之神性”、“玉之权道”与“玉之再生”四大篇章，透视玉石在自然与文化交汇中的独特价值。
        </p>
        <p>
          主办单位包括同济大学博物馆、同济大学宝玉石文化研究中心、陕西历史博物馆、良渚博物馆及上海自然博物馆，联合崔磊大师、张红哲大师、赵显志大师与郭石林大师玉雕工作室等协办，为展览注入丰富的学术资源与艺术力量。
        </p>
        <p>
          展览将于2025年7月15日至8月31日在同济大学博物馆隆重展出，诚邀公众走进玉石世界，感受从地壳深处到精神穹苍的文明传奇。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutOverview',
};
</script>

<style scoped>
.overview-container {
  display: flex;
  flex-direction: row; /* 强制左右布局 */
  justify-content: center;
  align-items: flex-start;
  padding-top: 140px; /* 导航栏高度 + 间距 */
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  gap: 48px;
}

.museum-photo {
  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.museum-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.overview-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.overview-title {
  font-size: 32px;
  font-weight: bold;
  color: #004d40;
  margin-bottom: 12px;
}

.underline {
  width: 100px;
  height: 3px;
  background-color: #004d40;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 2px;
}

.subtitle {
  font-size: 18px;
  font-weight: 600;
  color: #00796b;
  margin-bottom: 24px;
}

.overview-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .overview-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .museum-photo,
  .overview-content {
    flex: 1 1 100%;
  }
}
</style>