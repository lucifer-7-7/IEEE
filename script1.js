function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./sequence/0001.png
       ./sequence/0002.png
       ./sequence/0003.png
       ./sequence/0004.png
       ./sequence/0005.png
       ./sequence/0006.png
       ./sequence/0007.png
       ./sequence/0008.png
       ./sequence/0009.png
       ./sequence/0010.png
       ./sequence/0011.png
       ./sequence/0012.png
       ./sequence/0013.png
       ./sequence/0014.png
       ./sequence/0015.png
       ./sequence/0016.png
       ./sequence/0017.png
       ./sequence/0018.png
       ./sequence/0019.png
       ./sequence/0020.png
       ./sequence/0021.png
       ./sequence/0022.png
       ./sequence/0023.png
       ./sequence/0024.png
       ./sequence/0025.png
       ./sequence/0026.png
       ./sequence/0027.png
       ./sequence/0028.png
       ./sequence/0029.png
       ./sequence/0030.png
       ./sequence/0031.png
       ./sequence/0032.png
       ./sequence/0033.png
       ./sequence/0034.png
       ./sequence/0035.png
       ./sequence/0036.png
       ./sequence/0037.png
       ./sequence/0038.png
       ./sequence/0039.png
       ./sequence/0040.png
       ./sequence/0041.png
       ./sequence/0042.png
       ./sequence/0043.png
       ./sequence/0044.png
       ./sequence/0045.png
       ./sequence/0046.png
       ./sequence/0047.png
       ./sequence/0048.png
       ./sequence/0049.png
       ./sequence/0050.png
       ./sequence/0051.png
       ./sequence/0052.png
       ./sequence/0053.png
       ./sequence/0054.png
       ./sequence/0055.png
       ./sequence/0056.png
       ./sequence/0057.png
       ./sequence/0058.png
       ./sequence/0059.png
       ./sequence/0060.png
       ./sequence/0061.png
       ./sequence/0062.png
       ./sequence/0063.png
       ./sequence/0064.png
       ./sequence/0065.png
       ./sequence/0066.png
       ./sequence/0067.png
       ./sequence/0068.png
       ./sequence/0069.png
       ./sequence/0070.png
       ./sequence/0071.png
       ./sequence/0072.png
       ./sequence/0073.png
       ./sequence/0074.png
       ./sequence/0075.png
       ./sequence/0076.png
       ./sequence/0077.png
       ./sequence/0078.png
       ./sequence/0079.png
       ./sequence/0080.png
       ./sequence/0081.png
       ./sequence/0082.png
       ./sequence/0083.png
       ./sequence/0084.png
       ./sequence/0085.png
       ./sequence/0086.png
       ./sequence/0087.png
       ./sequence/0088.png
       ./sequence/0089.png
       ./sequence/0090.png
       ./sequence/0091.png
       ./sequence/0092.png
       ./sequence/0093.png
       ./sequence/0094.png
       ./sequence/0095.png
       ./sequence/0096.png
       ./sequence/0097.png
       ./sequence/0098.png
       ./sequence/0099.png
       ./sequence/0100.png
       ./sequence/0101.png
       ./sequence/0102.png
       ./sequence/0103.png
       ./sequence/0104.png
       ./sequence/0105.png
       ./sequence/0106.png
       ./sequence/0107.png
       ./sequence/0108.png
       ./sequence/0109.png
       ./sequence/0110.png
       ./sequence/0111.png
       ./sequence/0112.png
       ./sequence/0113.png
       ./sequence/0114.png
       ./sequence/0115.png
       ./sequence/0116.png
       ./sequence/0117.png
       ./sequence/0118.png
       ./sequence/0119.png
       ./sequence/0120.png
       ./sequence/0121.png
       ./sequence/0122.png
       ./sequence/0123.png
       ./sequence/0124.png
       ./sequence/0125.png
       ./sequence/0126.png
       ./sequence/0127.png
       ./sequence/0128.png
       ./sequence/0129.png
       ./sequence/0130.png
       ./sequence/0131.png
       ./sequence/0132.png
       ./sequence/0133.png
       ./sequence/0134.png
       ./sequence/0135.png
       ./sequence/0136.png
       ./sequence/0137.png
       ./sequence/0138.png
       ./sequence/0139.png
       ./sequence/0140.png
       ./sequence/0141.png
       ./sequence/0142.png
       ./sequence/0143.png
       ./sequence/0144.png
       ./sequence/0145.png
       ./sequence/0146.png
       ./sequence/0147.png
       ./sequence/0148.png
       ./sequence/0149.png
       ./sequence/0150.png
       ./sequence/0151.png
       ./sequence/0152.png
       ./sequence/0153.png
       ./sequence/0154.png
       ./sequence/0155.png
       ./sequence/0156.png
       ./sequence/0157.png
       ./sequence/0158.png
       ./sequence/0159.png
       ./sequence/0160.png
       ./sequence/0161.png
       ./sequence/0162.png
       ./sequence/0163.png
       ./sequence/0164.png
       ./sequence/0165.png
       ./sequence/0166.png
       ./sequence/0045.png
       ./sequence/0046.png
       ./sequence/0047.png
       ./sequence/0048.png
       ./sequence/0049.png
       ./sequence/0050.png
       ./sequence/0051.png
       ./sequence/0052.png
       ./sequence/0053.png
       ./sequence/0054.png
       ./sequence/0055.png
       ./sequence/0056.png
       ./sequence/0057.png
       ./sequence/0058.png
       ./sequence/0059.png
       ./sequence/0060.png
       ./sequence/0061.png
       ./sequence/0062.png
       ./sequence/0063.png
       ./sequence/0064.png
       ./sequence/0065.png
       ./sequence/0066.png
       ./sequence/0067.png
       ./sequence/0068.png
       ./sequence/0069.png
       ./sequence/0070.png
       ./sequence/0071.png
       ./sequence/0072.png
       ./sequence/0073.png
       ./sequence/0074.png
       ./sequence/0075.png
       ./sequence/0076.png
       ./sequence/0077.png
       ./sequence/0078.png
       ./sequence/0079.png
       ./sequence/0080.png
       ./sequence/0081.png
       ./sequence/0082.png
       ./sequence/0083.png
       ./sequence/0084.png
       ./sequence/0085.png
       ./sequence/0086.png
       ./sequence/0087.png
       ./sequence/0088.png
       ./sequence/0089.png
       ./sequence/0090.png
       ./sequence/0091.png
       ./sequence/0092.png
       ./sequence/0093.png
       ./sequence/0094.png
       ./sequence/0095.png
       ./sequence/0096.png
       ./sequence/0097.png
       ./sequence/0098.png
       ./sequence/0099.png
       ./sequence/0100.png
       ./sequence/0101.png
       ./sequence/0102.png
       ./sequence/0103.png
       ./sequence/0104.png
       ./sequence/0105.png
       ./sequence/0106.png
       ./sequence/0107.png
       ./sequence/0108.png
       ./sequence/0109.png
       ./sequence/0110.png
       ./sequence/0111.png
       ./sequence/0112.png
       ./sequence/0113.png
       ./sequence/0114.png
       ./sequence/0115.png
       ./sequence/0116.png
       ./sequence/0117.png
       ./sequence/0118.png
       ./sequence/0119.png
       ./sequence/0120.png
       ./sequence/0121.png
       ./sequence/0122.png
       ./sequence/0123.png
       ./sequence/0124.png
       ./sequence/0125.png
       ./sequence/0126.png
       ./sequence/0127.png
       ./sequence/0128.png
       ./sequence/0129.png
       ./sequence/0130.png
       ./sequence/0131.png
       ./sequence/0132.png
       ./sequence/0133.png
       ./sequence/0134.png
       ./sequence/0135.png
       ./sequence/0136.png
       ./sequence/0137.png
       ./sequence/0138.png
       ./sequence/0139.png
       ./sequence/0140.png
       ./sequence/0141.png
       ./sequence/0142.png
       ./sequence/0143.png
       ./sequence/0144.png
       ./sequence/0145.png
       ./sequence/0146.png
       ./sequence/0147.png
       ./sequence/0148.png
       ./sequence/0149.png
       ./sequence/0150.png
       ./sequence/0151.png
       ./sequence/0152.png
       ./sequence/0153.png
       ./sequence/0154.png
       ./sequence/0155.png
       ./sequence/0156.png
       ./sequence/0157.png
       ./sequence/0158.png
       ./sequence/0159.png
       ./sequence/0160.png
       ./sequence/0161.png
       ./sequence/0162.png
       ./sequence/0163.png
       ./sequence/0164.png
       ./sequence/0165.png
       ./sequence/0166.png
       ./sequence/0049.png
       ./sequence/0050.png
       ./sequence/0051.png
       ./sequence/0052.png
       ./sequence/0053.png
       ./sequence/0054.png
       ./sequence/0055.png
       ./sequence/0056.png
       ./sequence/0057.png
       ./sequence/0058.png
       ./sequence/0059.png
       ./sequence/0060.png
       ./sequence/0061.png
       ./sequence/0062.png
       ./sequence/0063.png
       ./sequence/0064.png
       ./sequence/0065.png
       ./sequence/0066.png
       ./sequence/0067.png
       ./sequence/0068.png
       ./sequence/0069.png
       ./sequence/0070.png
       ./sequence/0071.png
       ./sequence/0072.png
       ./sequence/0073.png
       ./sequence/0074.png
       ./sequence/0075.png
       ./sequence/0076.png
       ./sequence/0077.png
       ./sequence/0078.png
       ./sequence/0079.png
       ./sequence/0080.png
       ./sequence/0081.png
       ./sequence/0082.png
       ./sequence/0083.png
       ./sequence/0084.png
       ./sequence/0085.png
       ./sequence/0086.png
       ./sequence/0087.png
       ./sequence/0088.png
       ./sequence/0089.png
       ./sequence/0090.png
       ./sequence/0091.png
       ./sequence/0092.png
       ./sequence/0093.png
       ./sequence/0094.png
       ./sequence/0095.png
       ./sequence/0096.png
       ./sequence/0097.png
       ./sequence/0098.png
       ./sequence/0099.png
       ./sequence/0100.png
       ./sequence/0101.png
       ./sequence/0102.png
       ./sequence/0103.png
       ./sequence/0104.png
       ./sequence/0105.png
       ./sequence/0106.png
       ./sequence/0107.png
       ./sequence/0108.png
       ./sequence/0109.png
       ./sequence/0110.png
       ./sequence/0111.png
       ./sequence/0112.png
       ./sequence/0113.png
       ./sequence/0114.png
       ./sequence/0115.png
       ./sequence/0116.png
       ./sequence/0117.png
       ./sequence/0118.png
       ./sequence/0119.png
       ./sequence/0120.png
       ./sequence/0121.png
       ./sequence/0122.png
       ./sequence/0123.png
       ./sequence/0124.png
       ./sequence/0125.png
       ./sequence/0126.png
       ./sequence/0127.png
       ./sequence/0128.png
       ./sequence/0129.png
       ./sequence/0130.png
       ./sequence/0131.png
       ./sequence/0132.png
       ./sequence/0133.png
       ./sequence/0134.png
       ./sequence/0135.png
       ./sequence/0136.png
       ./sequence/0137.png
       ./sequence/0138.png
       ./sequence/0139.png      
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
      
    }
  })