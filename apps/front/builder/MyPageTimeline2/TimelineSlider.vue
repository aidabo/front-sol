<!-- This code was generated by Builder.io -->
<template>
  <div class="timeline-slider">
    <div class="year">2024</div>
    <input
      type="range"
      class="slider"
      min="2023"
      max="2024"
      step="1"
      v-model="selectedYear"
    />
    <div class="current-date">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8859d8b6b8fa208850a966b128e8836e4857f420ca7442b6c59e58c1d6546e75?apiKey=bebe8792e71b41b18bc0bf86d8544a91&"
        alt="Calendar icon"
        class="calendar-icon"
      />
      <span>{{ formattedDate }}</span>
    </div>
    <div class="year">2023</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimelineSlider",
  data() {
    return {
      selectedYear: 2023,
    };
  },
  computed: {
    formattedDate(): string {
      const currentDate = new Date();
      return `${this.selectedYear}/${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}`;
    },
  },
});
</script>

<style scoped>
.timeline-slider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
}

.year {
  color: #6b6f74;
  font: 400 24px/2 "Fugaz One", sans-serif;
}

.slider {
  width: 60%;
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4caf50;
  cursor: pointer;
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4caf50;
  cursor: pointer;
  border-radius: 50%;
}

.current-date {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  font: 400 20px/40px "Fugaz One", sans-serif;
  color: #6b6f74;
  border: 1px solid #a1a1a1;
}

.calendar-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

@media (max-width: 991px) {
  .timeline-slider {
    flex-direction: column;
    align-items: stretch;
  }

  .slider {
    width: 100%;
    margin: 20px 0;
  }

  .current-date {
    align-self: center;
  }
}
</style>
