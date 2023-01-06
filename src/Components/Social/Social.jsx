import React from 'react';

// import styles
import "./Social.scss";



class Social extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div className="social">
                <canvas className="canvas"></canvas>
                <div className="content">
                  <h6 className="h1 wow fadeInUP" data-wow-delay=".25s">Need help with your next project, or just want to say hello?</h6>
                  <a className="wow fadeInUP" data-wow-delay=".5s" data-bs-toggle="modal" data-bs-target="#myModal" href="#"> Get in touch </a>
                </div>
            </div>  
        )
    }

    componentDidMount(){
      let canvas = document.querySelector(".social .canvas");
      let ctx = canvas.getContext("2d");
      canvas.width = parseInt(getComputedStyle(canvas).width);
      canvas.height = parseInt(getComputedStyle(canvas).height);

      window.addEventListener("resize", () => {
        canvas.width = parseInt(getComputedStyle(canvas).width);
        canvas.height = parseInt(getComputedStyle(canvas).height);
      })

      let P = 4;
      let A = 4;

      function draw(shift) {
        let w = canvas.width;
        let h = canvas.height;
        shift = shift >= 300*Math.PI ? shift - 100*Math.PI : shift;
        ctx.clearRect(0, 0, w, h);
        let grd = ctx.createLinearGradient(0, 0, w, h);
        grd.addColorStop(0, '#eb5757');
        grd.addColorStop(.5, "#000");
        grd.addColorStop(.75, '#eb5757');

        ctx.strokeStyle = grd;

        ctx.lineCap = "square";
        for (let i = 0; i < w; ) {
            let _A = Math.abs(A*Math.cos(2*i));
            ctx.beginPath();
            let pos = Math.exp(-_A * i / w) * Math.sin(P * Math.PI * (i + shift) / w);
            pos *= h / 2;
            let lw = Math.exp(-_A * i / w) * Math.sin(3 * Math.PI * (i - shift) / w) * 2;
            ctx.lineWidth = (lw)+1;
            ctx.lineTo(i, h / 2 - pos);
            ctx.closePath();
            ctx.stroke();
            i += 1;
        }

        window.requestAnimationFrame(() => {
            draw(shift + 1);
        });
      }
      draw(0);
      
    }

}

export default Social;