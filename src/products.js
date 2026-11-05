const base = 'https://www.coca-cola.com/us/en/brands/';
const cola = 'Carbonated water|High fructose corn syrup|Caramel color|Phosphoric acid|Natural flavors|Caffeine';
const diet = 'Carbonated water|Caramel color|Aspartame|Phosphoric acid|Potassium benzoate|Natural flavors|Citric acid|Caffeine';
const zero = 'Carbonated water|Caramel color|Phosphoric acid|Aspartame|Potassium benzoate|Natural flavors|Potassium citrate|Acesulfame potassium';
// Nutrition is stored at the source serving size; the interface normalizes it only on request.
function product(id, name, brand, flavor, sweetener, calories, sugar, sodium, oz, ingredients, image, year, path, color) {
  return { id, name, brand, flavor, sweetener, calories, sugar, sodium, oz, ingredients: ingredients.split('|'), image, year, source: base + path, color };
}
export const initialProducts = [
  product('zero','Coca-Cola Zero Sugar','Coca-Cola','Cola','Aspartame + Ace-K + stevia',0,0,40,12,zero+'|Caffeine|Stevia extract','coke-zero.webp',2005,'coca-cola/products/zero','#242424'),
  product('diet','Diet Coke','Diet Coke','Cola','Aspartame',0,0,40,12,diet,'coke-diet.webp',1982,'diet-coke/products','#b7b9b9'),
  product('original','Coca-Cola Original','Coca-Cola','Cola','Corn syrup',240,65,75,20,cola,'coke-og.webp',1886,'coca-cola/products/original','#d82425'),
  product('cherry','Coca-Cola Cherry','Coca-Cola','Cherry','Corn syrup',150,42,35,12,cola,'coke-cher.jpeg',1985,'coca-cola/products/coca-cola-flavors','#9d2347'),
  product('vanilla','Coca-Cola Vanilla','Coca-Cola','Vanilla','Corn syrup',150,42,35,12,cola,'coke-van.webp',2002,'coca-cola/products/coca-cola-flavors','#c6a875'),
  product('sprite','Sprite Original','Sprite','Lemon-lime','Corn syrup',140,38,65,12,'Carbonated water|High fructose corn syrup|Citric acid|Natural flavors|Sodium citrate|Sodium benzoate','sprite-og.webp',1961,'sprite/products','#198343'),
  product('sprite-zero','Sprite Zero Sugar','Sprite','Lemon-lime','Aspartame + Ace-K',0,0,35,12,'Carbonated water|Citric acid|Potassium citrate|Natural flavors|Potassium benzoate|Aspartame|Acesulfame potassium','sprite-zero.jpeg',null,'sprite/products','#84ae82'),
  product('caffeine-free','Coca-Cola Caffeine Free','Coca-Cola','Cola','Corn syrup',140,39,45,12,cola.replace('|Caffeine',''),null,null,'coca-cola/products/original','#a47d47'),
  product('mexico','Coca-Cola Mexico','Coca-Cola','Cola','Cane sugar',150,39,85,12,cola.replace('High fructose corn syrup','Cane sugar'),null,null,'coca-cola/products/original','#d82425'),
  product('zero-free','Coca-Cola Zero Caffeine Free','Coca-Cola','Cola','Aspartame + Ace-K',0,0,40,12,zero,null,null,'coca-cola/products/zero','#484238'),
  product('diet-free','Caffeine Free Diet Coke','Diet Coke','Cola','Aspartame',0,0,40,12,diet.replace('|Caffeine',''),null,null,'diet-coke/products','#bfae8c'),
  product('diet-cherry','Diet Cherry Coke','Diet Coke','Cherry','Aspartame + Ace-K',0,0,30,12,'Carbonated water|Caramel color|Phosphoric acid|Potassium benzoate|Aspartame|Natural flavors|Acesulfame potassium|Caffeine',null,null,'diet-coke/products','#b64b65'),
  product('fanta','Fanta Orange','Fanta','Orange','Corn syrup',270,73,80,20,'Carbonated water|High fructose corn syrup|Citric acid|Natural flavors|Sodium benzoate|Modified food starch|Glycerol ester of rosin|Yellow 6|Red 40',null,null,'fanta/products','#ef8e27'),
  product('fanta-zero','Fanta Zero Sugar Orange','Fanta','Orange','Aspartame + Ace-K',0,0,60,20,'Carbonated water|Citric acid|Potassium citrate|Aspartame|Natural flavors|Modified food starch|Potassium benzoate|Acesulfame potassium|Glycerol ester of rosin|Yellow 6|Medium chain triglycerides|Sucrose acetate isobutyrate|Red 40',null,null,'fanta/products','#efa54c'),
  product('fanta-strawberry','Fanta Strawberry','Fanta','Strawberry','Corn syrup',270,74,80,20,'Carbonated water|High fructose corn syrup|Natural flavors|Citric acid|Sodium benzoate|Red 40',null,null,'fanta/products','#e14e58'),
];
