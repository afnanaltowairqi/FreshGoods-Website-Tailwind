import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'


function SectionThree() {
    return(
        <div className="bg-[#e6e6e6] h-[70vh] flex flex-col justify-start items-center max-sm:h-[200vh]">
            <div className="flex flex-row justify-center items-center w-[90vw] h-[50vh] gap-8 max-sm:flex-col max-sm:h-[200vh] max-sm:gap-11" >
                    <div className="flex flex-col items-center gap-5 text-center w-[20vw] h-[20vh] max-sm:flex-col max-sm:w-[90vw] max-sm:h-[50vh]">
                        <img src={feature1}></img>
                        <h1 className="font-bold  text-black">Feature 1</h1>
                        <p className=" font-serif  text-black">Talk about some of the details of your offer with a focus on the value people get back.</p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center w-[20vw] h-[20vh] max-sm:flex-col max-sm:w-[90vw] max-sm:h-[50vh]">
                        <img src={feature2}></img>
                        <h1 className="font-bold  text-black">Feature 2</h1>
                        <p className=" font-serif  text-black">Is there a pain point that your product or service resolves? Tell visitors about it here.</p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center w-[20vw] h-[20vh] max-sm:flex-col max-sm:w-[90vw] max-sm:h-[50vh]">
                        <img src={feature3}></img>
                        <h1 className="font-bold  text-black">Feature 3</h1>
                        <p className=" font-serif  text-black ">Alternatively, you could use this section to address some frequently asked questions.</p>
                    </div>
                </div>
        </div>
    );
}
export default SectionThree;