const Canvas = require("canvas");

module.exports = class Welcome2 {

    constructor() {
        this.fm = "https://telegra.ph/file/3f31c6fd7b68d210290a3.png";
        this.bg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAJUlAjJvRP_n-rV7mmb6Xf3-Zutfy8agig&usqp=CAU";
        this.avatar = "https://i.ibb.co/G5mJZxs/rin.jpg";
        this.username = "Clayza Aubert";
        this.grupname = "Victoria Official";
        this.member = "737";
    }
     //avatar
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    //username
    setUsername(value) {
        this.username = value;
        return this;
    }
    //bg
    setBg(value) {
        this.bg = value;
        return this;
    }
    setGroupname(value) {
        this.grupname = value;
        return this;
    }
    //member
    setMember(value) {
        this.member = value;
        return this;
    }
    async toAttachment() {
    
    
        // Create canvas
        const canvas = Canvas.createCanvas(600, 300);
        const ctx = canvas.getContext("2d");
       
   
        // Draw background
        let background = await Canvas.loadImage(this.bg);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        let fram = await Canvas.loadImage(this.fm);
        ctx.drawImage(fram, 0, 0, canvas.width, canvas.height);

        //circle avatar
    ctx.save();
	ctx.beginPath();
	ctx.rotate(-17 * Math.PI / 180);
	let avatar = await Canvas.loadImage(this.avatar);
    ctx.strokeStyle = 'white';  // some color/style
	ctx.lineWidth = 3;  
	ctx.drawImage(avatar, -4, 130, 113, 113);
    ctx.strokeRect(-4, 130, 113, 113);
	ctx.restore();
    
        let usrname = this.grupname;
        let name = usrname.length > 10 ? usrname.substring(0, 10) + "..." : usrname;
        ctx.globalAlpha = 1;
        ctx.font = "20px CubestMedium";
        ctx.textAlign = 'center';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(name, 392, 173);
        
        
        ctx.font = "700 20px Courier New";
        ctx.textAlign = 'left';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${this.member}th member`, 250, 290);
        
        let username = this.username;
        let namalu = username.length > 12 ? username.substring(0, 15) + "..." : username;
        ctx.globalAlpha = 1;
        ctx.font = "700 27px Courier New";
        ctx.textAlign = 'left';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(namalu, 242, 248);
         
	   
        return canvas;
    }
};
