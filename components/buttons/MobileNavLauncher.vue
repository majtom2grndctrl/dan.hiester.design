<template>
  <button v-on:click="$emit('launch')" class="mobile-nav-launcher">
    <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title></title>
        <g id="Home-Mobile-3a" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-118.000000, -365.000000)" opacity="0.599524457">
            <g id="Group" transform="translate(118.000000, 357.000000)" fill="#717171">
                <g id="mobile-nav-launcher-icon" transform="translate(0.000000, 8.000000)">
                    <rect id="Rectangle-2" style="mix-blend-mode: multiply;" x="0" y="0" width="18" height="3"></rect>
                    <rect id="Rectangle-2-Copy" style="mix-blend-mode: multiply;" x="0" y="7" width="18" height="3"></rect>
                    <rect id="Rectangle-2-Copy-2" style="mix-blend-mode: multiply;" x="0" y="14" width="18" height="3"></rect>
                </g>
            </g>
        </g>
    </svg>
    <span>Menu</span>
  </button>
</template>


<style lang="postcss" scoped>
.mobile-nav-launcher {
  background: none;
  border: none;
  outline: none;
  color: #03A1D5;
  cursor: pointer;
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: calc(24rem/16);
  text-transform: uppercase;
  width: 5em;
  &:active {
    outline: none;
  }
}
</style>
