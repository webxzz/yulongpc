<template>
  <div class="footer">
    <div class="nav">
      <div class="nav-top">
        <li>友情链接：</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
        <li>新浪微博</li>
      </div>
      <!--  -->
      <div class="nav-center">
        <div class="image">
          <img src="@/assets/img/高铁/images/VIP地勤专业pc_53.jpg" alt="" />
        </div>

        <div class="nav-ul">
          <li>关于我们</li>
          <li>煜龙简介</li>
          <li>煜龙简介</li>
          <li>煜龙简介</li>
          <li>煜龙简介</li>
        </div>

        <div class="nav-ul">
          <li>关于我们</li>
          <li>煜龙简介</li>
          <li>煜龙简介</li>
          <li>煜龙简介</li>
          <li>煜龙简介</li>
        </div>

        <div class="nav-ul-one">
          <li>联系我们</li>
          <li>13229644681</li>
          <li>周一至周五9:00-18:00</li>
        </div>
        <!--  -->
        <div class="nav-bottom">
          <img src="@/assets/img/高铁/images/VIP地勤专业pc_50.jpg" alt="" />
          <p>关注公众号</p>
        </div>
      </div>
      <!--  -->
      <div class="nav-nav">
        <li>2003-2019 TMALLCOM</li>
        <li>
          <img src="@/assets/img/高铁/images/VIP地勤专业pc_58.jpg" alt="" />

          【京ICP备2021018170号-1】
        </li>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.boby {
    width: 100%;
  .nav {
    min-width: 1200px;
    margin: 0 auto;
    .nav-top {
      width: 100%;
      height: 40px;
      background-color: #444c56;
      display: flex;
      justify-content: center;
      align-items: center;
      li:nth-child(1) {
        font-size: 18px;
      }
      li {
        font-size: 14px;
        color: white;
        float: left;
        margin-left: 39px;
        list-style: none;
      }
    }
    //
    .nav-center {
      display: flex;
      justify-content: space-around;
      height: 378px;
      width: 100%;
      background: #323840;
      align-items: center;
      .image {
        width: 326px;
        height: 92px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nav-ul {
        li:nth-child(1) {
          margin-bottom: 28px;
          color: #cccccc;
          font-size: 18px;
        }
        li {
          margin-bottom: 13px;
          font-size: 16px;
          list-style: none;
          color: #999999;
        }
      }

      .nav-ul-one {
        display: flex;
        flex-direction: column;
        text-align: initial;
        margin-bottom: 74px;
        li:nth-child(1) {
          margin-bottom: 14px;
          color: #cccccc;
          font-size: 18px;
        }
        li:nth-child(2) {
          text-align: initial;
          font-size: 30px;
          letter-spacing: 2px;
          color: #cccccc;
           margin-bottom: 24px;
        }
        li {
          font-size: 16px;
          list-style: none;
          color: #999999;
        }
      }
    }
    //
    .nav-bottom {
      width: 172px;
      height: 185px;
      margin-bottom: 18px;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        font-size: 14px;
        color: #666666;
      }
    }
    //
    .nav-nav {
      width: 100%;
      height: 38px;
      background: #202429;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
          color: #cccccc;
        list-style: none;
        float: left;
        margin-left: 30px;
      }
    }
    //
  }
}
</style>