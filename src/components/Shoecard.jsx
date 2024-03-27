

const Shoecard = ({imgURL, changeBigshoe, bigshoeimage}) => {
  const handleclick = ()=>{
    if(bigshoeimage !== imgURL.bigShoe){
      console.log(imgURL)
      console.log(bigshoeimage)
      changeBigshoe(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl 
        ${bigshoeimage === imgURL.bigShoe ? "border-white": 'border-transparent'}
        cursor-pointer max-sm:flex-1
    `} onClick={handleclick}>
      <div className="flex justify-center items-center bg-[#AFC8AD] rounded-xl h-40">
        <img src={imgURL.thumbnail} alt="shoeCollection" width={127} height={103} className="object-contain"/>
      </div>
    </div>
  )
}

export default Shoecard
