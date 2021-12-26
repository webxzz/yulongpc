<template>
  <div class="boby">
      <div class="banner">
          <img src="@/assets/img/国际航空管理/国际航空服务与管理1_02.gif" alt="">
      </div>
      <div class="main">

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.boby{
    width: 100%;
    background: #fff;
    .banner{
        width: 100%;
        // height: 460px;
        // 这块背景色改背景图，等ui给图，先随便给个颜色
        background: red;
        
        img{
            width: 1200px;
            height: auto;
        }
    }
    .main{
        width: 1200px;
        height: 800px;
        background: yellow;
        margin: 0 auto;
    }
}
</style>