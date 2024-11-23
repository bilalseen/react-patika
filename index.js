import axios from "axios";

async function getProduct(product_id) {
  try {
    const { data: product } = await axios(
      `https://fakestoreapi.com/products/${product_id}`
    );
    console.log(product);
  } catch (e) {
    console.log(e);
  }
}

getProduct(5);
