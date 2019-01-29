<template>
  <svg :style="computedStyle" viewBox="0 0 46 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title></title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path class="shape-overlap" d="M18.7088333,30.7511815 L18.7088333,16.7680431 L26.5261291,12.049282 C27.0189929,13.5441235 27.2837153,15.1280699 27.2837153,16.7679992 C27.2837153,22.6676203 23.8577049,27.8427163 18.7088333,30.7511815 Z" :fill="overlapFill"></path>
        <path class="shape-d" d="M9.09457175,33.2372483 L2.84217094e-14,33.2372483 L2.84217094e-14,0.298750004 L9.09457175,0.298750004 C19.1401583,0.298750004 27.2837153,7.67228402 27.2837153,16.7679992 C27.2837153,25.8637143 19.1401583,33.2372483 9.09457175,33.2372483 Z" :fill="dFill" :style="dStyle"></path>
        <polygon class="shape-y" :fill="yFill" points="18.7088333 16.7680431 45.9925486 0.298750004 45.9925486 33.2372483 18.7088333 33.2372483" :style="yStyle"></polygon>
    </g>
  </svg>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component({})
export default class DyLogo extends Vue {
  @Prop({ type: String, default: `${46/16}rem` })
  width: string

  @Prop({ type: String, default: `${34/16}rem` })
  height: string

  @Prop({ type: String, default: 'rgba(3, 161, 213, .3)' })
  dFill: string

  @Prop({ type: String })
  dStyle: string

  @Prop({ type: String, default: 'rgba(174, 200, 209, .6)' })
  overlapFill: string

  @Prop({ type: String, default: 'rgba(3, 161, 213, .17)' })
  yFill: string

  @Prop({ type: String })
  yStyle: string

  get computedStyle (): string {
    return `width: ${this.width}; height: ${this.height};`
  }

}
</script>

