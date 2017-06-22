/**
 * Created by liupan on 2017/6/20.
 */
var container = $('#container');
console.log(container);
var list = document.getElementById('list');
console.log(list.style.left);
var buttons = document.getElementById('buttons').getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 1;
var timer;

function animate(offset) {
    var newLeft = parseInt(list.style.left)  + offset;
    list.style.left = newLeft + 'rem';

    if (newLeft > -10) {
        list.style.left = -40 + 'rem';
    }
    if (newLeft < -40) {
        list.style.left = 0 + 'rem';
    }
}

function play() {
    //重复执行的定时器
    timer = setInterval(function () {
        next.onclick();
    }, 2000)
}

function stop() {
    clearInterval(timer);
}

function buttonsShow() {
    //将之前的小圆点的样式清除
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == "on") {
            buttons[i].className = "";
        }
    }
    //数组从0开始，故index需要-1
    buttons[index - 1].className = "on";
}

prev.onclick = function () {
    index -= 1;
    if (index < 1) {
        index = 5
    }
    buttonsShow();
    animate(10);
};

next.onclick = function () {
    index += 1;
    if (index > 5) {
        index = 1
    }
    animate(-10);
    buttonsShow();
};

for (var i = 0; i < buttons.length; i++) {
    (function (i) {
        buttons[i].onclick = function () {

            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = index - clickIndex; //这个index是当前图片停留时的index
            animate(offset);
            index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
            buttonsShow();
        }
    })(i)
}

container.onmouseover = stop;
container.onmouseout = play;
play();

var a =$('.vip_message_list .detail_text');
console.log(a);

function  vip () {
        for (var i = 0; i < a.length;i ++ ) {
            console.log(i);
            a[i].onclick = function () {
                window.location.href = 'share.html';

            }

        }
        if(a.length > 2){
            $(".bar").css('display','block');
            $('.bar').onclick = function () { console.log('好多点评')
            }
        }else {
            $(".bar").css('display','none');

        }
}
vip();


function gotomap() {
    window.location.href = 'map.html'
}

var b = $('.img_box_message ');
console.log(b);
for(var i =0; i < b.length; i ++){
    var c = $('.img_box_message ');

    var img_box = b[i].innerHTML;
    console.log(img_box);

}