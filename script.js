const form = document.querySelector('form');
let submitBtn = document.querySelector('.submitBtn');
let inputs = document.querySelectorAll('input');
let model = document.querySelector('#model');
let manufacturer = document.querySelector('#manufacturer');
let yearOfCreate = document.querySelector('#yearOfCreate');
let kmDriven = document.querySelector('#kmDriven');
let carList = document.querySelector('.car-list');
let alertmsg = document.querySelector('.alertmsg');

class Car {
    constructor(model, manufacturer, yearOfCreate, kmDriven) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfCreate = yearOfCreate;
        this.kmDriven = kmDriven;
    }
}

const cars = [
    {
        model: "Civic",
        manufacturer: "Honda",
        yearOfCreate: 1985,
        kmDriven: 13500
    },
    {
        model: "Celica",
        manufacturer: "Toyota",
        yearOfCreate: 1992,
        kmDriven: 24100
    },
    {
        model: "Vectra",
        manufacturer: "Opel",
        yearOfCreate: 1990,
        kmDriven: 17950
    },
]

const carItems = (cars) => {
    let printEachCar = cars.map((car) => {
        return `<div class="car">
                    <p>Model: ${car.model}</p>
                    <p>Manufacturer: ${car.manufacturer}</p>
                    <p>Year of creation: ${car.yearOfCreate}</p>
                    <p>Km driven: ${car.kmDriven}</p>                  
                </div>`
    }).join('');
    carList.innerHTML += printEachCar;
} 

const handleSubmit = (event) => {
    event.preventDefault();
    if(model.value == '' || manufacturer.value == '' || yearOfCreate.value == '' || kmDriven.value == '') {
        alertmsg.innerHTML = "<p>Please fill all fields marked with *</p>";
        alertmsg.classList.add("alertmsg-error");
        alertmsg.classList.remove("alertmsg-ok");
    } else {
        let car = new Car(model.value, manufacturer.value, yearOfCreate.value, kmDriven.value);
        cars.push(car);
        carList.innerHTML += `<div class="car">
                                        <p>Model: ${car.model}</p>
                                        <p>Manufacturer: ${car.manufacturer}</p>
                                        <p>Year of creation: ${car.yearOfCreate}</p>
                                        <p>Km driven: ${car.kmDriven}</p>  
                                </div>`;
        alertmsg.innerHTML = "<p>Entry successfully added!</p>";
        alertmsg.classList.remove("alertmsg-error");
        alertmsg.classList.add("alertmsg-ok"); 
    }
    form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    carItems(cars);
    submitBtn.addEventListener('click',  handleSubmit);
});