import Book from "./Book"
import images from './book.json'

const BookList = () => {
  return (
    <>
        <div>
            {images.map((ele)=>{
                return <Book
                image={ele.image}
                title={ele.title}
                publisher={ele.publisher}
                price={ele.price}
                />
            })}    
        </div>
    </>
  )
}

export default BookList