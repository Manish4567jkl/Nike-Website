
const ShoeCard = ({imgURL , changeBigShoeImage , bigShoeImage}) => {
 const  handleClick = () => {
    if(bigShoeImage !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }
 } 
  return (
<div className={`border-2 rounded-xl
${bigShoeImage === imgURL ? 'border-[crimson]':'border-transparent'}
cursor-pointer max-sm:flex-1
`}
onClick={handleClick}>

<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
<img src={imgURL.thumbnail} alt="" className="object-contain h-[103px] w-[127px]" />
</div>
</div>
  )
}

export default ShoeCard



