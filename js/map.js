var map = new AMap.Map("container", {
    resizeEnable: true
});
//
function geocoder() {
    console.log('okokok');
    var geocoder = new AMap.Geocoder({
        city: "021", //城市，默认：“全国”
        radius: 1000 //范围，默认：500
    });
    //获取地名转换坐标
    var addr_local = $('#addr_local')[0].innerHTML;
    //地理编码,返回地理编码结果
    geocoder.getLocation(addr_local, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            geocoder_CallBack(result);
        }
    });
}
function addMarker(i, d) {
    var marker = new AMap.Marker({
        map: map,
        position: [ d.location.getLng(),  d.location.getLat()]
    });
    var infoWindow = new AMap.InfoWindow({
        content: d.formattedAddress,
        offset: {x: 0, y: -30}
    });
    marker.on("mouseover", function(e) {
        infoWindow.open(map, marker.getPosition());
    });
}
//地理编码返回结果展示并绘制路线
function geocoder_CallBack(data) {
    var resultStr = "";
    var geocode = data.geocodes;
    map.setFitView();

    //加载地图，调用浏览器定位服务
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);
        //返回定位出错信息
    });
    //解析定位结果

    function onComplete(data) {
        var button = document.getElementById('bt');
        var drivingOption = {
            policy:AMap.DrivingPolicy.LEAST_TIME,
            map:map
        };
        var driving = new AMap.Driving(drivingOption);
        //根据起终点坐标路线
        driving.search(new AMap.LngLat(geocode[0].location.getLng(), geocode[0].location.getLat()), new AMap.LngLat(data.position.getLng(), data.position.getLat()),function(status,result){
            button.onclick = function(){        // 调用高德导航
                driving.searchOnAMAP({
                    origin:result.origin,
                    destination:result.destination
                })
            };
        });
        map.addControl(new AMap.ToolBar());
    }
    //解析定位错误信息
    function onError(data) {
        console.log('定位失败') ;
    }
}
setTimeout(1000,geocoder());






