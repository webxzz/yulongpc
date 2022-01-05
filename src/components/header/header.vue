<template>
  <div class="header">
    <div class="main">
      <div class="header_1">
        <p>欢迎来到航空服务职业教育报考平台</p>
        <p>24小时免费热线：400-5793-1387</p>
      </div>
    </div>
    <div class="main2">
      <div class="header_1">
        
        <img src="@/assets/img/首页/首页未展开_03.png" alt="">
        <router-link tag="a" to="/" class="p">首页</router-link>
        <router-link tag="a" to="/hangkong" class="p">航空学院</router-link>
        <router-link tag="a" to="/gaotie" class="p">热门专业推荐</router-link>
        <a class="p">适学范围</a>
        <router-link tag="a" to="/baomingliucheng" class="p">报名流程</router-link>
        <a class="p">疑难解答</a>
        
        <div class="inp">
            <input type="text" value="输入您想查询的内容">
            <img src="@/assets/img/首页/首页未展开_06.png" alt="">
        </div>
        
      </div>
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
.main {
  width: 100%;
  height: 33px;
  background: #eaeaea;
  .header_1 {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    p {
      height: 12px;
      font-family: SimSun;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #999999;
    }
  }
}
.main2{
    height: 103px;
    width: 100%;
    .header_1{
        width: 1200px;
        height: 103px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
                width: 177px;
                height: 50px;
            }
        .p{
            margin-top: 30px;
            // width: 59px;
            height: 14px;
            font-family: SimSun;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            // line-height: 36px;
            letter-spacing: 0px;
            color: #666666;
            text-decoration: none;
        }
        .p:hover{
            width: 62px;
            height: 26px;
            background-color: #0099ff;
            border-radius: 6px;
            color: #fff;
            line-height: 26px;
        }
        .inp{
            margin-top: 55px;
            width: 291px;
            input{
                width: 238px;
                height: 26px;
                background-color: #ffffff;
                border-radius: 13px;
                border: solid 1px #0099ff;
                padding-left: 10px;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 36px;
                letter-spacing: 0px;
                color: #cccccc;
            }
            img{
                width: 53px;
                height: 28px;
                position: relative;
                left: -11px;
                top: -1px;
            }
        }
        // .header_left{
        //     margin-top: 23px;
        //     img{
        //         width: 177px;
        //         height: 50px;
        //     }
        // }
        // .header_main{
        //     width: ;
        // }
    }
}
</style>