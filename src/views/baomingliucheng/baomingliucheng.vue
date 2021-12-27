<template>
    <div class="register">
        <div class="register_head">
            <Header></Header>
        </div>
        <div class="register_head_banner">
            <img src="@/assets/images/报名流程banner.jpg" alt="">
        </div>

        <div class="register_main">
            <div class="main_title">
                <div class="main_title_nei">
                <p>当前位置: 首页>报名流程</p>
                </div>
            </div>
            <div class="answer">
            <div class="answer_nei">
                <div class="answer_top">
                    <p>在线解答</p>
                    <img src="@/assets/images/在线解答.png" alt="">
                </div>
                <div class="answer_main">
                <li>
                    <p>我是女生想找稳定工作</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>我是高中生没学历没阅历</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>我是大学生没技能赚钱少</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>我是男生想找高薪工作</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>我是在职者没发展想转行</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>我是家长为孩子规划</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>我是待业者不知学什么好</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>中考特招班</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                <li>
                    <p>高考特招班</p>
                    <img src="@/assets/images/在线咨询.png" alt="">
                </li>
                </div>
                <div class="answer_bottom">
                    <img src="@/assets/images/心动.png" alt="">
                </div>
            </div>
            </div>
            <div class="major">
                <div class="major_nei">
                    <div class="major_top">
                    <p>专业选择</p>
                    <img src="@/assets/images/在线解答.png" alt="">
                    </div>
                    <div class="major_main">
                    <img src="@/assets/images/报名01.png" alt="">
                    <img src="@/assets/images/报名02.png" alt="">
                    <img src="@/assets/images/报名03.png" alt="">
                    <img src="@/assets/images/报名04.png" alt="">
                    </div>
                </div>
            </div>

            <div class="apply">
                <div class="apply_nei">
                    <div class="apply_top">
                    <p>报名流程</p>
                    <img src="@/assets/images/报名流程.png" alt="">
                    </div>
                    <div class="apply_main">
                    <img src="@/assets/images/报名05.png" alt="">
                    <img src="@/assets/images/报名06.png" alt="">
                    <img src="@/assets/images/报名07.png" alt="">
                    <img src="@/assets/images/报名08.png" alt="">
                    </div>
                </div>
            </div>

            <div class="school">
            <div class="school_nei">
                <div class="school_top">
                    <p>校园风景</p>
                    <img src="@/assets/images/校园风景.png" alt="">
                </div>
                <div class="school_main">
                    <div class="school_main_top">
                    <div class="school_main_top_left">
                        <img src="@/assets/images/报名09.png" alt="">
                    </div>
                    <div class="school_main_top_right">
                        <img src="@/assets/images/报名10.png" alt="">
                        <img src="@/assets/images/报名11.png" alt="">
                    </div>
                    </div>
                    
                    <div class="school_main_bottom">
                        <img src="@/assets/images/报名12.png" alt="">
                        <img src="@/assets/images/报名13.png" alt="">
                    </div>

                </div>
            </div>

            </div>
        </div>

        <div class="register_footer">
            <div class="footer_top">
                <div>
                <li><b>友情链接:</b></li>
                <li>新浪微博</li>
                <li>腾讯视频</li>
                <li>百度贴吧</li>
                <li>搜狐新闻</li>
                <li>网易邮箱</li>
                <li>去哪儿网</li>
                <li>迅雷看看</li>
                <li>拼多多</li>
                <li>今日头条</li>
                <li>高德地图</li>
                </div>
            </div>
            <div class="footer_nei">
                <div class="footer_main">
                <div class="footer_logo">
                    <img src="@/assets/images/VIP地勤专业pc_53.jpg" alt="">
                </div>
                <div class="footer_about">
                    <p>关于我们</p>
                    <li>煜龙时空</li>
                    <li>行业动态</li>
                    <li>推荐就业</li>
                    <li>诚聘人才</li>
                </div>
                <div class="footer_serve">
                    <p>服务与支持</p>
                    <li>常见问题</li>
                    <li>投诉反馈</li>
                    <li>人工客服</li>
                    <li>校企合作</li>
                </div>
                <div class="footer_iphone">
                    <p>联系我们</p>
                    <p>13229644681</p>
                    <p>周一至周五9:00-18:00</p>
                </div>
                <div class="footer_QR">
                    <img src="@/assets/images/VIP地勤专业pc_50.jpg" alt="">
                    <p>关注公众号</p>
                </div>
                </div>
            </div>
            <div class="footer_bot">
                <span>2003-2019 TMALL.COM</span>
                <img src="@/assets/images/VIP地勤专业pc_58.jpg" alt="">
                <span>[京ICP备2021018170号-1]</span>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header/header.vue'
