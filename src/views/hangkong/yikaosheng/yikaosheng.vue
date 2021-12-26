<template>
  <div class="boby">
    <div class="main">
      <div class="text">
        <p>当前位置：首页>适学范围>艺考生</p>
      </div>
      <!--  -->
      <div class="center">
        <div class="center-top">
          <p>什么是艺考生</p>
        </div>
        <!--  -->
        <div class="center-center">
          <div class="center-img">
            <img src="@/assets/img/三校生/三校生1_05.gif" alt="" />
          </div>

          <div class="center-text">
            <p>
              随着艺术高考新政的实施，虚张声势式的减少学校高考的高校，考生人数增加，减少学校高考的高校，使竞争越来越激烈。 随着经济水平的不提高，旅游业的蓬勃发展，
              飞机已成为人们度假、旅游、工作、旅游的常用方式，随着民航的迅速发展， 也使得民航专业服务和管理人才的需求也大大增加。 空乘是一个令人羡慕的行业，
              每年都有一个空姐的梦想和报考空乘专业的学生是数以万计的，随着时代的发展，近年来，空乘专业已经变得非常受欢迎。 空乘人员已经成为一大批具有专业技能的人员  
            </p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="div"></div>
      <!--  -->
      <div class="bottom">
        <div class="bottom-top">
          <p>艺考生的四大优势</p>
        </div>

        <div class="bottom-ul">
          <li>
            <img src="@/assets/img/高中生/高中生_07.png" alt="" class="img" />
            <div class="bottom-li">
              <li>
                <img src="@/assets/img/高中生/生_03.png" alt="" />
              </li>
              <li>
                空乘的晋升制度非常简单，每个公司不外乎都是，全勤，年小时飞够，不扣分不犯错，有英语资质，有国际线资质
              </li>
              <li>升职潜力大</li>
            </div>
          </li>
          <li class="bottom-ul">
            <img src="@/assets/img/高中生/高中生_07.png" alt="" class="img" />
            <div class="bottom-li">
              <li>
                <img src="@/assets/img/高中生/高中生_05.png" alt="" />
              </li>
              <li>
                空乘的晋升制度非常简单，每个公司不外乎都是，全勤，年小时飞够，不扣分不犯错，有英语资质，有国际线资质
              </li>
              <li>工资待遇好</li>
            </div>
          </li>
          <li class="bottom-ul">
            <img src="@/assets/img/高中生/高中生_07.png" alt="" class="img" />
            <div class="bottom-li">
              <li>
                <img src="@/assets/img/高中生/生_07.png" alt="" />
              </li>
              <li>
                空乘的晋升制度非常简单，每个公司不外乎都是，全勤，年小时飞够，不扣分不犯错，有英语资质，有国际线资质
              </li>
              <li>入职面试快</li>
            </div>
          </li>
          <li class="bottom-ul">
            <img src="@/assets/img/高中生/高中生_07.png" alt="" class="img" />
            <div class="bottom-li">
              <li>
                <img src="@/assets/img/高中生/高中生_10.png" alt="" />
              </li>
              <li>
                空乘的晋升制度非常简单，每个公司不外乎都是，全勤，年小时飞够，不扣分不犯错，有英语资质，有国际线资质
              </li>
              <li>休闲时间多</li>
            </div>
          </li>
        </div>
      </div>
      <!--  -->
      <div class="white"></div>
      <!--  -->
    </div>
    <!--  -->
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
li {
  list-style: none;
}
.boby {
  width: 100%;
  background: #fff;
  .main {
    width: 1200px;
    height: 800px;
    background: yellow;
    margin: 0 auto;
    .text {
      height: 149px;
      font-size: 7px;
      color: #b0b0b0;
      background: white;
      line-height: 72px;
      p {
        float: left;
      }
    }
    //
    .center {
      width: 100%;
      height: 612px;
      border-radius: 5;
      background: #fdfcfc;
      .center-top {
        height: 149px;
        font-size: 30px;
        color: #333333;
        line-height: 149px;
      }
      .center-center {
        height: 463px;
        .center-img {
          img {
            height: 100%;
          }
        }

        .center-text {
          margin-top: 40px;
          margin-left: 35px;
          margin-bottom: 45px;
          p {
            width: 1148px;
            height: 53px;
            font-size: 18px;
            color: #333333;
            text-align: initial;
          }
        }
      }
    }
    //
    .div {
      height: 64px;
      background: white;
    }
    //
    .bottom {
      background: #fdfcfc;
      height: 600px;
      .bottom-top {
        height: 135px;
        font-size: 30px;
        line-height: 135px;
      }

      .bottom-ul {
        display: flex;
        justify-content: space-around;
        li {
          float: left;
          position: relative;
        }
        .img {
          height: 350px;
        }
        .bottom-li {
          width: 175px;
          position: absolute;
          display: flex;
          flex-direction: column;
          top: 15px;
          left:29px;
          li:nth-child(2) {
            width: 175px;
            margin-top: 8px;
            margin-bottom: 95px;
          }
        }
      }
    }
    // 
    .white{
        height: 35px;
    }
    // 
  }
}
</style>