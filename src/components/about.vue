<template>
    <Menu></Menu>
    <div class="about">
        <div class="main">
            <!-- 顶部的关于我图片标题 -->
            <div class="top">
                <div class="top-left">
                    <img src="../assets/img/about-top-left.png" alt="" style="width: 100%;">
                </div>
                <div class="top-right">
                    <img src="../assets/img/about-top-right.png" alt="" style="width: 100%;">
                </div>
            </div>
            <!-- 个人信息区域 -->
            <div class="gerenxinxi-all">
                <!--主体部分 -->
                <div class="gerenxinxi">
                    <!-- 左边头像区域 -->
                    <div class="left">
                        <div class="touxiang"></div>
                        <img src="../assets/img/about-name.png" alt="" class="name">
                    </div>
                    <!-- 右边信息区域 -->
                    <div class="right">
                        <div class="gr-top" v-for="item in msg">
                            <div class="row">
                                <div class="title">{{ item.title }}</div>
                                <div class="content">{{ item.content }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右边装饰图片 -->
                <img src="../assets/img/about-shikeng.png" alt="" class="shikeng">
            </div>
            <!-- 工作经历 -->
            <div class="work-exp">
                <!-- 标题 -->
                <div class="exp-title">
                    <div class="zhaungshi"></div>
                    <div class="title">工作经历</div>
                </div>
                <!-- 内容卡片 -->
                <div class="content">
                    <div v-for="(item, index) in work_exp">
                        <!-- 单个公司信息 -->
                        <div class="company">
                            <div class="company-and-time">
                                <div class="company-name">{{ item.company }}</div>
                                <div class="company-time">{{ item.time }}</div>
                            </div>
                            <div class="duty">
                                <div class="yuan"></div>
                                <div style="color: #666666;">{{ item.duty }}</div>
                            </div>
                            <div class="fuzeneirong">负责内容</div>
                            <div class="company-duty">{{ item.content }} </div>
                            <hr color='#EAEAEA' v-if="xiantiao_work(index)">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 项目经历 -->
            <div class="work-exp">
                <!-- 标题 -->
                <div class="exp-title">
                    <div class="zhaungshi"></div>
                    <div class="title">项目经历</div>
                </div>
                <!-- 内容卡片 -->
                <div class="content">
                    <div v-for="(item, index) in project_exp">
                        <!-- 单个项目信息 -->
                        <div class="company">
                            <div class="company-and-time">
                                <div class="company-name">{{ item.name }}</div>
                                <div class="company-time">{{ item.time }}</div>
                            </div>
                            <div class="fuzeneirong">负责内容</div>
                            <div class="company-duty">
                                <div v-for="i in item.content">{{ i }}</div>
                            </div>
                            <hr color='#EAEAEA' v-if="xiantiao_project(index)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-backtop :right="100" :bottom="100" />
    <Footer style="margin-top: 100px;"></Footer>
</template>

<script setup>
import Footer from '../element/footer.vue'
import Menu from '../element/menu.vue'
const msg = [
    { title: '电话/微信', content: '156-5945-6557' },
    { title: '邮箱', content: '1123051973@qq.com' },
    { title: '毕业院校', content: '集美大学-美术与设计学院' },
    { title: '现居地', content: '杭州' },
    { title: '主要设计工具', content: 'figma、sketch、PS、AE、C4D' },
    { title: '设计技能', content: '界面设计、交互设计、插画设计、3D设计、动效设计' },
    { title: '开发技能', content: 'HTML5、CSS、JavaScript、VUE3框架' }
]
const work_exp = [
    {
        company: '杭州拉个手科技股份有限公司',
        time: '2022.03-至今',
        duty: '设计组长',
        content: '负责团队成员任务分配、设计内部评审。负责融e多、易薪APP界面设计，负责部分c端产品原型图产出，跟进开发界面还原度。负责2个运营后台的交互设计工作。',
    },
    {
        company: '杭州博彦科技股份有限公司',
        time: '2021.10-2022.02',
        duty: 'UI设计师',
        content: '负责用户增长平台体验升级，指定设计规范，制作业务edm模板，绘制缺省页插画、icon。制作发布会3D动画及用画像3D形象',
    },
    {
        company: '天阳宏业科技股份有限公司',
        time: '2019.06-2021.08',
        duty: 'UI设计师',
        content: '参与用户调研、可用性评估与测试，进行产品需求分析，提出解决方案。进行banner、icon、界面等视觉绘制，后期项目落地对接及还原度走查。',
    },
]
const project_exp = [
    {
        name: '易薪 0 ~ 1.8.1',
        time: '2022.06-至今',
        content: [
            '1.主导整体项目风格',
            '2.制定设计规范，负责组件库搭建，提升开发工作效率，减少沟通成本',
            '3.参与落地页、下载页绘制',
            '4.负责项目发布前的视觉验收',
            '5.参与高保真界面绘制'
        ]
    },
    {
        name: 'CRM客户管理系统',
        time: '2022.04-至今',
        content: [
            '1.负责融e多CRM体验升级',
            '2.负责管理系统内部icon、插画等视觉部分绘制',
            '3.协助产品对后台进行流程梳理',
            '4.负责设计走查，确保开发还原度'
        ]
    },
    {
        name: '融e多 0 ~ 2.7.2',
        time: '2022.03-至今',
        content: [
            '1.主导整体项目风格',
            '2.制定设计规范，负责组件库搭建，提升开发工作效率，减少沟通成本',
            '3.负责落地页、下载页各渠道风格绘制，及后续更新',
            '4.负责IP形象绘制、应用场景衍生',
            '5.根据产品给出的页面流程图及页面功能介绍文档，进行界面原型绘制',
            '6.负责高保真界面绘制',
            '7.负责项目发布前的视觉验收'
        ]
    },
    {
        name: '速卖通F1后台管理系统',
        time: '2021.10-2021.12',
        content: [
            '1.制定F1后台管理系统设计规范，负责系统组件库搭建，提升开发工作效率，升级整体视觉感受',
            '2.负责F1用户增长平台体验优化',
            '3.制定用增平台插画视觉风格',
            '4.绘制edm模板，协助运营进行营销ab测试5.制作官网3dkv及发布会3d宣传视频'
        ]
    },
    {
        name: '国美金融7.0.0',
        time: '2021.05-2021-08',
        content: [
            '1.前期进行用户调研，用户需求分析',
            '2.对基金板块进行结构调整及原型图绘制',
            '3.中期进行UI界面设计，引导页、banner、h5等插画绘制',
            '4.负责项目动效及交互动画产出',
            '5.后期与开发对接，进行设计走查'
        ]
    },
    {
        name: '美务通店务管理系统',
        time: '2019.08-2019.12',
        content: [
            '1.参与产品讨论，基于效率提出意见及解决方案',
            '2.协助产品经理搭建组件库及设计规范',
            '3.基于业务垂类的独特性，优化“预约管理-用户付款”流程的交互结构及框架',
            '4.绘制交互原型图，后期输出交互动画',
            '5.根据需求产出界面'
        ]
    },
]
// 最后一条线条隐藏
function xiantiao_work(index) {
    if (index < work_exp.length - 1) {
        return true
    }
    else {
        return false
    }
}
function xiantiao_project(index) {
    if (index < project_exp.length - 1) {
        return true
    }
    else {
        return false
    }
}
</script>




<style lang="less" scoped>
.about {
    background-image: url(../assets/img/about-bg.png);
    background-repeat: no-repeat;
    background-position: right top;
    padding: 120px 30px 0 30px;

    .main {
        margin: 0 auto;

        .top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
}

// 个人信息
.gerenxinxi-all {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;

    .gerenxinxi {
        display: flex;

        .left {
            width: 156px;

            .touxiang {
                width: 156px;
                height: 190px;
                background: #D9D9D9;
                border-radius: 24px;
            }

            .name {
                width: 100%;
                margin-top: 16px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 80px;
            height: 232px;

            .row {
                display: flex;
                gap: 20px;

                .title {
                    width: 100px;
                    color: #666666;
                }

                .content {
                    font-weight: 500;
                }
            }
        }
    }

    .shikeng {
        height: 230px;
    }

}

// 工作经历
.work-exp {
    margin-top: 80px;

    .exp-title {
        display: flex;
        gap: 12px;
        margin-bottom: 32px;
        .title{
            font-size: 20px;
            font-weight: 600;
            line-height: 20px;
        }

        .zhaungshi {
            width: 4px;
            height: 20px;
            background: #3278FF;
            border-radius: 32px;
        }
    }

    .content {
        background-color: white;
        border-radius: 12px;
        padding: 30px;

        .company {
            .company-and-time {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .company-name {
                    font-size: 18px;
                    font-weight: 600;
                }

                .company-time {
                    color: #666666;
                    font-size: 14px;
                }
            }

            .duty {
                display: flex;
                gap: 8px;
                align-items: center;
                margin-top: 8px;

                .yuan {
                    width: 8px;
                    height: 8px;
                    background-color: #3278FF;
                    border-radius: 8px;
                }
            }

            .fuzeneirong {
                font-weight: 600;
                color: #333;
                margin-top: 16px;
            }

            .company-duty {
                line-height: 1.5em;
                color: #666666;
                margin-top: 8px;

            }

            hr {
                margin-top: 20px;
                margin-bottom: 20px;
            }
        }
    }

}



// 控制main自适应
@media(min-width:0px) {
    .main {
        flex-grow: 1;
    }
}

@media(min-width:1440px) {
    .main {
        width: 1440px;
    }
}

// 控制top图片在小尺寸时自适应
@media(max-width:812px) {
    .top {
        gap: 118px;

        .top-left {
            flex: 464;
        }

        .top-right {
            flex: 170;
        }
    }

    .gerenxinxi {
        flex-direction: column;

        .right {
            margin-left: 0 !important;
            margin-top: 40px;
        }
    }
}
</style>