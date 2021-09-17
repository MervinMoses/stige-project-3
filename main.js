let btn=document.getElementById('btn');
let output=document.getElementById('output');
let quote= 
  [ '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
   '" The way to get started is to quit talking and begin doing." -Walt Disney',
   ' "Your time is limited, so dont waste it living someone else life. Dont be trapped by dogma – which is living with the results of other peoples thinking." -Steve Jobs',
    '"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt',
    '"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough." -Oprah Winfrey',
   ' "If you set your goals ridiculously high and its a failure, you will fail above everyone elses success." -James Cameron',
   ' "Life is what happens when youre busy making other plans." -John Lennon',
   ' "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',
   ' "Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson.',
  ];

btn.addEventListener('click',function(){
    var rand=quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML=rand;
})