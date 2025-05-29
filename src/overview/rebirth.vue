<template>
  <div class="rebirth-container">
    <div class="rebirth-photo">
      <div class="carousel">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            class="carousel-image"
            :alt="`轮播图 ${index + 1}`"
          />
        </div>
      </div>
    </div>

    <div class="rebirth-content">
      <h2 class="rebirth-title">
        玉之再生
        <div class="underline"></div>
        <div class="subtitle">Rebirth of Jade</div>
      </h2>

      <div class="rebirth-text">
        <p>
          曾象征帝王权威的玉，正经历一场文化再生的历程。从皇家礼制的巅峰跌落入寻常百姓的日常佩饰，玉的文化意义在当代被重新书写。本展区聚焦新时代背景下，玉器如何从权力象征转化为大众精神图腾与个性表达的载体，见证玉文化的去神圣化与再创造过程。
        </p>
        <p>        
          展览涵盖从奥运金镶玉奖牌、天宫玉徽章，到充满现代审美的当代玉雕艺术精品，呈现玉器在纪念、祝福、守护与艺术领域中的广泛功能。展品风格多元，从写实到抽象、从传统图腾到现代意象，展现出当代玉雕艺术家在材质与精神之间的探索与革新。
        </p>
        <p>        
          “玉护符”许愿墙与民调互动屏鼓励观众亲身参与，表达情感与态度，理解玉如何成为个人记忆、文化认同与时代情绪的融合物。“AI玉纹生成平台”则带来前所未有的跨界体验，邀请你与人工智能共同定义未来玉器的样貌。
        </p>
        <p>        
          在这里，玉不再是高高在上的王者之物，而是每一个人心中所寄托的精神符号——一块凝聚情感、象征守护、记录时代的“心之玉”。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewRebirth',
  data() {
    return {
      images: [
        require('@/assets/rebirth_1.jpeg'),
        require('@/assets/rebirth_2.png'),
        require('@/assets/rebirth_3.png'),
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.rebirth-container {
  display: flex;
  flex-direction: row; /* 强制左右布局 */
  justify-content: center;
  align-items: flex-start;
  padding-top: 120px; /* 导航栏高度 + 间距 */
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  gap: 48px;
}

.rebirth-photo {
  padding-top: 80px;
  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rebirth-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.rebirth-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.rebirth-title {
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

.rebirth-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

.carousel {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
  width: 100%;
}

.carousel-image {
  flex-shrink: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .rebirth-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .rebirth-photo,
  .rebirth-content {
    flex: 1 1 100%;
  }
}
</style>
