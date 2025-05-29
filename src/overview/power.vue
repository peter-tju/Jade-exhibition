<template>
  <div class="power-container">
    <div class="power-photo">
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

    <div class="power-content">
      <h2 class="power-title">
        玉之权道
        <div class="underline"></div>
        <div class="subtitle">The Political Symbolism of Jade</div>
      </h2>

      <div class="power-text">
        <p>
          玉，曾是沟通天地的神圣器物，随着文明进程的演化，逐渐成为王朝权力的物质象征。本展区聚焦玉器从西周至清代在政治语境中的演变，呈现其如何从宗教礼器转化为皇权的具象图腾，尤其突出“和田玉”在王权正统构建中的核心角色。
        </p>
        <p>        
          展览以西周“六瑞六器”确立玉器等级制度为起点，勾勒出玉器制度化进程；追踪和田玉如何从边疆贡品晋升为帝王专用，成为皇家玉玺、冠饰、玉带等的重要材料；并展出涵盖商至清的重要权力玉器实物，展示玉制品在材质、造型与佩戴规范中所蕴含的严密礼仪等级与政治逻辑。
        </p>
        <p>        
          互动地图将引领观众追溯“和田玉贡道”的历史路径，从昆仑山脉穿越千里抵达皇城，体现玉在帝国政治中的流通与象征路径。观众亦可参与“配玉等级”模拟互动，体验古代身份与佩玉之间的对应逻辑，亲身感受玉如何深度镶嵌进中华王朝的制度肌理与权力秩序之中。
        </p>
        <p>        
          这是一次理解“王以玉礼、国以玉治”的历史透视之旅。
        </p>
      </div>
    </div>
    <div class="power-links">
        <p class="link-intro">部分展品的 3D 数字展示：</p>
        <ul>
            <li>
            <a
                href="https://www.dpm.org.cn/shuziwenwu/247772.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                清朝碧玉龙纽“武功十全之宝”
            </a>
            </li>
        </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewPower',
  data() {
    return {
      images: [
        require('@/assets/power_1.jpg'),
        // require('@/assets/power_2.jpg'),
        // require('@/assets/power_3.jpg'),
        // require('@/assets/power_4.jpg'),
        // require('@/assets/power_5.jpg'),
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
.power-container {
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

.power-photo {
  padding-top: 80px;
  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.power-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.power-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.power-title {
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

.power-text p {
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
  .power-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .power-photo,
  .power-content {
    flex: 1 1 100%;
  }
}

.power-links {
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

.power-links ul {
  list-style-type: disc;
  padding-left: 20px;
}

.power-links li {
  margin-bottom: 8px;
}

.power-links a {
  color: #00695c;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.power-links a:hover {
  color: #004d40;
  text-decoration: underline;
}

</style>
