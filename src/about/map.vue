<template>
  <div class="map-container">
    <div class="map-content">
      <h2 class="map-title">
        展览平面图
        <div class="underline"></div>
        <div class="subtitle">Exhibition Floor Plan</div>
      </h2>

      <div class="map-photo">
        <img src="@/assets/floor_map.jpg" alt="平面图" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMap',
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 140px; /* 导航栏高度 + 间距 */
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  gap: 48px;
}

.map-photo {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.map-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.map-title {
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

.map-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .map-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .map-photo,
  .map-content {
    flex: 1 1 100%;
  }
}
</style>