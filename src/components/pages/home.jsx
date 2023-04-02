import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useAPI from "../useAPI";
import * as Style from "./home.styled";
import styles from "../styles/productcard.module.css";

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
        <div> 
            {filteredProducts.map((item) => (
             <div className={styles.cardwrapper}>
                    <div className={styles.card}>
                        <div className={styles.item} key={item.id}>
                            <div className={styles.image}>
                            <img className={styles.img} src={item.imageUrl} alt={item.description} />
                            </div>
                            <div className={styles.details}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <div className={styles.price}>
                                { item.discountedPrice === item.price 
                                ? <span className={styles.price}>{item.discountedPrice},-</span> 
                                : (
                                    <div className={styles.wrapper}>
                                    <span className={styles.price}>{item.discountedPrice},-</span>
                                    <span className={styles.discount}>{((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% OFF</span>
                                    <span className={styles.originalprice}>{item.price},-</span>
                                    </div>
                                )
                                }
                                <button className={styles.button}>
                                <Link to={'/product/'+item.id} className={styles.link}>View Product</Link>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            ))}
        </div>
        : ``}
    </div>
    );
}





export default function HomePage() {
    const { data } = useAPI(API_URL, );
    
      return (
          <div>
            <Style.HomepageHeading>
              Products
            </Style.HomepageHeading>
            <Style.SearchProductsWrapper>
              <SearchProducts />
            </Style.SearchProductsWrapper>
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