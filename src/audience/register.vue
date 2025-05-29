<template>
  <div class="register-container">
    <div class="register-content">
      <h2 class="register-title">
        参观登记
        <div class="underline"></div>
        <div class="subtitle">Exhibition Floor Plan</div>
      </h2>

      <div class="register-photo">
        <img src="@/assets/register.jpg" alt="参观登记" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudienceRegister',
};
</script>

<style scoped>
.register-container {
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

.register-photo {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-photo img {
  width: 30%;
  max-width: 30%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.register-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.register-title {
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

.register-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .register-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .register-photo,
  .register-content {
    flex: 1 1 100%;
  }
}
</style>