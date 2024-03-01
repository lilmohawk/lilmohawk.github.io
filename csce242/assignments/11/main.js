let popup = document.getElementById("popup");
let container = document.getElementById("container");
let modalTitle = document.getElementById("modalTitle");
let modalImg = document.getElementById("modalImg");
let modalPrice = document.getElementById("modalPrice");
let modalExpl = document.getElementById("modalExpl");

let image = ['images/images.webp', 'images/chev.webp', 'images/mer.webp', 'images/hellcat.webp'];
let title = ['2023 Cadillac CT4 V-Series','2024 Chevrolet','2019 Mercedes-Benz','2022 Dodge Charger SRT'];
let price = ['$89,835','$140,215','$37,998','$79,212'];
let expl = ['Electric Blue 2023 Cadillac CT4 V-Series RWD 10-Speed Automatic 3.6L V6 15 Speakers, 18 Aluminum Alloy Wheels, 2.85 Axle Ratio, 3.73 Axle Ratio, 4-Wheel Disc Brakes, ABS brakes, Adaptive Cruise Control, Adaptive Remote Start, Adaptive suspension, Air Conditioning, Air Ionizer, AKG Premium Surround Sound 15-Speaker System, Alloy wheels, AM/FM radio','The vehicle is pure luxury with a heated steering wheel. This 2024 Chevrolet Corvette offers Automatic Climate Control for personalized comfort. Protect this model from unwanted accidents with a cutting edge backup camera system. The installed navigation system will keep you on the right path. The leather seats in this unit are a must for buyers looking for comfort, durability, and style. ','Treat yourself to the luxury you deserve when you buy or lease a 2019 Mercedes-Benz CLA 250. From its top-of-the-line amenities to its state-of-the-art technologies, this Mercedes-Benz 4-door Coupe has a refined interior you’ll love. Wondering about the 2019 CLA 250 specs? This new 4-door coupe is powered by a potent engine that delivers impressive horsepower for all your journeys. ','Two of the fastest, most powerful sedans in the world are the 2022 Dodge Charger SRT Hellcat and the Charger SRT Hellcat Redeye with 717 and 797 horsepower, respectively. They’re the headline grabbers, but Dodge also says that the Scat Pack model with a 485-horsepower V8 represents the best power-to-dollar ratio of any new sedan'];
let cars = [];

class Car {
  constructor(title, image, price, expl) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.expl = expl;
  }

  get Section () {
    let section = document.createElement('section');
    section.classList = "item flex1";
    section.onclick = () => {
      let id01 = document.getElementById('id01');
      id01.style.display = "block";

      model(this);
    }

    let carh2 = document.createElement("h2");
    carh2.textContent = this.title;

    let carimg = document.createElement('img');
    carimg.src = this.image;

    section.append(carh2);
    section.append(carimg);

    container.append(section);
  };

  get expandedSection () {
    let poph1 = document.createElement('h1');
    poph1.textContent = this.title;

    let popImg = document.createElement('img').src = this.image;

    popup.append(poph1);
    popup.append(popImg);
  };
} 

let model = (car) => {
  modalTitle.innerText = car.title;
  modalImg.src = car.image;
  modalPrice.innerText = car.price;
  modalExpl.innerText = car.expl;
}


for(i in title) {
  let car = new Car(title[i], image[i], price[i], expl[i]);
  car.Section;
  cars.push(car);
}

//Below is an explain on how to add things to it
popup.append(document.createElement('h1'));