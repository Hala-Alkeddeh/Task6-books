import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function BookCard() {
    const [books, seBooks] = useState([]);
    useEffect(() => {
        axios.get('https://example-data.draftbit.com/books?_limit=8')
        .then( res => {
            seBooks(res.data)
        }).catch(err=>console.error('Error fetching items:', err))
    }, []);
console.log(books);
  return (
    books.map(book=>(
        (
            <Card image={book.image_url} authors={book.authors} title={book.title} pagesNumber={book.num_pages} key={book.id} rating={book.rating} idI={book.id}></Card>
        )
    ))
  )
}
export default BookCard;
