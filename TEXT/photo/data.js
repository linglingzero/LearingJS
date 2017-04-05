var data=[];

var dataStr='1、心理罪<br>\
<br>\
时间：2017年<br>\
饰演：方木<br>\
<br>\
<br>\
2、老炮儿<br>\
<br>\
时间：2015年<br>\
饰演：张晓波<br>\
<br>\
<br>\
3、怦然星动<br>\
<br>\
时间：2015年<br>\
饰演：苏星宇<br>\
<br>\
<br>\
4、栀子花开<br>\
<br>\
时间：2015年<br>\
饰演：许诺<br>\
<br>\
<br>\
5、青云志<br>\
<br>\
时间：2016年<br>\
饰演：张小凡/鬼厉<br>\
<br>\
<br>\
6、麻雀<br>\
<br>\
时间：2016年<br>\
饰演：陈深<br>\
<br>\
<br>\
7、盗墓笔记<br>\
<br>\
时间：2015年<br>\
饰演：吴邪<br>\
<br>\
<br>\
8、活色生香<br>\
<br>\
时间：2015年<br>\
饰演：宁致远<br>\
<br>\
<br>\
9、古剑奇谭<br>\
<br>\
时间：2014年<br>\
饰演：百里屠苏<br>\
';
var d=dataStr.split('<br><br><br>')
for(var i=0;i<d.length;i++){
	var c=d[i].split('<br><br>');
	data.push({
		img: c[0].replace('、',' ')+'.jpg',
		caption: c[0].split('、')[1],
		desc: c[1]
	});
	console.log(c[0].replace('、',' ')+'.jpg');
}