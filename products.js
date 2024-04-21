//url iig zadalna
// fetch eer datagaa tataj avna
//array deer filter ajilluulna
// filterlesen datanaas html iig zurna

const products = [
    {name:"Computer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lifewire.com%2Fhow-fast-does-your-pc-need-to-be-832310&psig=AOvVaw34iKiwgYWGZPKIWpk52dv1&ust=1713246050987000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjy3oPBw4UDFQAAAAAdAAAAABAE",
    desc: "sdfsdfsdfsdf"}, 
    {name:"Computer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lifewire.com%2Fhow-fast-does-your-pc-need-to-be-832310&psig=AOvVaw34iKiwgYWGZPKIWpk52dv1&ust=1713246050987000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjy3oPBw4UDFQAAAAAdAAAAABAE",
    desc: "sdfsdfsdfsdf"}, 
    {name:"Computer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lifewire.com%2Fhow-fast-does-your-pc-need-to-be-832310&psig=AOvVaw34iKiwgYWGZPKIWpk52dv1&ust=1713246050987000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjy3oPBw4UDFQAAAAAdAAAAABAE",
    desc: "sdfsdfsdfsdf"}
    ];


const productSection = document.getElementById("ProdSection");
let productsHTML = "";
for (const product of products) {
    productSection.innerHTML = <h2>Бараанууд</h2>;
}