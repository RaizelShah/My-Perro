//The Card takes in imgurl, name and description as props for reuasbility.

const ReviewCard = ({ imgURL, Name, Description }) => {
  return (
    <div className="flex flex-col w-full h-[380px] rounded-xl mt-10 p-2 gap-4 mb-[180px]">
        <div className="w-full h-[50%] flex justify-center items-center">
            <img src={imgURL} alt="CustomerImage" className="w-[120px] h-[120px] rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
            <h3 className=" font-heading font-bold text-4xl">{Name}</h3>
            <p className=" text-justify"><q>{Description}</q></p>
            <img src="src/assets/Stars.png" alt="Stars" />
        </div>
    </div>
  );
};

export default ReviewCard;
