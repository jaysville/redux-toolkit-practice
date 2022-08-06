import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Sega Mega",
    description: "My first video game console, a retro classic gaming device",
  },
  {
    id: "p2",
    price: 16,
    title: "Tee-Square",
    description: "An engineering drawing MUST have tool",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(({ id, price, title, description }) => {
          return (
            <ProductItem
              id={id}
              key={id}
              title={title}
              price={price}
              description={description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
