const apiURL = "https://fakestoreapi.com/products";

async function getProducts(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching API:", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // clear previous items

  products.forEach((product) => {
    const productCard = `
      <div class="col-md-4 col-lg-3 col-sm-6">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title.substring(0, 40)}...</h5>
            <p class="price-tag">$${product.price}</p>
            <p class="card-text text-muted small">${product.category}</p>
            <button class="btn btn-outline-primary mt-auto" onclick="viewDetails(${product.id})">View Details</button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += productCard;
  });
}

function viewDetails(id) {
  alert(`You clicked on Product ID: ${id}`);
}

getProducts(apiURL);
