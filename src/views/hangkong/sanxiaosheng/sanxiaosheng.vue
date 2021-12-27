<template>
  <div class="boby">
      <div class="main">
        <p class="dang">当前位置：首页>适学范围>三校生</p>
        <div class="san">
          <p class="nn">什么是三校生</p>
          <img src="@/assets/img/三校生/三校生1_05.gif" alt="">
          <p class="xiao">三校生，表示正在接受中等职业教育学生的统称。中等职业学校包括职高、中专、技校。其定义是在九年义务教育的基础上培养一批具有高素质的高技术人才，其学生毕业后有技能可以胜任工作岗。航空服务技能培训等。</p>
        </div>

        <div class="butt">
          <p class="nn">选择空乘的优势</p>
          <ul class="on">
              <li>
                  <div class="nb">
                    <p class="yi">1</p>
                  </div>
                  <p class="yans">
                    <span class="re">升职潜力大：</span>
                    <span class="h">空乘的晋升制度非常简单，每个公司不外乎都是，全勤，年小时飞够，不扣分不犯错，有英语资质，有国际线资质</span>
                  </p>
                  
              </li>

              <li>
                  <div class="nb">
                    <p class="yi">2</p>
                  </div>
                  <p class="yans">
                    <span class="yi2">工资待遇好:</span>
                    <span class="h">空乘的工资一般都分为基本工资，小时费，过夜费这几个项目。基本工资飞行的年限和等级固定增加，五险一都会在基本工资里扣除。</span>
                  </p>
                  
              </li>

              <li>
                  <div class="nb">
                    <p class="yi">3</p>
                  </div>
                  <p class="yans">
                    <span class="yi3">入职面试快：</span>
                    <span class="h">空乘专业毕业的就业率是看学生的个人条件能不能通过航空公司来面试的要了，入学时的面试比较简单。航空公司选空乘最先来还是学校，只有学校选不到太多的时候空公司才会面向社会招收空乘人员。</span>
                  </p>
                  
              </li>
          </ul>
        </div>

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
    list-style: none;
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
        height: auto;
        // background: wheat;
        margin: 0 auto;
    }
}
.dang{
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 36px;
    padding: 29px 0 29px 0;
	letter-spacing: 0px;
	color: #888888;
}
.san{
    width: 100%;
	height: 612px;
	background-color: #fdfcfc;
	border-radius: 10px;
   
   img{
       height: 327px;
	background-color: #1776af;
	border-radius: 2px;
   }
   .xiao{
    width: 1148px;
	height: 53px;
    padding: 40px 0;
    text-indent: 2rem;
	font-size: 18px;
    margin: 0 auto;
	line-height: 36px;
	color: #333333;
   }
}
.butt{
    width: 100%;
    margin-top: 49px;
    height: 495px;
	background-color: #fdfcfc;
	border-radius: 10px;
}
 .nn{
	height: 31px;
    padding-top: 50px !important;
     padding-bottom: 50px !important;
	text-align: center;
	font-size: 30px;
	line-height: 36px;
	letter-spacing: 0px;
	color: #333333;
    }
    .on{
     width: 100%;
    display: flex;
    justify-content: space-between;
    }
    .on li{
        width: 360px;
	height: 320px;
	background-color: #eaeaea;
	border-radius: 10px;
    }
    .yi{
        width: 65px;
	height: 65px;
    background: #436EEE;
    margin: 0 auto;
    text-align: center;
    color: white;
    font-size: 46px;
    }
    .nb{
        padding: 15px 0 16px 0;
    }
    .yans{
        width: 324px;
	height: 126px;
    margin: 0 auto;
    text-align: center;
	font-family: MicrosoftYaHei;
	font-size: 18px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 36px;
	letter-spacing: 0px;
    }
    .re{
        color: #ff3300;
    }
    .h{
        color: #4d4b4b;
    }
    .yi2{
        color: #006699;
    }
    .yi3{
        color: #009900;
    }
</style>