export default {
  name: 'Home',
  components: {
      Header
  }
}
</script>
<style lang="scss">
  .register{
    width: 100%;
    height: auto;
    margin: 0 auto;
    .register_head{
      width: 100%;
      margin: 0 auto;
      .register_head_title{
        width: 100%;
        height: 30px;
        margin: 0 auto;
        background-color: #F6F6F6;
        div{
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          p{
            color: #A0A0A0;
            font-size: 12px;
            line-height: 30px;
          }
        }
      }
      .register_head_logo{
        width: 100%;
        height: 90px;
        margin: 0 auto;
        background-color: #FFFFFF;
        .head_logo_nei{
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          line-height: 90px;
          .head_LOGO{
            width: 20%;
            text-align: left;
            img{
              margin-top: 20px;
            }
          }
          .head_logo_caiDan{
            width: 45%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            
          }
          .head_logo_search{
            width: 30%;
            .search{
              width: 99%;
              height: 30px;
              background-color: #fff;
              border: 1px solid #2DABFF;
              border-radius: 16px;
              margin-top: 30px;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-between;
              input{
                width: 76%;
                font-size: 12px;
                outline: none;
                border: none;
                margin-left: 15px;
              }
              .search_icon{
                  width: 20%;
                  height: 100%;
                  background-color: #0099FF;
                  border-radius: 0px 16px 16px 0px;
                  margin-right: -1px;
                  img{
                    width: 20px;
                    height: 20px;
                    display: block;
                    margin: 5px 0px 0px 24px;
                  }
              }
            }
          }
        }
      }
      .register_head_banner{
        width: 100%;
        height: 363px;
        margin: 0 auto;
        img{
          width: 100%;
        }
      }
    }
    .register_main{
      width: 100%;
      margin: 0 auto;

      .main_title{
        width: 100%;
        height: 40px;
        margin: 0 auto;
        background-color: #fff;
        .main_title_nei{
          width: 1200px;
          margin: 0 auto;
          p{
            color: #9C9C9C;
            text-align: left;
            line-height: 40px;
          }
        }
        
      }

      .answer{
        width: 100%;
        height: 582px;
        margin: 0 auto;
        background-color: #EAEAEA;
        .answer_nei{
          width: 1200px;
          height: 580px;
          margin: 0 auto;
          .answer_top{
            width: 100%;
            height: 80px;
            margin: 0 auto;
            p{
              font-size: 20px;
            }
            img{
              margin-top: 10px;
            }
          }
          .answer_main{
            width: 100%;
            height: 360px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            gap: 5%;
            justify-content: space-between;
            li{
              width:47%;
              height: 50px;
              background-color: #fff;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-around;
              border-radius: 12px;
              p{
                font-size: 16px;
                line-height: 50px;
                width: 55%;
              }
              img{
                width: 96px;
                height: 34px;
                margin-top: 8px;
              }
            }
          }
          .answer_bottom{
            width: 100%;
            height: 80px;
            margin: 0 auto;
            margin-top: 42px;
            img{
              width: 100%;
            }
          }
        }
      }

      .major{
        width: 100%;
        height: 332px;
        background-color: #fff;
        margin: 0 auto;
        .major_nei{
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          .major_top{
            width: 100%;
            height: 80px;
            margin: 0 auto;
            margin-top: 20px;
            p{
              font-size: 20px;
            }
            img{
              margin-top: 10px;
            }
          }
          .major_main{
            width: 100%;
            height: 250px;
            margin: 0 auto;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            img{
              width: 24%;
            }
          }
        }
      }

      .apply{
        width: 100%;
        height: 360px;
        background-color: #EAEAEA;
        margin: 0 auto;
        .apply_nei{
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          .apply_top{
            width: 100%;
            height: 80px;
            margin: 0 auto;
            padding-top: 20px;
            p{
              font-size: 20px;
            }
            img{
              margin-top: 10px;
              height: 22px;
            }
          }
          .apply_main{
            width: 100%;
            height: 250px;
            margin: 0 auto;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            img{
              width: 24%;
            }
          }
        }
      }

      .school{
        width: 100%;
        height: 624px;
        background-color: #fff;
        margin: 0 auto;
        .school_nei{
          width: 100%;
          height: 100%;
          margin: 0 auto;
          .school_top{
            width: 100%;
            height: 80px;
            margin: 0 auto;
            padding-top: 20px;
            p{
              font-size: 20px;
            }
            img{
              margin-top: 10px;
              height: 22px;
            }
          }
          .school_main{
            width: 100%;
            height: 250px;
            margin: 0 auto;
            .school_main_top{
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-between;
              width: 100%;
              .school_main_top_left{
                width: 58%;
                img{
                  width: 100%;
                  height: 313px;
                }
              }
              .school_main_top_right{
                width: 40%;
                height: 100%;
                img:nth-child(1){
                  width: 100%;
                  height: 150px;
                  margin-bottom: 10px;
                }
                img:nth-child(2){
                  width: 100%;
                  height: 150px;
                }
              }
            }
            .school_main_bottom{
              width: 100%;
              height: 200px;
              margin: 0 auto;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-between;
              img:nth-child(1){
                width: 49.5%;
                height: 100%;
              }
              img:nth-child(2){
                width: 49.5%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .register_footer{
      width: 100%;
      height: 200px;
      margin: 0 auto;
      background-color: #313840;
      .footer_top{
        width: 100%;
        height: 30px;
        margin: 0 auto;
        background-color: #444D56;
        div{
          width: 50%;
          height: 30px;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          margin: 0 auto;
          li{
            color: #fff;
            line-height: 30px;
          }
        }
        
      }
      .footer_nei{
        width: 1200px;
        height: 118px;
        margin: 0 auto;
        margin-top: 24px;
        .footer_main{
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          .footer_logo{
            width: 20%;
            img{
              width: 136px;
              height: 46px;
              margin-top: 34px;
            }
          }
          .footer_about{
            width: 20%;
            p{
              font-size: 17px;
              margin-bottom: 12px;
              color: #C1C1C2;
            }
            li{
              margin-top: 5px;
              color: #66696E;
            }
          }
          .footer_serve{
            width: 20%;
            p{
              font-size: 17px;
              margin-bottom: 12px;
              color: #C1C1C2;
            }
            li{
              margin-top: 5px;
              color: #66696E;
            }
          }
          .footer_iphone{
            width: 20%;
            p:nth-child(1){
              font-size: 15px;
              color: #C1C1C2;
              text-align: left;
            }
            p:nth-child(2){
              font-size: 19px;
              color: #fff;
              text-align: left;
            }
            p:nth-child(3){
              color: #66696E;
              text-align: left;
            }
          }
          .footer_QR{
            width: 20%;
            img{
              width: 92px;
              height: 92px;
              margin-top: 8px;
            }
            p{
              color: #545559;
            }
          }
        }
      }
      .footer_bot{
        width: 100%;
        height: 26px;
        margin: 0  auto;
        background-color: #202328;
        display: flex;
        flex-wrap: nowrap;
        color: #fff;
        justify-content: center;
        line-height: 26px;
        img{
          width: 14px;
          height: 14px;
          margin-left: 8px;
          margin-right: 8px;
          margin-top: 6px;
        }
      }
    }
  }
</style>
