function Label({title, placeholder, type}) {
    return (
        <div className="flex flex-col w-full px-12 justify-center ">
          <label className="font-bold pb-1 " htmlFor="">{title}</label>
          <input className="p-4 rounded-lg bg-[#464646] text-white placeholder:text-white" type={type} placeholder={placeholder} />
        </div>
    )
}

export default Label;