<!-- This code was generated by Builder.io -->
<template>
  <section class="about-section">
    <h2 class="section-title">サイトについて</h2>
    <div class="about-content">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b480a49b7a2d5f6ebda907ba8be06c54891e1f2e44673b1239018ae077d196d?placeholderIfAbsent=true&apiKey=bebe8792e71b41b18bc0bf86d8544a91"
        alt="Jibun-See concept illustration"
        class="about-image"
      />
      <div class="about-text">
        <p>
          jiBUN-Seeは、あなたの人生を物語として紡ぐために開発されました。
          簡単な操作で、自分の経験や価値観を整理し、表現することが可能です。
          徹底したプライバシー保護により、あなたのストーリーはあなた自身のものであり、
          安心して共有できます。
        </p>
        <p class="cta-text">さあ、自分だけの歴史を描き始めましょう。</p>
      </div>
    </div>
    <span class="background-text">ABOUT</span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutSection",
});
</script>

<style scoped>
.about-section {
  position: relative;
  padding: 30px 40px 176px;
  margin-top: 40px;
  overflow: hidden;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.about-image {
  aspect-ratio: 1.79;
  object-fit: contain;
  object-position: center;
  width: 605px;
  position: absolute;
  right: -51px;
  bottom: -152px;
}

.about-text {
  font-size: 20px;
  font-weight: 400;
  flex: 1;
}

.cta-text {
  font-weight: 700;
  font-size: 36px;
  margin-top: 20px;
}

.background-text {
  color: rgba(0, 136, 120, 0.3);
  font-size: 96px;
  font-weight: 700;
  position: absolute;
  right: -11px;
  top: 0;
}

@media (max-width: 991px) {
  .about-section {
    padding: 30px 20px 100px;
  }

  .about-image {
    max-width: 100%;
    position: static;
    margin-bottom: 20px;
  }

  .about-content {
    flex-direction: column;
  }

  .background-text {
    font-size: 40px;
  }
}
</style>
