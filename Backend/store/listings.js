const listings = [
  {
    id: 201,
    title: "1l Apfelsaft, 1kg Hackfleisch, 1 Kasten Astra",
    images: [{ fileName: "einkaufswagen" }],
    price: 25,
    categoryId: 5,
    userId: 1,
  },
  {
    id: 3,
    title: "Käse, 2l Milch, 2 Salami Pizzen",
    images: [{ fileName: "einkaufswagen" }],
    categoryId: 1,
    price: 20,
    userId: 2,
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
