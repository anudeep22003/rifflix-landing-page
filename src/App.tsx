import { FaCircleChevronRight } from "react-icons/fa6";

function App() {
    return (
        <section
            id="main"
            className="flex flex-col mx-auto items-center justify-center relative md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] "
        >
            <section
                id="header"
                className="flex w-full text-white justify-between items-center p-4 sticky top-0 bg-[#040404]"
            >
                <p className="text-3xl font-bold">Rifflix</p>
                <button className="border border-white rounded-md p-2">
                    Join Waitlist
                </button>
            </section>
            <section
                id="hero"
                className="flex flex-col w-full justify-center items-center bg-gray-900 md:gap-12 gap-6 p-12"
            >
                <p className="text-xl text-white md:w-1/2 text-center">
                    AI to create and experience animated shows and movies
                </p>
                <button className="p-2 rounded-md bg-[#FFCB37]">
                    Join Waitlist
                </button>
            </section>
            <section
                id="vision"
                className="flex md:gap-16 gap-8 p-8 w-full items-center justify-center"
            >
                <div className="flex bg-red-400 size-48 justify-center items-center text-center">
                    placeholder for image
                </div>
                <div className="flex flex-col text-white justify-center gap-4 md:gap-8">
                    <li className="text-md text-left">
                        Consumers love animated characters and stories
                    </li>
                    <li className="text-md text-left">
                        But animation is incredibly tedious and exliensive
                    </li>
                    <li className="text-md text-left">
                        {" "}
                        "Text-to-video" AI models lack control and consistency
                    </li>
                </div>
            </section>
            <section
                id="solution"
                className="flex flex-col p-8 gap-8 items-center bg-gray-900"
            >
                <p className="text-xl text-[#FFCB37] font-semibold text-center bg-gray-900">
                    The Process
                </p>
                <img src="/editor-image.png" alt="hero" className="w-2/3" />
                <div className="flex flex-nowrap md:gap-8 text-white items-center justify-between text-xs md:text-md">
                    <p>Generate Assets</p>
                    <FaCircleChevronRight color="#FFCB37" className="w-12 " />
                    <p>Describe the scene</p>
                    <FaCircleChevronRight color="#FFCB37" className="w-12" />
                    <p>and...Action</p>
                </div>
                <p className="text-xl text-[#FFCB37] font-semibold text-center">
                    Make and share
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <img
                        src="./background-editor.png"
                        alt="background-editor"
                        className="w-1/2 max-w-[400px]"
                    />
                    <div className="flex flex-col gap-2 items-center">
                        <video
                            controls
                            disablePictureInPicture
                            playsInline
                            className="w-1/2"
                        >
                            <source
                                src="./nonpixel-video.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <p className="text-gray-200 text-xs text-center">
                            ^ A description of the video
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <video
                            controls
                            disablePictureInPicture
                            playsInline
                            className="w-1/2"
                        >
                            <source src="./monty-python.mp4" type="video/mp4" />
                        </video>
                        <p className="text-gray-200 text-xs text-center">
                            ^ A monty python style animation created with
                            Rifflix
                        </p>
                    </div>
                </div>
            </section>
            <section
                id="call-to-action"
                className="flex flex-col gap-8 p-16 items-center"
            >
                <p className="text-xl text-[#FFCB37] font-semibold text-center">
                    Your New Animation Destination
                </p>
                <div className="flex flex-nowrap md:gap-16 gap-8 mx-auto items-center justify-between">
                    <img
                        src="./hollywood.png"
                        alt="beach"
                        className="aspect-auto flex w-24 md:w-1/3"
                    />
                    <FaCircleChevronRight
                        color="#FFCB37"
                        className="md:size-12 size-6"
                        // size={24}
                    />
                    <img
                        src="./beach.png"
                        alt="beach"
                        className="aspect-auto flex w-24 md:w-1/3"
                    />
                </div>
                <p className="text-white text-md font-bold md:font-normal md:text-lg text-center">
                    Jump aboard as we become the World’s #1 Storytelling
                    Platform!
                </p>
                <form
                    action=""
                    className="flex items-center md:w-full w-[300px]"
                >
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="p-2 rounded-md grow"
                    />
                    <button className="p-2 rounded-md bg-[#FFCB37] flex text-xs w-fit ">
                        Join Waitlist
                    </button>
                </form>
            </section>
        </section>
    );
}

export default App;
