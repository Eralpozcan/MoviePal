<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(true);


setTimeout(() => {
  isLoading.value = false;
}, 1000);
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-top-color: transparent;
  animation: loading-spinner 1s infinite linear;
}

@keyframes loading-spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
