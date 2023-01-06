import GEM11 from "../Product_Image/GEMS11.png";
import GEM12 from "../Product_Image/GEMS12.png";
import GEM21 from "../Product_Image/GEMS21.png";
import GEM22 from "../Product_Image/GEMS22.png";
import GEM31 from "../Product_Image/GEMS31.png";
import GEM32 from "../Product_Image/GEMS32.png";
import GEM42 from "../Product_Image/GEMS42.png";
import GEM51 from "../Product_Image/GEMS51.png";
import GEM52 from "../Product_Image/GEMS52.png";
import GEM61 from "../Product_Image/GEMS61.png";

const initialState = {
  products: [
    {
      id: 12341,
      tag: "NEW",
      feature: "no",
      brand: "SoundPeates",
      name: "SOUNDPEATS Life Wireless Earbuds",
      category: "AudioPhile",
      color: "Black",
      date: "05/08/22",
      discount: "12",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      price: "39",
      quantity: 1,
      stock: 5,
      image: GEM11,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12342,
      tag: "NEW",
      feature: "no",
      brand: "HUAWAI",
      name: "BEST Wireless Earbuds",
      category: "True Wireless",
      color: "Black",
      date: "06/08/22",
      discount: "0",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      price: "50",
      quantity: 1,
      stock: 6,
      image: GEM12,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12343,
      tag: "Personal",
      feature: "no",
      brand: "SOUNDPEATS",
      name: "SOUNDPEATS Free2 Classic Wireless Earbuds",
      category: "Noise Cancelling",
      color: "Black",
      date: "07/08/22",
      discount: "5",
      description: "Stylish Design with Ultra-long Battery Life for 30hrs",
      price: "39.99",
      quantity: 1,
      stock: 7,
      image: GEM21,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12344,
      tag: "Old",
      feature: "no",
      brand: "GEMS",
      name: "GEMS WaterProof In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "20",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 8,
      image: GEM22,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12345,
      tag: "Feature",
      feature: "yes",
      brand: "GEMS",
      name: "GEMS Reduce Disturbance In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "50",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 9,
      image: GEM31,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12346,
      tag: "Feature",
      feature: "yes",
      brand: "GEMS",
      name: "GEMS True Wireless + TrueFree In-Ear Sports Earbuds",
      category: "Noise Cancelling",
      color: "Black",
      date: "08/08/22",
      discount: "10",
      description: "Max Performance. Zero Boundaries.",
      price: "79.99",
      quantity: 1,
      stock: 9,
      image: GEM32,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12347,
      tag: "Feature",
      feature: "yes",
      brand: "SAMSUNG",
      name: "SAMSUNG TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "15",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 9,
      image: GEM61,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12347,
      tag: "Feature",
      feature: "yes",
      brand: "SAMSUNG",
      name: "SAMSUNG TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "15",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 9,
      image: GEM52,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12347,
      tag: "Feature",
      feature: "yes",
      brand: "SAMSUNG",
      name: "SAMSUNG TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "15",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 9,
      image: GEM51,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
    {
      id: 12347,
      tag: "Feature",
      feature: "yes",
      brand: "SAMSUNG",
      name: "SAMSUNG TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "15",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 9,
      image: GEM42,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
    },
  ],
  product: {}, // 2nd key define single product fetch
}

const productReducer = (state = initialState, action) => {
  //parseInt: convert a string into a number is to use the parseInt() function
  switch(action.type){
    case "PRODUCT":  
    return {...state, product: state.products.find((product) => product.id === parseInt(action.id))} // find single peoduct
    default: 
    return state;
}
};

export default productReducer;
