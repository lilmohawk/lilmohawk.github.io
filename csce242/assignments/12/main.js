let imageURL = "https://portiaportia.github.io/json/images/house-plans/";
let item = document.getElementById("item");

const getJson = async() => {
  const url = "https://portiaportia.github.io/json/house-plans.json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
} 

const showHouse = async() => {
  let house = await getJson();
  //console.log(house);

  house.forEach((item) => {
    getHouseSection(item);
  })

}

const getHouseSection = (house) => {
  let section = document.createElement("section");

  let div1 = document.createElement("div"); //this div has main image and features
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");

  let image1 = document.createElement("img"); // image under div1 to left
  let image2 = document.createElement("img"); // image under div1 to right

  //assigning ids and classes
  div1.id = "mainDiv";


  //titles
  let header1 = document.createElement("h2");
  let header2 = document.createElement("h3");
  let header3 = document.createElement("h3");

  div2.id = "subDiv";

  header1.innerHTML = house.name;
  header1.style.textAlign = "center";
  header2.innerHTML = house["floor_plans"][0]["name"];
  header3.innerHTML = house["floor_plans"][1]["name"];

  //for div 1
  let divImage = document.createElement("img");
  divImage.src = imageURL + house["main_image"];
  image1.src = imageURL + house["floor_plans"][0]["image"];
  image2.src = imageURL + house["floor_plans"][1]["image"];

  div3.classList = "flex1";
  div4.classList = "flex1";

  div3.append(header2);
  div3.append(image1);
  div4.append(header3);
  div4.append(image2);

  div2.append(div3);
  div2.append(div4);


  let info = document.createElement("div");
  
  let size = document.createElement("p");
  size.innerHTML = "Size: " + house.size + " square foot";
  info.append(size);

  let bedroom = document.createElement("p");
  bedroom.innerHTML = "Bedrooms: " + house.bedrooms;
  info.append(bedroom);

  let bathrooms = document.createElement("p");
  bathrooms.innerHTML = "Bathrooms: " + house.bathrooms;
  info.append(bathrooms);

  house["features"].forEach((item) => {
    info.append(document.createElement("p").innerHTML = item);
  });


  //add everything
  section.append(header1);
  div1.append(divImage);
  div1.append(info);
  section.append(div1);
  section.append(div2);
  
  item.append(section);
  
}

showHouse();