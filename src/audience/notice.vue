<template>
  <div class="notice-container">
    <div class="notice-content">
      <h2 class="notice-title">
        参观须知
        <div class="underline"></div>
        <div class="subtitle">Notice for Visitors</div>
      </h2>

      <div class="notice-text">
        <p>
          一、本馆开放时间：每周一至周六8:30-16:30对外开放（16:00以后停止入馆）；节假日、其他重要活动等特殊情况将提前公告参观时间。
        </p>
        <p>
          二、如需讲解。团体参观（10人以上）可提前预约。
        </p>
        <p>
          三、为保障文物安全，营造文明参观环境，请观众自觉遵守如下规定：<br>
醉酒者、精神障碍者、衣冠不整者，谢绝入馆参观；<br>
老年、残疾、幼儿等观众须由亲友陪同参观；<br>
严禁在馆内吸烟，禁止携带宠物入馆；<br>
禁止携带包裹参观，馆内提供免费寄存，贵重物品自行保管；<br>
展厅内请勿摄像，拍照请勿使用闪光灯，请勿喧哗；<br>
自觉接受安检，严禁将易燃易爆、管制械具等危险品带入馆内；<br>
自觉爱护公共设施，请勿触摸展品；<br>
自觉保持环境卫生，请勿乱丢杂物，请在指定区域就餐；<br>
自觉遵守参观秩序，服从馆内工作人员现场引导和指挥；<br>
场馆内请勿奔跑、追逐、攀爬、躺卧。
        </p>
        <p>
          四、如遇我馆重大或临时性活动，须遵从同济大学博物馆安排。
        </p>
        <p>
          五、本参观须知最终解释权归同济大学博物馆。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudienceNotice',
};
</script>

<style scoped>
.notice-container {
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

.notice-photo {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.notice-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.notice-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.notice-title {
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

.notice-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .notice-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .notice-photo,
  .notice-content {
    flex: 1 1 100%;
  }
}
</style>