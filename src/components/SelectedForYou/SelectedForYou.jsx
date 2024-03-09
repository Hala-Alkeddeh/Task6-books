import BookCard from "../BookCard/BookCard"

const SelectedForYou = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-[46px] p-6 md:p-8 lg:px-16 lg:py-8">
        <h1 className="max-w-max md:text-[40px] font-semibold text-font-28  ">
            Selected For You
        </h1>
        <div className="flex justify-center items-center gap-5 md:gap-6 lg:gap-8 md:flex-row flex-wrap">
            <BookCard/>
        </div>
    </div>
  )
}

export default SelectedForYou