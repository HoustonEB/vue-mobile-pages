<template>
<div class="loading-wrapper">
    <mt-spinner type="double-bounce" :size="60" color='#26a2ff' class="submit-loading"></mt-spinner>
</div>
</template>
<script>
export default {};
</script>
<style scoped lang='less'>
.loading-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, .4);
}
.submit-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>


