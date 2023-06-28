const watch = document.getElementById('watch')
const redBtn = document.getElementById('red')
const purpleBtn = document.getElementById('purple')
const greyBtn = document.getElementById('grey')
const blackBtn = document.getElementById('black')
const pinkBtn = document.getElementById('pink')
const timeBtn = document.getElementById('time')
const heartRateBtn = document.getElementById('heartRate')
const timeDisplay = document.getElementById('time-display')
const hearRateDisplay = document.getElementById('heartRate-display')

function changeColor(color){
    if(color === 'red'){
        watch.src = './assets/red.png'
    }
    else if(color === 'purple'){
        watch.src = './assets/purple.png'
    }
    else if(color === 'black'){
        watch.src = './assets/black.png'
    }
    else if(color === 'grey'){
        watch.src = './assets/grey.png'
    }
    else if(color === 'pink'){
        watch.src = './assets/pink.png'
    }
}

redBtn.addEventListener('click', function(e){
    changeColor('red')
})
blackBtn.addEventListener('click', function(e){
    changeColor('black')
})
greyBtn.addEventListener('click', function(e){
    changeColor('grey')
})
pinkBtn.addEventListener('click', function(e){
    changeColor('pink')
})
purpleBtn.addEventListener('click', function(e){
    changeColor('purple')
})

heartRateBtn.addEventListener('click', function(e){
        hearRateDisplay.style.display = 'block';
        timeDisplay.style.display = 'none'
        

})

timeBtn.addEventListener('click', function(e){
    hearRateDisplay.style.display = 'none';
    timeDisplay.style.display = 'block';
})


function Time(){
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds  = date.getSeconds()

    let period = "";

    if (hours > 12){
        period = 'PM'

    }else{
        period = 'AM'
    }

    if (hours === 0){
        hours = 12
    }else if (hours > 12){
        hours = hours - 12
    }

    hours = update(hours)
    minutes = update(minutes)
    seconds = update(seconds)

    timeDisplay.innerText =  hours + ":" + minutes + ":" + seconds + " " + period;
    setTimeout(Time, 1000);

}

function update(time){
    if (time < 10){
        return "0" + time
    }else{
        return time
    }
}

Time()