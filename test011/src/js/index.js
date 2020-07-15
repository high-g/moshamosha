import $ from 'jquery'
import 'velocity-animate'

$(function() {
  $('#wrapper').removeAttr('style')

  const init = () => {
    const num_last1 = 3000

    setTimeout(() => {$('#line1').addClass('on') }, 0);
    setTimeout(() => {$('#line2').addClass('on') }, 200);
    setTimeout(() => {$('#line3').addClass('on') }, 400);
    setTimeout(() => {$('#text1').addClass('on') }, 600);
    setTimeout(() => {$('#text2').addClass('on') }, 1600);
    setTimeout(() => {$('#scene1').addClass('on') }, num_last1);

    setTimeout(() => {$('#s2Rect').addClass('on') }, 1360 + num_last1);
    setTimeout(() => {$('#s2ImageWrap').addClass('on') }, 1500 + num_last1);
    setTimeout(() => {$('#s2Image1').addClass('on') }, 1500 + num_last1);
    setTimeout(() => {$('#s2Blue').addClass('on') }, 1500 + num_last1);
    setTimeout(() => {$('#s2Blue2').addClass('on') }, 1800 + num_last1);
    setTimeout(() => {$('#s2Red').addClass('on') }, 1800 + num_last1);

    setTimeout(() => {$('#s2line4').addClass('on') }, 1800 + num_last1);
    setTimeout(() => {$('#s2line1').addClass('on') }, 1800 + num_last1);
    setTimeout(() => {$('#s2line2').addClass('on') }, 2000 + num_last1);
    setTimeout(() => {$('#s2line3').addClass('on') }, 2200 + num_last1);

    setTimeout(() => {$('#circleArea').addClass('on')}, 1800 + num_last1);
    setTimeout(() => {$('#text3').addClass('on')}, 2400 + num_last1);
    setTimeout(() => {$('#scene2').addClass('zoom') }, 3000 + num_last1);
    setTimeout(() => {$('#scene2').addClass('on') }, 6000 + num_last1);
  }

  setTimeout(init, 500)
})
