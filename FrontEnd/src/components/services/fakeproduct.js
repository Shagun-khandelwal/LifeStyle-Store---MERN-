const products = [
  {
    _id: "643473007a1fa49ff3e6f9b3",
    img: "titan",
    description:
      "Titan Company Limitedis an Indian luxury products company that mainly manufactures fashion accessories such as watches, jewellery and eyewear. Part of the Tata Group and started as a joint venture with TIDCO, the company is headquartered in Hosur,Tamilnadu.",
    genre: {
      _id: "643bbb83f36fd033b0a8e237",
      genre: "watch",
      __v: 0,
    },
    price: 220,
    rating: 4.2,
    title: "Titan Watch-2",
  },
  {
    _id: "643474127a1fa49ff3e6f9b4",
    img: "cannonEOS",
    description:
      "Canon has been manufacturing and distributing digital cameras since 1984, starting with the RC-701. The RC series was followed by the PowerShot and Digital IXUS series of digital cameras. Canon also developed the EOS series of digital single-lens reflex cameras (DSLR) which includes high-end professional models.",
    genre: {
      _id: "643bb40d2036eb0faf9c5ca9",
      genre: "camera",
      __v: 0,
    },
    price: 359,
    rating: 4.4,
    title: "Cannon Eos A-2",
  },
  {
    _id: "643475447a1fa49ff3e6f9b5",
    img: "H & W",
    description:
      "H&M is a Swedish multinational clothing-retail company known for its fast-fashion clothing for men, women, teenagers, and children. As of November 2019, H&M operates in 74 countries with over 5,000 stores under the various company brands, with 126,000 full-time equivalent positions. It is the second-largest global clothing retailer, behind Spain-based Inditex",
    genre: {
      _id: "643bb3ff2036eb0faf9c5ca7",
      genre: "clothes",
      __v: 0,
    },
    price: 59,
    rating: 3.8,
    title: "H & M sky blue cotton fabric shirt",
  },
  {
    _id: "643473007a1fa49ff3e6f9b48",
    img: "titan",
    description:
      "Titan Company Limitedis an Indian luxury products company that mainly manufactures fashion accessories such as watches, jewellery and eyewear. Part of the Tata Group and started as a joint venture with TIDCO, the company is headquartered in Hosur,Tamilnadu.",
    genre: "watch",
    price: 220,
    rating: 4.2,
    title: "Titan Watch-2",
  },
  {
    _id: "643474127a1fa49ff3e6f9b45",
    img: "cannonEOS",
    description:
      "Canon has been manufacturing and distributing digital cameras since 1984, starting with the RC-701. The RC series was followed by the PowerShot and Digital IXUS series of digital cameras. Canon also developed the EOS series of digital single-lens reflex cameras (DSLR) which includes high-end professional models.",
    genre: "camera",
    price: 359,
    rating: 4.4,
    title: "Cannon Eos A-2",
  },
  {
    _id: "643475447a1fa49ff3e6f9b51",
    img: "H & W",
    description:
      "H&M is a Swedish multinational clothing-retail company known for its fast-fashion clothing for men, women, teenagers, and children. As of November 2019, H&M operates in 74 countries with over 5,000 stores under the various company brands, with 126,000 full-time equivalent positions. It is the second-largest global clothing retailer, behind Spain-based Inditex",
    genre: "clothes",
    price: 59,
    rating: 3.8,
    title: "H & M sky blue cotton fabric shirt",
  },
  {
    _id: "643473007a1fa49ff3e6f9b35",
    img: "titan",
    description:
      "Titan Company Limitedis an Indian luxury products company that mainly manufactures fashion accessories such as watches, jewellery and eyewear. Part of the Tata Group and started as a joint venture with TIDCO, the company is headquartered in Hosur,Tamilnadu.",
    genre: "watch",
    price: 220,
    rating: 4.2,
    title: "Titan Watch-2",
  },
  {
    _id: "643474127a1fa49ff3e6f9b41",
    img: "cannonEOS",
    description:
      "Canon has been manufacturing and distributing digital cameras since 1984, starting with the RC-701. The RC series was followed by the PowerShot and Digital IXUS series of digital cameras. Canon also developed the EOS series of digital single-lens reflex cameras (DSLR) which includes high-end professional models.",
    genre: "camera",
    price: 359,
    rating: 4.4,
    title: "Cannon Eos A-2",
  },
  {
    _id: "643475447a1fa49ff3e6f9b59",
    img: "H & W",
    description:
      "H&M is a Swedish multinational clothing-retail company known for its fast-fashion clothing for men, women, teenagers, and children. As of November 2019, H&M operates in 74 countries with over 5,000 stores under the various company brands, with 126,000 full-time equivalent positions. It is the second-largest global clothing retailer, behind Spain-based Inditex",
    genre: "clothes",
    price: 59,
    rating: 3.8,
    title: "H & M sky blue cotton fabric shirt",
  },
  {
    _id: "643473007a1fa49ff3e6f9b33",
    img: "titan",
    description:
      "Titan Company Limitedis an Indian luxury products company that mainly manufactures fashion accessories such as watches, jewellery and eyewear. Part of the Tata Group and started as a joint venture with TIDCO, the company is headquartered in Hosur,Tamilnadu.",
    genre: "watch",
    price: 220,
    rating: 4.2,
    title: "Titan Watch-2",
  },
];
const productGenre = [
  {
    _id: "64356e777a1fa49ff3e6f9b9",
    genre: "watch",
  },
  {
    _id: "64356ea67a1fa49ff3e6f9ba",
    genre: "clothes",
  },
  {
    _id: "64356ec27a1fa49ff3e6f9bb",
    genre: "camera",
  },
];

export function getProducts() {
  return products;
}

export function getProductGenre() {
  return productGenre;
}

export function getProductInfo(productid) {
  return products.find((p) => p._id === productid);
}
