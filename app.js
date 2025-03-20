const img1 = document.getElementById('image1')
const img2 = document.getElementById('image2')
const img3 = document.getElementById('image3')
const img4 = document.getElementById('image4')
const content = document.getElementById('all-content')
const bedroom = document.getElementById('bedroom')
const dining = document.getElementById('dining')
const kitchen = document.getElementById('kitchen')
const backyard = document.getElementById('backyard')
const button1 = document.getElementById('bb')
const button2 = document.getElementById('bd')
const button3 = document.getElementById('bk')
const button4 = document.getElementById('by')


img1.addEventListener('click', function(){
    content.style.display = 'none'
    bedroom.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column;'
})

button1.addEventListener('click', function(){
    content.style.display = 'flex'
    bedroom.style.display = 'none'
})

img2.addEventListener('click', function(){
    content.style.display = 'none'
    dining.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column;'
})

button2.addEventListener('click', function(){
    content.style.display = 'flex'
    dining.style.display = 'none'
})

img3.addEventListener('click', function(){
    content.style.display = 'none'
    kitchen.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column;'
})

button3.addEventListener('click', function(){
    content.style.display = 'flex'
    kitchen.style.display = 'none'
})

img4.addEventListener('click', function(){
    content.style.display = 'none'
    backyard.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column;'
})

button4.addEventListener('click', function(){
    content.style.display = 'flex'
    backyard.style.display = 'none'
})
