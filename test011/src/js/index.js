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

    setTimeout(() => {$('#s2ImageWrap').addClass('on') }, 1500 + num_last1);
    setTimeout(() => {$('#s2Image1').addClass('on') }, 1500 + num_last1);
    setTimeout(() => {$('#s2Blue').addClass('on') }, 2000 + num_last1);
    setTimeout(() => {$('#s2Rect').addClass('on') }, 2000 + num_last1);
  }

  setTimeout(init, 500)
})
