import Milk from '../assets/milk.png'
import Gift from '../assets/gift.png'
import Car from '../assets/car.png'

function SectionOne() {
    return(
        <div className="bg-white h-[100vh] flex flex-col justify-start items-center max-sm:h-[190vh]">
            <div className="flex flex-col justify-center text-center h-[40vh] w-[40vw] gap-4 max-sm:flex-col max-sm:h-[50vh] max-sm:w-[90vw]">
                <h1 className="text-4xl text-black">Here are some of the benefits of your offer</h1>
                <p className="font-serif  text-black">Explain what makes your product or service great. Talk aboute ffeatures in a way that highlights the real value people get out of them.</p>
            </div>
            <div className="flex flex-row justify-between w-[70vw] h-[40vh] max-sm:flex-col max-sm:gap-6" >
                    <div className="flex flex-col items-center gap-5 text-center w-[20vw] h-[40vh] max-sm:flex-col max-sm:w-[70vw]">
                        <img className="w-[5vw] max-sm:w-[18vw]" src={Milk}></img>
                        <h1 className="font-bold  text-black">Benefit 1</h1>
                        <p className=" font-serif  text-black">For example, resturants and bakeries could outline the health benefits of their all-natural ingredients.</p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center w-[20vw] h-[40vh] max-sm:flex-col max-sm:w-[70vw]">
                        <img className="w-[5vw] max-sm:w-[18vw]" src={Gift}></img>
                        <h1 className="font-bold  text-black">Benefit 2</h1>
                        <p className=" font-serif  text-black">Florists and other small retaileres might use this space to describe how their products make delightful, one-of-a-kind gifts.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6 text-center w-[19vw] h-[40vh] max-sm:flex-col max-sm:w-[70vw]">
                        <img className="w-[9vw] max-sm:w-[24vw]" src={Car}></img>
                        <h1 className="font-bold  text-black">Benefit 3</h1>
                        <p className=" font-serif  text-black ">You could also add buttons to this section and share links to other products or available delivery method.</p>
                    </div>
                </div>
        </div>
    );
}
export default SectionOne