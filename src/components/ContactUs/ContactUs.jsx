import Map from "../Map/Map"
import Subscribe from "../Subscribe/Subscribe"

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-7 md:flex-row md:gap-[46px] p-6 md:p-12 lg:p-16">
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
                <h1 className="max-w-max md:text-[40px] font-semibold text-font-28  ">
                    Did you know us?
                </h1>
                <p className="font-normal text-base md:w-[44vw]">
                    We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. 
                    If you are about books, you must to subscribe to our newsletter. 
                </p>
            </div>
            <Subscribe/>
        </div>
        <Map/>
    </div>
  )
}

export default ContactUs