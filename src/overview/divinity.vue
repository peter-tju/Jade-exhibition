<template>
  <div class="divinity-container">
    <div class="divinity-photo">
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

    <div class="divinity-content">
      <h2 class="divinity-title">
        玉之神性
        <div class="underline"></div>
        <div class="subtitle">Origin of Jade</div>
      </h2>

      <div class="divinity-text">
        <p>
          “天地之间，玉为媒介。” 在远古时代，玉不仅是装饰品，更是沟通天地、连接人神的重要载体。本展区追溯玉器的宗教起源与神秘意义，聚焦其在祭祀、巫仪与神灵信仰中的核心角色。
        </p>
        <p>        
          从红山文化中象征祖先图腾的“玉龙”，到良渚文化“通天之器”玉琮、玉璧，玉被赋予穿越天地、沟通神明的力量。巫觋通过玉器祈福请神、驱邪纳吉，奠定了玉器在中华宗教实践中的神圣地位。进入商代，玉人、玉佩等继续承担沟通阴阳、护佑族群的职能，展现玉之神性的延续与演变。
        </p>
        <p>        
          本展通过珍贵实物与高精度VR复原展示红山“玉巫人”与良渚玉器，并辅以巫文化复原模型与互动视频，使观众沉浸式体验“以玉通神”的精神世界。您将在这片展区中，感受玉器在上古信仰体系中的庄严与神秘，理解其为何被尊为“神灵之物”。
        </p>
      </div>
    </div>
    <div class="divinity-links">
        <p class="link-intro">部分展品的 3D 数字展示：</p>
        <ul>
            <li>
            <a
                href="https://www.dpm.org.cn/shuziwenwu/246698.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                玉琮（良渚文化）
            </a>
            </li>
            <li>
            <a
                href="https://www.dpm.org.cn/shuziwenwu/247453.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                玉巫人（红山文化）
            </a>
            </li>
        </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewDivinity',
  data() {
    return {
      images: [
        require('@/assets/divinity_1.jpg'),
        require('@/assets/divinity_2.jpg'),
        require('@/assets/divinity_3.jpg'),
        require('@/assets/divinity_4.jpg'),
        require('@/assets/divinity_5.jpg'),
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
.divinity-container {
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

.divinity-photo {
  padding-top: 80px;
  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.divinity-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.divinity-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.divinity-title {
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

.divinity-text p {
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
  .divinity-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .divinity-photo,
  .divinity-content {
    flex: 1 1 100%;
  }
}

.divinity-links {
  margin-top: 24px;
  padding: 16px;
  background-color: #f5f5f5;
  border-left: 4px solid #00796b;
  border-radius: 8px;
}

.link-intro {
  font-weight: 600;
  color: #004d40;
  margin-bottom: 8px;
}

.divinity-links ul {
  list-style-type: disc;
  padding-left: 20px;
}

.divinity-links li {
  margin-bottom: 8px;
}

.divinity-links a {
  color: #00695c;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.divinity-links a:hover {
  color: #004d40;
  text-decoration: underline;
}

</style>
