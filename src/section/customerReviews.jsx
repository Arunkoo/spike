import { reviews } from "../constant"
import Customercard from "../components/Customercard"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin text-center font-bold ">
        What Our
        <span className="text-coral-red"> Customer </span>
        Say?
      </h3>
      <p className="info-text mt-4 max-w-lg m-auto text-center">Hear genuine stories of our satisfied customers about there unique experience with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col items-center ">
        {reviews.map((review)=>(
          <Customercard
            key={review.customerName}
            imgURL = {review.imgURL}
            CustomerName = {review.customerName}
            Rating = {review.rating}
            feedback = {review.feedback}

            
            />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
