import Product from "@/components/Product";

const Products = () => {
  return (
    <section className="py-16 padding-x bg-gray-100" id="products">
      <h2 className="text-4xl monts font-medium text-center">
        Our Most Selling Products
      </h2>
      <div className="w-full md:pt-20 pt-8 flex justify-evenly  gap-4 z-10 flex-wrap">
        <Product name="Ventilator" price={4999} link="/" imageSrc="/ventilator.jpg" />
        <Product name="Bioprinters" price={3999} link="/" imageSrc="/bg/blogbg2.jpg" />
      </div>
    </section>
  );
};

export default Products;
