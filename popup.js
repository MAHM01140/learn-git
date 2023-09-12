let openbut=document.querySelector('.open'),
close=document.querySelector('.poup span'),
poupContiner=document.querySelector('.poup-countiner')
openbut.addEventListener('click',function(){
poupContiner.classList.add('active')})

close.addEventListener('click',function(){
    poupContiner.classList.remove('active')
})