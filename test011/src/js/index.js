import $ from 'jquery'
import 'velocity-animate'

$(function() {
  const init = () => {
    $('#line1').addClass('on')
    setTimeout(() => {$('#line2').addClass('on') }, 200);
    setTimeout(() => {$('#line3').addClass('on') }, 400);
    setTimeout(() => {$('#text1').addClass('on') }, 550);
    setTimeout(() => {$('#scene1').addClass('on') }, 2000);
  }

  setTimeout(init, 500)
})
