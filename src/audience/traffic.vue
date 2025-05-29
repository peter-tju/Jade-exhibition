<template>
  <div class="traffic-container">
    <div class="traffic-photo">
      <img src="@/assets/tongji_traffic.jpg" alt="交通指引" />
    </div>

    <div class="traffic-content">
      <h2 class="traffic-title">
        交通指引
        <div class="underline"></div>
        <div class="subtitle">Traffic Guidence</div>
      </h2>

      <div class="traffic-text">
        <p>
            一、地铁出行（推荐）<br>
            地铁10号线：在 同济大学站 下车，从 3号口 出站即达校门，步行约1分钟。<br>
            地铁8号线：在 四平路站 下车，换乘公交或步行约15分钟可达校区。
        </p>
        <p>         
            二、公交线路<br>
            可乘坐以下公交车至四平路赤峰路站或附近站点：<br>
            55路、133路、140路、866路、937路等<br>
            下车后步行3-5分钟可抵达校区正门。
        </p>
        <p>      
            三、自驾出行<br>
            建议导航至：“同济大学（四平路校区）正门”<br>
            校内停车位紧张，建议提前规划停车位置，周边设有社会停车场，如同济广场地下停车库。
        </p>
        <p>
            四、从机场或火车站出发<br>
            虹桥交通枢纽：乘坐地铁10号线，约45分钟直达同济大学站<br>
            浦东国际机场：乘地铁2号线至南京东路，换乘10号线，约1小时15分钟<br>
            上海火车站：乘地铁4号线换乘10号线可达
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudienceTraffic',
};
</script>

<style scoped>
.traffic-container {
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

.traffic-photo {
  flex: 1 1 27%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.traffic-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.traffic-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.traffic-title {
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

.traffic-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .traffic-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .traffic-photo,
  .traffic-content {
    flex: 1 1 100%;
  }
}
</style>