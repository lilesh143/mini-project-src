let products = {
    data: [{
            productName: "Plumber & Water-Supply",
            category: "Plumber",
            Name: "Piyanshu Zade",
            image: "img(1).jpg",
        },
        {
            productName: "Refrigerator",
            category: "Electrical",
            Name: "Vishal Tikle",
            image: "img(2).jpg",
        },
        {
            productName: "TV , Radio & Home Theater",
            category: "Electronic",
            Name: "Abhay Mallick",
            image: "img(3).jpg",
        },
        {
            productName: "Mixer , Juicer & Owen",
            category: "Electronic",
            Name: "Pratik Gupta",
            image: "img(4).jpg",
        },
        {
            productName: "Underground Wiring",
            category: "Wiring",
            Name: "Rushikesh Upare",
            image: "img(5).jpg",
        },
        {
            productName: "CCTV Camera & Security",
            category: "CCTV",
            Name: "E Muthu",
            image: "img(6).jpg",
        },
        {
            productName: "Fan & AC",
            category: "Electrical",
            Name: "Tejas Dhamange",
            image: "img(7).jpg",
        },
        {
            productName: "Computer Software & Hardware",
            category: "Electronic",
            Name: "Samyak Anand",
            image: "img(8).jpg",
        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let Name = document.createElement("h6");
    Name.innerText = "Working expert - " + i.Name;
    container.appendChild(Name);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};