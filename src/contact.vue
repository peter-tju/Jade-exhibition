<template>
  <div class="contact-container">
    <div class="contact-photo">
      <img src="@/assets/tongji_museum.jpg" alt="同济大学博物馆" />
    </div>

    <div class="contact-content">
      <h2 class="contact-title">
        联系我们
        <div class="underline"></div>
        <div class="subtitle">Contact Us</div>
      </h2>

      <div class="contact-text">
        <p>
          联系人：史先生
        </p>
        <p>
          手机号：13641664207
        </p>
        <p>
          微信号：SYB13641664207
        </p>
        <p>
          联系地址：中国上海市嘉定区曹安公路4800号友园5号楼
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: row; /* 强制左右布局 */
  justify-content: center;
  align-items: flex-start;
  padding-top: 180px; /* 导航栏高度 + 间距 */
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  gap: 48px;
}

.contact-photo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-photo img {
  flex: 1 1 100%;
  width: 70%;
  max-width: 70%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.contact-content {
  flex: 1 1 110%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.contact-title {
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

.contact-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .contact-photo,
  .contact-content {
    flex: 1 1 100%;
  }
}
</style>