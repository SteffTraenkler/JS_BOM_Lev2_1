let count = document.getElementById('count');
let msg = document.getElementsByClassName('message');
console.log(msg);
console.log(count);
let count2 = Number(count.innerText);
console.log(count);

messg = window.onload = function () {
    let timer = setInterval(function () {
        if (count2 < 0) {
            console.log('testmessage');
            clearInterval(timer);
            msg[0].style.display = 'none';
        } else {
            console.log(count2);
            count.innerText = count2;
        }
        count2--
    }, 1000)
}