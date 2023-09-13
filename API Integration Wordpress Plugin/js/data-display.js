document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const container = document.getElementById("fake-store-container");
  container.classList.add("fake-store-plugin");

  data.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    imageContainer.appendChild(image);

    productDiv.appendChild(imageContainer);

    const title = document.createElement("h3");
    title.textContent = product.title;
    productDiv.appendChild(title);

    const price = document.createElement("p");
    price.textContent = product.price;
    productDiv.appendChild(price);

    container.appendChild(productDiv);
  });
});
