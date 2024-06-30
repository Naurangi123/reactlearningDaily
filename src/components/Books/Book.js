import './book.css'
const Book = (props) => {
    const {image,title,publisher,price}=props;
  return (
    <>
    <div className="nature">
        <div className="nature-image">
     <img src={image} alt="Book Cover" />
     </div>
     <div className='image-info'>
     <h2>{title}</h2>
     <p className='image-click'>By {publisher}</p>
     <p className='image-price'>Price: {price}</p>
     <button type="Submit">Add to Cart</button>
     </div>
     </div>
    </>
  )
}

export default Book