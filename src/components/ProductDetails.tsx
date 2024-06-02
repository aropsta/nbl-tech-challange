
import { Product, jsonProducts } from '../interaces/Products'
import Item from "./ProductItem";
import "../styles/productPage.scss"
import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function ProductDescriptionPage() {
  

  const index = useParams().id;
  const ITEM_URL = `products/${index}`
  const JSON_URL= "https://dummyjson.com";

  
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<Product>({}as Product);




   const fetchData = async () => {

     setLoading(true)
       const response = await fetch(`${JSON_URL}/${ITEM_URL}`, {
         method: 'GET',
         headers: {
           "Content-Type": "application/json"
         }
       })
       const json = await response.json();
       const data = json;
       if (response.ok){
 setItem(data)
 console.log(item)
 setLoading(false)
       } 
   }

 useEffect(()=>{
   fetchData();
 }, []);

if(loading){
  return <main tabIndex={1}>LOADING</main>}

    return(
  <>
  
  <h2> {item.title}</h2>
  <section className='item-detail' >
<figure className='figure'>
  <img src="data:,"
      alt={item.title}/>
  <figcaption className="fig-cap" aria-label='discount'>{Math.round(item.discountPercentage)}% OFF</figcaption>
</figure>
<section className='section-price'>

<p className='brand white-box'>{item.brand? item.brand: "Unbranded"}</p>
  <p className='price white-box'>{item.price}</p>
  <p className='discount white-box'>MSRP: {Math.round(item.price/(1-(item.discountPercentage/100)))}</p>
</section>
</section>
  <section className='rating-section'>
    {
    item.tags.map(tag=>{
      return <p className='tag white-box'>{tag}</p>
    })
    }
  <p className='white-box' aria-label={ Math.round(item.rating) + " stars"}>{"* ".repeat(Math.round(item.rating))+" stars"} </p>
  </section>
  <section className='description'>
    <h3>Description</h3>
    <p>{item.description}</p>

  </section>

<section className='review'>

    <h3>Reviews</h3>
    {item.reviews.map(review=>{
      return <>
      <p>{review["date"]}</p>
      <p>{review["comment"]}</p>
      <br />

      </>
    })}

  </section>
  </>      
        )

}
    