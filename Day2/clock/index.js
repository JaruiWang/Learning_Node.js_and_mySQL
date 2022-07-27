
        window.onload=function(){
            // 定时器，每隔1秒 执行1次
            setInterval(function(){
                var dt=new Date();
                var HH=dt.getHours();
                var mm=dt.getMinutes();
                var ss=dt.getSeconds();
                console.log(HH,mm,ss);

                var ele_hh=document.getElementById("HH");
                var ele_mm=document.getElementById ("mm");
                var ele_ss=document.getElementById ("ss");
                ele_hh.innerHTML=HH;
                ele_mm.innerHTML=mm;
                ele_ss.innerHTML=ss;

            },1000)
        }
    