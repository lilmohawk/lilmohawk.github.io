const ad = document.getElementById("ad");
const container2 = document.getElementById("container2");
let i = 0;

const texts = ["The variety with in these images is outstanding", "Each image has been editted by our superior staff", "Each image has been taken with top camera on the market right now", "Photo will take your breathe", "Photos are worth more than money"];
let imgSrc = ["images/mountain-lake.jpg", "images/golden.jpg", "images/garden.jpg", "images/small-house.jpg", "images/snow.jpg"]
let links = ["https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7", "https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4","https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4","https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4","https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"]
let finishDiv = []


//Code to show the ad
const showAd = () => {
  ad.innerHTML = texts[i];
  if(i == 4 ) {
    i = 0;
  } else {
    i++;
  }
}

const displayAd = () => {
  setInterval(() => {
    showAd();
  }, 2000)
}
//End of code to show the ad

//Start of Image code
const makeImgDiv = () => {
  for(let i in imgSrc) {
    let div = document.createElement('div');
    let image = document.createElement('img')
    let link = document.createElement('a');
    let para = document.createElement('p');

    image.src = imgSrc[i];
    image.style.maxWidth = "100%";

    link.href = link[i];
    link.innerHTML = "Image by wirestock ";

    para.innerHTML = "on Freepik";
    para.style.display = "inline-block";

    container2.append(image);
    div.append(link);
    div.append(para);
    div.classList = "center";
    container2.append(div);
  }
}

makeImgDiv();
showAd();
displayAd();
