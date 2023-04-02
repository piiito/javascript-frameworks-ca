
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useAPI from "../useAPI";
import { create } from 'zustand';
import * as Style from "./home.styled";
import styles from "../styles/productcard.css"

const API_URL = "https://api.noroff.dev/api/v1/online-shop"


function SearchProducts () { 
    
    const { data } = useAPI(API_URL);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    function onSearchProductsInputChange(searchValue) {
    setSearchInput(searchValue);
    
    const results = data.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());

    })

    setFilteredProducts(results);
    };

    function onInputChange(event) {
    onSearchProductsInputChange(event.currentTarget.value);
    };

    return (
    <div>
        <input className={styles.input} onChange={onInputChange} value={searchInput} placeholder="Search for products"/>
        {searchInput !== `` ? 
        <ul> 
            {filteredProducts.map((item) => (
                <li key={item.id}>
                    <Link to={'/product/'+item.id}>
                        <Style.ProductContainer>
                            <Style.ProductHeading>{item.title}</Style.ProductHeading>
                            <Style.ImageContainer>
                                <Style.ProductImage src={item.imageUrl} alt={item.description} />
                            </Style.ImageContainer>
                            <div>   
                            <Style.PriceContainer>{ 
                                item.discountedPrice === item.price ? item.discountedPrice+",-"
                                : <Style.DiscountedPrice>{item.discountedPrice},- <Style.Discount>{((data.price - data.discountedPrice) / data.price * 100).toFixed(0)}% OFF</Style.Discount></Style.DiscountedPrice>
                                }
                            </Style.PriceContainer>
                            </div>
                        </Style.ProductContainer>
                    </Link>
                </li>
            ))}
        </ul>
        : ``}
    </div>
    );
}





export default function HomePage() {
    const { data, isLoading, isError } = useAPI(API_URL, );
    
      return (
          <div>
            <Style.HomepageHeading>
              Homepage
            </Style.HomepageHeading>
            <div>
              <SearchProducts />
            </div>
            <Style.ProductContainer>
                    {data.map((data) => (
                    <Link key={data.id} to={`/product/${data.id}`}>
                    <Style.ProductHeading>{data.title}</Style.ProductHeading>
                    <Style.ImageContainer>
                        <Style.ProductImage src={data.imageUrl} alt={data.description} />
                    </Style.ImageContainer>
                    <div>   
                        <Style.PriceContainer>{ 
                            data.discountedPrice === data.price ? data.discountedPrice+",-"
                            : <Style.DiscountedPrice>{data.discountedPrice},- <Style.Discount>{((data.price - data.discountedPrice) / data.price * 100).toFixed(0)}% OFF</Style.Discount></Style.DiscountedPrice>
                            }
                        </Style.PriceContainer>
                    </div>
                    </Link>
                ))}
            </Style.ProductContainer>
          </div>
        );
}