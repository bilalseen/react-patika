import axios from "axios";
import getData from "./lib/service.js";

(async function main() {
  const data = await getData(1);
  console.log(data);
})();
