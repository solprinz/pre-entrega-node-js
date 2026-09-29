const BASE_URL = "https://fakestoreapi.com";

const [metodo, recurso, ...restoArgs] = process.argv.slice(2);
const [title, price, category] = restoArgs;

//Consultar Todos los Productos:
async function allProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const products = await response.json();
    console.log("Listado de todos los productos:");
    console.log(products);
  } catch (error) {
    console.log("Error al consultar los productos.");
  }
}

//Consultar un Producto Específico:
async function productById(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const product = await response.json();
    console.log(`Información sobre producto ID: ${id}`);
    console.log(product);
  } catch (error) {
    console.log("Error al consultar el producto.");
  }
}

//Crear un Producto Nuevo:
async function addProduct(title, price, category) {
  try {
    const newProductData = { title, price: Number(price), category };

    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData),
    });
    const newProduct = await response.json();
    console.log("Nuevo producto agregado con ID:", newProduct.id);
    console.log(newProduct);
  } catch (error) {
    console.log("Error al crear el producto.");
  }
}

//Eliminar un Producto:
async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    const deletedProduct = await response.json();
    console.log(deletedProduct);
    console.log(`El producto ID ${id} ha sido eliminado`);
  } catch (error) {
    console.log("Error al eliminar el producto.");
  }
}

if (metodo === "GET" && recurso === "products") {
  await allProducts();
} else if (metodo === "GET" && recurso && recurso.startsWith("products/")) {
  const id = recurso.split("/")[1];
  await productById(id);
} else if (metodo === "POST" && recurso === "products") {
  await addProduct(title, price, category);
} else if (metodo === "DELETE" && recurso && recurso.startsWith("products/")) {
  const id = recurso.split("/")[1];
  await deleteProduct(id);
}
