import fs from "fs";
import path from "path";

const dataDir = "./src/data";
const outFile = "./public/products.json";

/* какие файлы объединяем */
const files = [
  "vodka.json",
  "whisky.json",
  "rum.json",
  "tequila.json",
  "gin.json",
  "liqueur.json",
  "brandy.json",
  "polish.json"
];

let allProducts = [];

for (const file of files) {
  const filePath = path.join(dataDir, file);

  if (!fs.existsSync(filePath)) continue;

  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  allProducts = allProducts.concat(json);
}

/* создаём public если вдруг нет */
if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public");
}

fs.writeFileSync(outFile, JSON.stringify(allProducts, null, 2));

console.log("✔ products.json generated:", allProducts.length, "products");