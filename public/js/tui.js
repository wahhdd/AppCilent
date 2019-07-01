function toCanvas(id ,progress,thisdd){
	canvas
	var canvas = document.getElementById(id),
	ctx = canvas.getContext("2d"),
	percent = progress,  
	circleX = canvas.width / 2,  
	circleY = canvas.height / 2,  
	radius = 100, 
	lineWidth = 5,  
	fontSize = 20; 
	function smallcircle1(cx, cy, r) {
		ctx.beginPath();
		//ctx.moveTo(cx + r, cy);
		ctx.lineWidth = 1;
		ctx.fillStyle = '#06a8f3';
		ctx.arc(cx, cy, r,0,Math.PI*2);
		ctx.fill();
	}
	 function smallcircle2(cx, cy, r) {
		 ctx.beginPath();
		 //ctx.moveTo(cx + r, cy);
		 ctx.lineWidth = 1;
		 ctx.fillStyle = '#00f8bb';
		 ctx.arc(cx, cy, r,0,Math.PI*2);
		 ctx.fill();
	 }

	 function circle(cx, cy, r) {
		 ctx.beginPath();
		 //ctx.moveTo(cx + r, cy);
		 ctx.lineWidth = lineWidth;
		 ctx.strokeStyle = '#eee';
		 ctx.arc(cx, cy, r, Math.PI*2/3, Math.PI * 1/3);
		 ctx.stroke();
	 }

	 function sector(cx, cy, r, startAngle, endAngle, anti) {
		 ctx.beginPath();
		 //ctx.moveTo(cx, cy + r); // 从圆形底部开始画
		 ctx.lineWidth = lineWidth;

		 // 渐变色 - 可自定义
		 var linGrad = ctx.createLinearGradient(
			 circleX-radius-lineWidth, circleY, circleX+radius+lineWidth, circleY
		 );
		 linGrad.addColorStop(0.0, '#06a8f3');
		 //linGrad.addColorStop(0.5, '#9bc4eb');
		 linGrad.addColorStop(1.0, '#00f8bb');
		 ctx.strokeStyle = linGrad;

		 ctx.lineCap = 'round';

		 ctx.arc(
			 cx, cy, r,
			 (Math.PI*2/3),
			 (Math.PI*2/3) + endAngle/100 * (Math.PI*5/3),
			 false
		 );
		 ctx.stroke();
	 }

	 function loading() {
		 if (process >= percent) {
			 clearInterval(circleLoading);
		 }

		 ctx.clearRect(0, 0, circleX * 2, circleY * 2);

		 ctx.font = fontSize + 'px April';
		 ctx.textAlign = 'center';
		 ctx.textBaseline = 'middle';
		 ctx.fillStyle = '#999';
		 ctx.fillText(thisdd, circleX, circleY);    
	  
		 circle(circleX, circleY, radius);
		 
		 sector(circleX, circleY, radius, Math.PI*2/3, process);
		 smallcircle1(150+Math.cos(2*Math.PI/360*120)*100, 150+Math.sin(2*Math.PI/360*120)*100, 5);
		 smallcircle2(150+Math.cos(2*Math.PI/360*(120+process*3))*100, 150+Math.sin(2*Math.PI/360*(120+process*3))*100, 5);
		
		 if (process / percent > 0.90) {
			 process += 0.30;
		 } else if (process / percent > 0.80) {
			 process += 0.55;
		 } else if (process / percent > 0.70) {
			 process += 0.75;
		 } else {
			 process += 1.0;
		 }
	 }

	 var process = 0.0;  
	 var circleLoading = window.setInterval(function () {
		 loading();
	 }, 20);
		 
}
export {toCanvas}