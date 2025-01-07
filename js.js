function get_random_music(station){
  const station1 = ['5432gone_redfarn.mp3','be_sharp_bw_redfarn.mp3','boogi_marabi_redfarn.mp3','busy_schedule.mp3','careless_perc_redfarn.mp3'];
  const station2 = ['chemistry_lab.mp3','chuggachugga.mp3','city_blues_redfarn.mp3','coconut_run2.mp3','flying_scotsman.mp3'];
  const station3 = ['harp_harmony.mp3','keep_on_rolling.mp3','linns_basket.mp3','midnight_snow_run.mp3','mighty_giant_run.mp3'];
  const station4 = ['modern_motion.mp3','moo_redfarn.mp3','mosey_along_redfarn.mp3','no_work_song_redfarn.mp3','relax_song.mp3'];
  if(station == 1){
    let radio = document.getElementById('audio1');  
    var i = Math.floor(Math.random() * station1.length);
    radio.src = 'music/'+station1[i];
    radio.volume = 0.3;
    radio.play();
  }
  else if(station == 2){
    let radio = document.getElementById('audio2');  
    var i = Math.floor(Math.random() * station1.length);
    radio.src = 'music/'+station2[i];
    radio.volume = 0.3;
    radio.play();
  }
  else if(station == 3){
    let radio = document.getElementById('audio3');  
    var i = Math.floor(Math.random() * station1.length);
    radio.src = 'music/'+station3[i];
    radio.volume = 0.3;
    radio.play();
  }
  else if(station == 4){
    let radio = document.getElementById('audio4');  
    var i = Math.floor(Math.random() * station1.length);
    radio.src = 'music/'+station4[i];
    radio.volume = 0.3;
    radio.play();
  }
}

function isAllChecked(){
  let checkbox1 = document.getElementById('checkbox1')
  let checkbox2 = document.getElementById('checkbox2')
  let submitbutton = document.getElementById('submitbutton')
  if (checkbox1.checked && checkbox2.checked){
    submitbutton.disabled = false;
  }
  else{
    submitbutton.disabled = true;
  }
}
function isPasswordCorrect(){
  let password = document.getElementById('input-password').value;
  let password2 = document.getElementById('input-password2').value;
  if(password != password2){
    document.getElementById("password_error").style.display = 'block';
  }
  else{
    document.getElementById("password_error").style.display = 'none';
  }
}
function errorWindow(){
  document.getElementById('pop_window_1').style.display = 'none';
  document.getElementById('pop_window_2').style.display = 'block';
  
  new Audio('crash.mp3').play();
  document.body.style.animation ='rotate 3s 1';
  document.body.style.transform = 'rotate(-5deg)';
  document.body.style.marginTop = '50px';
  document.body.style.cursor = 'not-allowed';
  document.body.children.style.cursor = 'not-allowed';
}
function DaneSolled(){
  window.alert('Twoje dane zostałty pomyślnie sprzedane!');
}