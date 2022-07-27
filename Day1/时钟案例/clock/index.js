
        window.onload=function(){
            // 定时器，每隔1秒 执行1次
            setInterval(function(){
                var dt=new Date();
                var HH=dt.getHours();
                var mm=dt.getMinutes();
                var ss=dt.getSeconds();
                console.log(HH,mm,ss);

                $("#HH").html(HH);
                $("#mm").html(mm);
                $("#ss").html(ss);

            },1000)
        }
    