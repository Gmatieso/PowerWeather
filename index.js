
// fetch data

fetch("https://api.openweathermap.org/data/2.5/weather?q=Thika&appid=faa70cbaae7edf4ddc280057abe67d2c")
.then(res => res.json())
.then(data => {
    console.log(data)
    
})

