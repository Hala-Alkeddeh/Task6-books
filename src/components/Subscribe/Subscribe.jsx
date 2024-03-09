
const Subscribe = () => {
  return (
    <div className="flex flex-col gap-6">
        <input type="text" placeholder='Your name' className="bg-transparent border-b border-primary p-2  w-full h-9 text-base font-normal text-primary placeholder:text-primary-100" />
        <input type="email" placeholder='Your e-mail' className="bg-transparent border-b p-2  border-primary w-full h-9 text-base font-normal text-primary placeholder:text-primary-100" />
        <button className="rounded-sm h-10 bg-primary text-white hover:bg-transparent hover:text-primary hover:border hover:border-primary">Subscribe</button>
    </div>
  )
}

export default Subscribe