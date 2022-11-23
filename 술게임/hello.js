
// const priceA = 1000
// const priceB = 2000
// // 두 상품가격의 합과 평균을 구해서 출력해야 하는 코드 작성
// const sum1 = priceA + priceB
// console.log(`두 상품의 합계는 ${sum1}입니다.`)
// const avg1 = sum1 / 2
// console.log(`두 상품의 평균은 ${avg1}입니다.`)

// const priceC = 3000
// const priceD = 4000
// // 이번에도 두 상품가격의 평균을 구해서 출력해야 한다면? 위와 동일한 코드를 또 작성...
// const sum2 = priceC + priceD
// console.log(`두 상품의 합계는 ${sum2}입니다.`)
// const avg2 = sum2 / 2
// console.log(`두 상품의 평균은 ${avg2}입니다.`)

// 한두번은 괜찮은데 이렇게 수십, 수백번씩 평균을 구하고 출력해야 한다면?


// 세 개의 물건가격을 매개변수로 전달받아 평균값을 리턴하는 함수를 정의하고, 그 함수를 호출해서 평균값을 출력해보세요

// function avg(a,b,c){
// 	const sum = a + b + c 
// 	console.log (`a+b+c의 합계는 ${sum}입니다`)
// 	const avg = sum / 3
// 	return avg
// }

// console.log(avg(3,4,4))


// . 여러분만의 의류 쇼핑몰을 만들려고 합니다. 옷의 종류는 많지만 기본적으로 색깔, 사이즈, 가격의 속성을 갖고 있네요. 그리고 이 옷들의 세 속성을 바로 확인할 수 있게 출력해주는 메소드가 필요할 거 같습니다. 클래스와 객체를 활용해 작성해보아요.

// class Clothes {
// 	constructor(color, size, price){
// 		this.color = color
// 		this.size = size 
// 		this.preice = price
// 	}
// 	printInfo(){
// 		console.log(`상품색깔은 ${this.color}이고 상품 사이즈는 ${this.size}이고 가격은 ~`)
// 	}
// }
// const shoppingmall = new Clothes("red", "m", 100000)

// shoppingmall.printInfo()


// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// for (let i = 1; i < 1; i++) {
// 	console.log(rainbowColors[i])
// }

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// for (const color of rainbowColors) {
// 	console.log(color)
// }


// 열 개의 상품 가격 데이터를 갖고 있는 배열을 만듭니다. 반복문을 활용해 상품들의 가격 합계와 평균을 구해보아요.

// const conduct = [1,2,3,4,12,4,14,1,42,4]

// let sum = 0 


// for(let i = 0; i <=conduct.length; i++){
// 	sum += i
// 	const avg = sum/conduct.length
// }

// const avg = sum/conduct.length
// console.log (avg)

// function findSmallestElement (arr){
// 	let result = arr[0]

// 	if (arr.length === 0){
// 		return 0;
// 	}
// 	for (let i=0; i<arr.length; i++){
// 		if(result>arr[i]){
// 			result = arr[i];
// 		}
// 	} return result;
// }

// console.log(findSmallestElement([100,200,3,2,1]))
// ////////////////////////


// let arr = [50000, 10000, 5000, 1000, 500, 100]
// function calculateMoney (money){
// 	for (let i=0; i<arr.length; i++){
// 		let result = Math.floor (money / arr[i])
// 		console.log(`${arr[i]} * ${result}`)
// 		money = money % arr[i]
// 	}
// }

// calculateMoney(12300)
inputValue = document.getElementById("inputValue")
goButton = document.getElementById("gobutton")
resetButton = document.getElementById("resetbutton")

counting = document.getElementById("counting")
answer = document.getElementById("answering")

goButton.addEventListener("click", identify)
resetButton.addEventListener("click", reset)

let number = 0

inputValue.addEventListener("focus", function(){inputValue.value=""})

function randomNumber(){
	number = Math.floor(Math.random()*100)+1
	console.log("정답", number)
}
randomNumber()

let count = 5
let gameset = false
let history = []

function identify (){
	if(inputValue.value>100 || inputValue.value<1){
		answer.textContent="1부터 100까지의 숫자만 넣어주세요"
		return;
	}
	if(history.includes(inputValue.value)){
		answer.textContent="이미 입력했던 숫자입니다"
		return;
	}
	count --;
	counting.textContent =`남은기회 :${count}`

	if (count <1){
		gameset = true ;
	}
	if (inputValue.value > number){
		answer.textContent="숫자가 너무 큽니다"
	} else if (inputValue.value < number){
		answer.textContent="숫자가 너무 작습니다" 
	} else {
		answer.textContent="정답입니다"
	}
	if (gameset== true){
		goButton.disabled = true;
	}

	history.push(inputValue.value)
	console.log(history)
}
console.log(history)
function reset(){
	count = 5
	randomNumber()
	answer.textContent= "죽기싫다면 맞춰라"
	gameset = false
	goButton.disabled = false
	counting.textContent =`남은기회 :${count}`
	history= []
}