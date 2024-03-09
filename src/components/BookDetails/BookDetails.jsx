import {useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Details from './Details';

function BookDetails(){
    const {id} = useParams();
    const [book , setBook]=useState({});
    useEffect(()=>{
        axios.get(`https://example-data.draftbit.com/books/${id}`)
        .then((res)=>{
            setBook(res.data);
        }).catch(err=>console.error('Error fetshing the book details:',err))
    },[id]);
console.log(book);
    return(
        <Details image={book.image_url}  title={book.title} authors={book.authors} description={book.description} pages={book.num_pages} ratingCount={book.rating_count} reviewCount={book.review_count} />
    )
}
export default BookDetails;
