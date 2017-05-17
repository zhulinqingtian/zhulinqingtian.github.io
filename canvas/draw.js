class Draw{
	constructor(cobj,option){
		//option  颜色  线条粗细
		this.cobj=cobj;
		this.color=option.color;
		this.width=option.width;
		this.style=option.style;

	}
	init(){
		this.cobj.strokeStyle=this.color;
		this.cobj.fillStyle=this.color;
		this.cobj.lineWidth=this.width;

	}
	
	line(ox,oy,mx,my){
		this.init();
		this.cobj.beginPath();
		this.cobj.moveTo(ox, oy);
		this.cobj.lineTo(mx,my);
		this.cobj.stroke();
	}

	outarc(ox,oy,mx,my){//外接圆
		this.init();
		this.cobj.save();
		this.cobj.beginPath();
		var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
		this.cobj.arc((ox+mx)/2,(oy+my)/2,r,0,2*Math.PI);
		this.cobj[this.style]();
		this.cobj.restore();
	}

	circle(ox,oy,mx,my){//内切圆
		this.init();
		this.cobj.save();

		this.cobj.translate(ox,oy)
		this.cobj.beginPath();
		
		var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;

		this.cobj.arc(mx>ox?r:-r,my>oy?r:-r,r,0,2*Math.PI);
		
		this.cobj[this.style]();
		this.cobj.restore();
	}


	circlecenter(ox,oy,mx,my){//中心圆
		this.init();
		this.cobj.save();
		this.cobj.beginPath();
		var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow((my-oy),2));
		this.cobj.arc(ox,oy,r,0,2*Math.PI);
		this.cobj[this.style]();
		this.cobj.restore();
	}

	poly(ox,oy,mx,my,si){
		
		this.cobj.save();
		this.cobj.translate(ox,oy);
		this.cobj.rotate(Math.PI/si);

		var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
		var angel=Math.PI/si;
		var x=Math.cos(angel)*r;
		var y=Math.sin(angel)*r;

		this.cobj.beginPath();
		this.cobj.moveTo(x, y);
		for(var i=0;i<si;i++){

			this.cobj.lineTo(x,-y);
			this.cobj[this.style]();
			this.cobj.rotate(-angel*2);
		}
		this.cobj[this.style]();
		this.cobj.restore();
	}
	
	rect(ox,oy,mx,my){
		this.init();
		//this.cobj.strokeRect(ox,oy,mx-ox,my-oy);
		this.cobj.beginPath();
		//this.cobj.strokeRect(ox,oy,mx-ox,my-oy)
		this.cobj.rect(ox,oy,mx-ox,my-oy)
		this.cobj[this.style]();
	}

	pen(ox,oy,mx,my){
		this.init();
		this.cobj.lineTo(mx,my);
		this.cobj.stroke();
		// this.cobj.stroke();
	}
	eraser(ox,oy,mx,my){
		this.cobj.clearRect(mx,my,10,10);
	}
	
}