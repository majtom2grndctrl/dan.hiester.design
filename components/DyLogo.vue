<template>
  <svg :style="logoStyle" viewBox="0 0 46 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title></title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path class="shape-overlap" d="M18.7088333,30.7511815 L18.7088333,16.7680431 L26.5261291,12.049282 C27.0189929,13.5441235 27.2837153,15.1280699 27.2837153,16.7679992 C27.2837153,22.6676203 23.8577049,27.8427163 18.7088333,30.7511815 Z" :fill="overlapFill"></path>
        <path class="shape-d" d="M9.09457175,33.2372483 L2.84217094e-14,33.2372483 L2.84217094e-14,0.298750004 L9.09457175,0.298750004 C19.1401583,0.298750004 27.2837153,7.67228402 27.2837153,16.7679992 C27.2837153,25.8637143 19.1401583,33.2372483 9.09457175,33.2372483 Z" :fill="dFill" :style="dStyle"></path>
        <polygon class="shape-y" :fill="yFill" points="18.7088333 16.7680431 45.9925486 0.298750004 45.9925486 33.2372483 18.7088333 33.2372483" :style="yStyle"></polygon>
    </g>
  </svg>
</template>

<script setup lang="ts">

const props = defineProps({
  width: String,
  height: String,
  dFill: String,
  dStyle: String,
  overlapFill: String,
  yFill: String,
  yStyle: String
});

const logoStyle = `width: ${props.width}; height: ${props.height};`

</script>
