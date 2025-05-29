<template>
  <div class="hall-container">
    <div class="hall-photo">
      <img src="@/assets/tongji_museum.jpg" alt="同济大学博物馆" />
    </div>

    <div class="hall-content">
      <h2 class="hall-title">
        关于展馆
        <div class="underline"></div>
        <div class="subtitle">About Exhibition Hall</div>
      </h2>

      <div class="hall-text">
        <p>
          同济大学博物馆坐落于同济大学四平路校区“上海市优秀历史保护建筑”一二九大楼内（一二九礼堂西侧），大楼始建于1942年，是一座有着透明门廊和长廊，白墙黑瓦，既现代又历史的建筑。得名于1948年1月29日发生的“反饥饿、反内战”的“一二九”运动。
        </p>
        <p>
          博物馆建筑面积4430平方米，地上三层。根据学校领导的指示，博物馆将以“为可持续而团结创新”为建设主题，利用同济大学收藏的相关文物、资料等文化财产所设立，致力于服务学校科研和文化发展，并将“以展建藏”、“展课互动”、“虚实结合”、“馆网幅射”为办馆特色。
        </p>
        <p>
          通过在展览中不断积累藏品，突出特色，打造品牌；将展览与课堂结合，实现展览与课堂、展示与教育、收藏与研究的互动；将实体的展览与虚拟的声、光、电等表现方式相结合，突出时代特点；通过线上线下联动发展，推广网上展览和网络课程，幅射更大范围，传播同济文化和精神。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutHall',
};
</script>

<style scoped>
.hall-container {
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

.hall-photo {
  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hall-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.hall-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.hall-title {
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

.hall-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .hall-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .hall-photo,
  .hall-content {
    flex: 1 1 100%;
  }
}
</style>