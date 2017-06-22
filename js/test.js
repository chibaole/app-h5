/**
 * Created by liupan on 2017/6/21.
 */
builderBiaoDian();

function builderBiaoDian() {

    document.write("<div class=\"box\">");
    document.write("<div class=\"xian\"></div>");

    for(var i = 1; i < 6; i++) {
        builderLi(i);
    }

    document.write("</div>");
}

function builderLi(index) {
    //这里输出每一列

    document.write("<div class=\"lmbox\">");
    var LI1 = getbase(index, 1);

    //===========================================================================================
    //输出每一行
    document.write("<ul>");
    for(var i = 0; i < LI1.length; i++) {

        document.write("<li>");
        document.write("<a href=\"\">" + LI1[i] + "</a>");
        document.write("</li>");

    }
    document.write("</ul>");

    //上面是上面的行========================================================================下面是下面的行
    //输出每一行
    var LI2 = getbase(index, 2);
    document.write("<ul>");
    for(var i = 0; i < LI2.length; i++) {

        document.write("<li>");
        document.write("<a href=\"\">" + LI2[i] + "</a>");
        document.write("</li>");

    }
    document.write("</ul>");

    //===========================================================================================

    document.write("</div>");
}

function getbase(index1, index) {
    var test = [
        [
            ["新浪", "微博", "央视网", "京东热卖"],
            ["赶集网", "安居客房产", "实际加盐", "天猫女装"]
        ],
        [
            ["搜狐", "爱淘宝", "2345小游戏", "苏宁易购"],
            ["1号店", "携程旅游网", "同程旅游网", "国美在线"]
        ],
        [
            ["凤凰网", "今日特价", "淘宝网•淘优惠", "58 同城"],
            ["途牛旅游网", "百 姓 网", "去哪儿网", "亚 马 逊"]
        ],
        [
            ["新浪", "微博", "央视网", "京东热卖"],
            ["赶集网", "安居客房产", "实际加盐", "天猫女装"]
        ],
        [
            ["搜狐", "爱淘宝", "2345小游戏", "苏宁易购"],
            ["1号店", "携程旅游网", "同程旅游网", "国美在线"]
        ],
        [
            ["凤凰网", "今日特价", "淘宝网•淘优惠", "58 同城"],
            ["途牛旅游网", "百 姓 网", "去哪儿网", "亚 马 逊"]
        ]
    ];

    return test[index1 - 1][index - 1];

}