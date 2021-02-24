import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dev Page");

        var button = document.querySelector('.button');
        var inputValue = document.querySelector('.inputValue');
        var name = document.querySelector('.name');
        var desc = document.querySelector('.desc');
        var temp = document.querySelector('.temp');

        button.addEventListener('click', function () {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=04ad397cf44a66428dc7aafb4faa9f2d')
                .then(response => response.json())
                .then(data => {
                    var nameValue = data['name'];
                    var tempValue = data['main']['temp'];
                    var descValue = data['weather'][0]['description'];

                    name.innerHTML = nameValue;
                    temp.innerHTML = tempValue;
                    desc.innerHTML = descValue;
                })

                .catch(err => alert("Wrong city name!"))
        })




    }
    // async getHtml() {
    //     var div = '<div class="input">';
    //     div += '<input type="text" class="inputValue" placeholder="Enter a city">';
    //     div += '<input type="submit" value="Submit" class="button">';
    //     div += '</div>';
    //     div += '<div class="display">';
    //     div += '<h1 class="name"></h1>';
    //     div += '<p class="desc"></p>';
    //     div += '<p class="temp"></p>';
    //     div += '</div>';

    //     document.write(div);
    // }
    // async getHtml() {
    //     return ` <div class="input">
    //     <input type="text" class="inputValue" placeholder="Enter a city">
    //     <input type="submit" value="Submit" class="button">
    // </div>

    // }
}