// build time:Sat Nov 02 2019 10:42:00 GMT+0800 (CST)
(function(){$.ajax({url:"http://66.lacknb.cn:9527/jitang",method:"GET",dataType:"jsonp",success:function(o){$("#drugwords").text(o.data);console.log(o)},jsonpCallback:"callback"});function o(){this.r=Math.floor(Math.random()*255);this.g=Math.floor(Math.random()*255);this.b=Math.floor(Math.random()*255);return"rgba("+this.r+","+this.g+","+this.b+",0.5)"+"!important"}var t=o();console.log(t);$("#drugwords").css("color",t)})();
//rebuild by neat 