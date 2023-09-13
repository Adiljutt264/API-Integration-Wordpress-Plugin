class FakeStoreAPI {
  constructor() {
    this.products = [];
  }

  async fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data;
    } catch (error) {
      console.error("Error fetching data from Fake Store API:", error);
    }
  }

  getProductImages() {
    return this.products.map((product) => product.image);
  }

  getProductTitles() {
    return this.products.map((product) => product.title);
  }

  getProductPrices() {
    return this.products.map((product) => product.price);
  }
}
