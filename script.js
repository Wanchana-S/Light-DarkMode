const switchToggle = document.querySelector('input[type="checkbox"]');
const togleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')

function switchMode(e){
    if(e.target.checked){
        //DarkMode
        document.documentElement.setAttribute('data-theme','dark')
        darkMode();
        imageSwitchMode('dark')
    }else{
        //LightMode
        document.documentElement.setAttribute('data-theme','light')
        lightMode();
        imageSwitchMode('light')
    }
}
function lightMode(){
    togleIcon.children[0].textContent = "โหมดกลางวัน"
    togleIcon.children[1].classList.replace('fa-moon','fa-sun')
    nav.style.backgroundColor= 'rgb(255 255 255 /50%)' ;
}
function darkMode(){
    togleIcon.children[0].textContent = "โหมดกลางคืน"
    togleIcon.children[1].classList.replace('fa-sun','fa-moon')
    nav.style.backgroundColor= 'rgb(0 0 0 /50%)' ;
}
function imageSwitchMode(mode){
    image1.src=`img/undraw_speech_to_text_re_8mtf_${mode}.svg`
    image2.src=`img/undraw_performance_overview_re_mqrq_${mode}.svg`
    image3.src=`img/undraw_data_report_re_p4so_${mode}.svg`
}

switchToggle.addEventListener('change',switchMode);