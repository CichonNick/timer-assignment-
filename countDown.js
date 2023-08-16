// question #1

function countDown(time) {
    const timer = setInterval(function () {
        time--;
        if (time <= 0) {
            clearInterval(timer);
            console.log('Done!');
        }
        else {
            console.log(time);
        }
    }, 1000);
}
// question # 2

function randomGame(){
    function counter(){
        let count = 0;
        return function(){
            return ++count
        }
    }
    let countGame = counter();
    function fn(){
        let randomNum = Math.random();
        if(randomNum > 0.75){
            console.log(countGame);
            clearInterval(timerid);
        } else{
            countGame()
        }
        }
        let timerid = setInterval(fn , 1000);
}