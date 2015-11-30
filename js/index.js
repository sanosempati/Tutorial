var container = document.getElementById('container');
var splashSVGNode = document.getElementById('splash-svg-node');
var music = document.getElementById('music');

var bandWhite = document.getElementById('band-white');
var bandShadow = document.getElementById('band-shadow');

var cupEndRight = document.getElementById('cup-end-right');
var cupEndLeft = document.getElementById('cup-end-left');

var armLeft = document.getElementById('arm-left');
var armRight = document.getElementById('arm-right');

var armBallLeft = document.getElementById('arm-ball-left');
var armBallRight = document.getElementById('arm-ball-right');

var spongeLeft = document.getElementById('sponge-left');
var spongeRight = document.getElementById('sponge-right');

var cupLeft = document.getElementById('cup-left');
var cupRight = document.getElementById('cup-right');

var screwLeft = document.getElementById('screw-left');
var screwRight = document.getElementById('screw-right');
var splash = document.getElementById('splash');
var wave = document.getElementById('wave');


TweenMax.set(container, {
  position:'absolute',
  left:'50%',
  xPercent:-50,
  top:'50%',
  yPercent:-50,
  perspective:400,
  //cursor:'pointer',
  userSelect:'none'
});

TweenMax.set([music], {
  position:'absolute',
  left:'48%',
  xPercent:-50,
  top:'75%',
  yPercent:-50,
  alpha:0,
  transformOrigin:'50% 20% 0px',
  rotationX:-90,
  userSelect:'none'
});
TweenMax.set(splashSVGNode, {
  position:'absolute',
  left:'60%',
  xPercent:-50,
  top:'28%',
  yPercent:-50,
  //cursor:'pointer',
  userSelect:'none'
});

TweenMax.set('path', {
  drawSVG:0,
  //boxShadow: "-10px 10px 0px 0px blue",
  transformOrigin:'50% 50%',
  attr:{'fill-opacity':1}
})
TweenMax.set(splash, {
  position:'absolute',
  drawSVG:'40 60'
})
TweenMax.set(wave, {
  position:'absolute',
  drawSVG:0
})



var tl = new TimelineMax({repeat:-1, yoyo:false, repeatDelay:3});
tl.timeScale(3)
tl.set('svg', {
  alpha:1
})
.set([bandWhite, bandShadow],{
  transformOrigin:'50% 0%'
})
.set([cupEndRight, spongeRight, cupRight], {
  transformOrigin:'100% 0%',
  drawSVG:true,
  rotation:-20,
  scale:0
})
.set([cupEndLeft, spongeLeft, cupLeft], {
  transformOrigin:'0% 0%',
  drawSVG:true,
  rotation:20,
  scale:0
})


.to(splash,4, {
  drawSVG:0,
  //top:'+=100',
  ease:Power2.easeOut
})
/*
.to(splashSVGNode,4, {
  top:'+=10%'
  //top:'+=100',
  ease:Power2.easeIn
},'-=4')
*/
.to(splash, 2, {
  alpha:0,
  ease:Power2.easeIn
}, '-=4')
.from(container, 6, {
  rotation:80,
  
  ease:Back.easeOut.config(3)
}, '-=4')

.to([bandWhite, bandShadow], 4, {
  drawSVG:true,
  ease:Power1.easeInOut
}, '-=6')

.set([screwLeft, screwRight], {
  attr:{'fill-opacity':1},
  transformOrigin:'50% 50%'
},'-=2')

.staggerFrom([screwLeft, screwRight], 2, {
  scale:0,
  ease:Elastic.easeOut.config(1)
},1,'-=4')

.staggerTo([armLeft, armRight], 1, {
  drawSVG:true
}, 1, '-=4')

.staggerFrom([armBallLeft, armBallRight], 1, {
  scale:0
},1, '-=3.5')


.to([cupEndLeft, spongeLeft, cupLeft], 2, {
  	scale:1,
  rotation:0,
  //drawSVG:true,
  ease:Back.easeOut.config(1)
}, '-=1.5')

.to([cupEndRight, spongeRight, cupRight], 2, {
  	scale:1,
  rotation:0,
  //drawSVG:true,
  ease:Back.easeOut.config(1)
},'-=1.5')

.to(music, 6, {
  //scale:1,
  rotationX:0,
  
  alpha:1,
  ease:Elastic.easeOut//.config(1)
}, '-=0.5')


.to(wave, 2, {
  //immediateRender:false,
  drawSVG:true
}, '-=7')
.to(container, 1, {
  alpha:0
}, '+=2')

.to(wave, 1, {
  drawSVG:'100% 100%'
}, '-=8')