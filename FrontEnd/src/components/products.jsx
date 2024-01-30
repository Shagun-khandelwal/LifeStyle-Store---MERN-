import React, { Component } from "react";
import ListProduct from "./listproduct";
import ListGroup from "./common/listgroup";
import {getProducts} from './services/productservice';
import { getGenres } from './services/genreservice';
class Products extends Component {
  state = {
    selectedGenre: null,
    genres: [],
    products: [],
  };

  async componentDidMount() {
    const {data:products} = await getProducts();
    const {data:genres} = await getGenres();
    const allprooduct = { _id: "", genre: "All Categories" };
    const AllGenres = [allprooduct, ...genres];
    this.setState({ products, genres: AllGenres });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { genres, selectedGenre } = this.state;
    let {products} = this.state;
    if(selectedGenre && selectedGenre._id){
        products = products.filter(product=>product.genre.genre === selectedGenre.genre
        )
    }
    return (
      <div className="container-fluid">
        <h1>Products</h1>
        <div className="row">
          <div className="col-2">
            <ListGroup
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <div className="row">
              <ListProduct allProducts={products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
