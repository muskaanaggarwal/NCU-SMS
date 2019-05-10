import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from, Observer } from "rxjs";
@Injectable()
export class StaticDataSource {
 private products: Product[] = [
  new Product(
        1,
        'Sandwich',
        '15 May 2019',
        'Food',
        100,
        100,
        'Perishable',
        'Cooked',
        'An item of food consisting of two pieces of bread with a filling between them, eaten as a light meal.',
        '',
        'Veg'
      ),
      new Product(
        2,
        'Pasta',
        '15 May 2019',
        'Food',
        100,
        100,
        'Perishable',
        'Cooked',
        'Food made from flour, water, and sometimes egg, that is cooked and usually served with a sauce. It is made in various shapes that have different names.',
        '',
        'Veg'
      ),
      new Product(
        3,
        'French Fries',
        '15 May 2019',
        'Food',
        100,
        100,
        'Perishable',
        'Cooked',
        'Long, thin pieces of potato that are fried and eaten hot.',
        '',
        'Veg'
      ),
      new Product(
        4,
        'Burger',
        '15 May 2019',
        'Food',
        100,
        100,
        'Perishable',
        'Cooked',
        'A flat round cake of minced potatoes mixed with other vegetables, fried or grilled and typically served in a bread roll garnished with various condiments.',
        '',
        'Veg'
      ),
      new Product(
        5,
        'Pizza',
        '15 May 2019',
        'Food',
        100,
        100,
        'Perishable',
        'Cooked',
        'A dish of Italian origin, consisting of a flat round base of dough baked with a topping of tomatoes and cheese, typically with added meat, fish, or vegetables.',
        '',
        'Veg'
      ),
      new Product(
        6,
        'Coke',
        '15 May 2019',
        'Soft Drink',
        100,
        100,
        'Non-Perishable',
        'Coca-Cola',
        'A carbonated non-alcoholic drink manufactured by the Coca-Cola Company.',
        '',
        'Veg'
      ),
      new Product(
        7,
        'Sprite',
        '15 May 2019',
        'Soft Drink',
        100,
        100,
        'Non-Perishable',
        'Coca-Cola',
        'Sprite is a colorless, caffeine-free, lemon and lime-flavored soft drink created by The Coca-Cola Company.',
        '',
        'Veg'
      ),
      new Product(
        8,
        'Mountain-Dew',
        '15 May 2019',
        'Soft Drink',
        100,
        100,
        'Non-Perishable',
        'PepsiCo',
        'Mountain Dew is a carbonated soft drink brand produced and owned by PepsiCo',
        '',
        'Veg'
      ),
      new Product(
        9,
        'Tea',
        '15 May 2019',
        'Soft Drink',
        100,
        100,
        'Perishable',
        'Cooked',
        'A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water.',
        '',
        'Veg'
      ),
      new Product(
        10,
        'Coffee',
        '15 May 2019',
        'Soft Drink',
        100,
        100,
        'Perishable',
        'Cooked',
        'A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.',
        '',
        'Veg'
      ),
      new Product(
        11,
        'Chips',
        '15 May 2019',
        'Packed Snacks',
        100,
        100,
        'Non-Perishable',
        'Packed',
        'A long rectangular piece of deep-fried potato.',
        '',
        'Veg'
      ),
      new Product(
        12,
        'Nachos',
        '15 May 2019',
        'Packed Snacks',
        100,
        100,
        'Non-Perishable',
        'Doritos',
        'A dish of tortilla chips topped with melted cheese and often also with other savoury toppings.',
        '',
        'Veg'
      ),
      new Product(
        13,
        'Namkeen',
        '15 May 2019',
        'Packed Snacks',
        100,
        100,
        'Non-Perishable',
        'Haldiram',
        'A small savoury snack or dish.',
        '',
        'Veg'
      ),
      new Product(
        14,
        'Lays',
        '15 May 2019',
        'Packed Snacks',
        100,
        100,
        'Non-Perishable',
        'Frito-Lay',
        'Potato chips varieties produced by Frito-Lay.',
        '',
        'Veg'
      ),
      new Product(
        15,
        'Pringles',
        '15 May 2019',
        'Packed Snacks',
        100,
        100,
        'Non-Perishable',
        'Pringles',
        'Brand of potato and wheat-based stackable snack chips.',
        '',
        'Veg'
      ),
      new Product(
        16,
        'Rolled Biscuits',
        '15 May 2019',
        'Biscuits',
        100,
        100,
        'Perishable',
        'Baked',
        'Rolled biscuits are one of the most popular baking-powder leavened quick breads.',
        '',
        'Veg'
      ),
      new Product(
        17,
        'Drop Biscuits',
        '15 May 2019',
        'Biscuits',
        100,
        100,
        'Perishable',
        'Baked',
        'Drop biscuits have more milk or other liquid added to the dough than rolled biscuits. The dough is moister and cannot be kneaded or rolled.',
        '',
        'Veg'
      ),
      new Product(
        18,
        'Scones',
        '15 May 2019',
        'Biscuits',
        100,
        100,
        'Perishable',
        'Baked',
        'Scones are sweet, rich wedge-shaped biscuits that are usually made with cream as well as butter. Scones have a tender, heavy crumb and a slightly crusty brown top. ',
        '',
        'Veg'
      ),
      new Product(
        19,
        'Shortcakes',
        '15 May 2019',
        'Biscuits',
        100,
        100,
        'Perishable',
        'Baked',
        'Shortcakes use rich biscuits or scones as a base. They are either split or served whole, topped with sweetened fruit and whipped cream or ice cream.',
        '',
        'Veg'
      ),
      new Product(
        20,
        'Viennese whirls',
        '15 May 2019',
        'Biscuits',
        100,
        100,
        'Perishable',
        'Baked',
        'Viennese whirls are a sandwich biscuit made up of two shortbread biscuits held together with raspberry jam and buttercream.',
        '',
        'Veg'
      ),
      new Product(
        21,
        'Cookies',
        '15 May 2019',
        'Bakery',
        100,
        100,
        'Perishable',
        'Britannia',
        'A baked or cooked food that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc.',
        '',
        'Veg'
      ),
      new Product(
        22,
        'Cake',
        '15 May 2019',
        'Bakery',
        100,
        100,
        'Perishable',
        'Britannia',
        'An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated.',
        '',
        'Veg'
      ),
      new Product(
        23,
        'Pastry',
        '15 May 2019',
        'Bakery',
        100,
        100,
        'Perishable',
        'Baked',
        'A food made from a mixture of flour, fat, and water, rolledflat and either wrapped around or put over or under other foods, and then baked.',
        '',
        'Veg'
      ),
      new Product(
        24,
        'Pudding',
        '15 May 2019',
        'Bakery',
        100,
        100,
        'Perishable',
        'Baked',
        'A cooked sweet dish served after the main course of a meal.',
        '',
        'Veg'
      ),
      new Product(
        25,
        'Chocolate Brownies',
        '15 May 2019',
        'Bakery',
        100,
        100,
        'Perishable',
        'Baked',
        'A chocolate brownie is a square, baked, chocolate dessert. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. They may include nuts, frosting, cream cheese, chocolate chips, or other ingredients',
        '',
        'Veg'
      )
 ];
 getProducts(): Observable <Product[]> {
     return from([this.products]);
 }
}
