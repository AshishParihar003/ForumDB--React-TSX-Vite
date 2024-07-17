import "react-multi-carousel/lib/styles.css";
import Youtubetitle from "../../assets/youtube.jpg"

function Video() {
    return (
        <>
        <img src= {Youtubetitle} alt="" className="w-full h-auto my-4"/>
        <div className="App ml-10 h-screen p-10">
            <div className="flex justify-center h-full">
                <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                        title="random-youtube-video"
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/QGm2ENy9wIo?si=dZ2ZR5e_hH6O7Sb3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        </>
    );
}

export default Video;
