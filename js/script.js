	window.onload = showTime;
	
	//封装获取ID的方法
	function $(id){
		return typeof id==='string'?document.getElementById(id):id;
	}

	/**
	 * [checkTime description]
	 */
	function checkTime(i){
		if(i<10){
			i = "0"+i;
		}return i;
	}
	/**
	 * [showTime description]
	 * @return {[type]} [展示时间]
	 */
	function showTime(){
		var curtime  = new Date();						//当前时间
		var endtime  = new Date("2016/9/5,00:00:00");	//目标时间
		var leftTime = (endtime.getTime() - curtime.getTime())/1000;	//毫秒(ms)
		var leftDay  = parseInt(leftTime/(24*60*60));		//剩余天数
		var leftHour = parseInt(leftTime/(60*60)%24);		//剩余小时
		var leftMin  = parseInt(leftTime/60%60);				//剩余分钟
		var leftSec  = parseInt(leftTime%60);				//剩余秒

		$('day').innerHTML  = checkTime(leftDay);
		$('hour').innerHTML = checkTime(leftHour);
		$('min').innerHTML  = checkTime(leftMin);
		$('sec').innerHTML  = checkTime(leftSec);
		if(leftTime<=0){
			$('title').innerHTML = "我们家刘炀的生日到啦";
			$('day').innerHTML   = 0;
			$('hour').innerHTML  = 0;
			$('min').innerHTML   = 0;
			$('sec').innerHTML   = 0;
		}
		setTimeout(showTime,1000);
	}


