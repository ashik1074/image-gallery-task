import React, { useState } from "react";
import "./App.css";
import image1 from "./images/image-1.webp";
import image2 from "./images/image-2.webp";
import image3 from "./images/image-3.webp";
import image4 from "./images/image-4.webp";
import image5 from "./images/image-5.webp";
import image6 from "./images/image-6.webp";
import image7 from "./images/image-7.webp";
import image8 from "./images/image-8.webp";
import image9 from "./images/image-9.webp";
import image10 from "./images/image-10.jpeg";
import image11 from "./images/image-11.jpeg";

function App() {
  const [images, setImages] = useState([
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image8 },
    { url: image9 },
    { url: image10 },
    { url: image11 },
  ]);
  let [status1, setStatus1] = useState(true);
  let [status2, setStatus2] = useState(true);
  let [status3, setStatus3] = useState(true);
  let [status4, setStatus4] = useState(true);
  let [status5, setStatus5] = useState(true);
  let [status6, setStatus6] = useState(true);
  let [status7, setStatus7] = useState(true);
  let [status8, setStatus8] = useState(true);
  let [status9, setStatus9] = useState(true);
  let [status10, setStatus10] = useState(true);
  let [status11, setStatus11] = useState(true);
  const [id, setId] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div>
      <div>
        <nav className=" text-2xl font-semibold border-b-2">
          <p className="p-[1%]">Gallery</p>
        </nav>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="h-[full] w-full ml-[4%] flex flex-row">
          <img
            onClick={() => {
              setId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            }}
            src={images[id[0]].url}
            className="h-[31%] w-[31%] border-2 rounded-xl m-[2%] mr-0"
          />

          <div className={` flex flex-col h-full`}>
            <div className={` flex flex-row h-full w-full`}>
              <img
                onClick={() => {
                  setId([1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }}
                src={images[id[1]].url}
                className={` ${
                  status1 ? "block" : "hidden"
                } h-[21%] w-[21%] border-2 rounded-xl m-[3.45%] mr-0`}
              />
              <div
                className={`${status1 ? "block" : "hidden"} w-0 pt-10`}
                onClick={() => {
                  setStatus1(false);
                }}
              >
                <button className="p-1 border-[0.5px] rounded-2xl">X</button>
              </div>

              <img
                onClick={() => {
                  setId([2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10]);
                }}
                src={images[id[2]].url}
                className={` ${
                  status2 ? "block" : "hidden"
                } h-[21%] w-[21%] border-2 rounded-xl m-[3.45%] mr-0`}
              />
              <div
                className={`${status2 ? "block" : "hidden"} w-0 pt-10`}
                onClick={() => {
                  setStatus2(false);
                }}
              >
                <button className="p-1 border-[0.5px] rounded-2xl">X</button>
              </div>
              <img
                onClick={() => {
                  setId([3, 1, 2, 0, 4, 5, 6, 7, 8, 9, 10]);
                }}
                src={images[id[3]].url}
                className={` ${
                  status3 ? "block" : "hidden"
                } h-[21%] w-[21%] border-2 rounded-xl m-[3.45%] mr-0`}
              />
              <div
                className={`${status3 ? "block" : "hidden"} w-0 pt-10`}
                onClick={() => {
                  setStatus3(false);
                }}
              >
                <button className="p-1 border-[0.5px] rounded-2xl">X</button>
              </div>
            </div>
            <div className="h-full flex flex-row">
              <img
                onClick={() => {
                  setId([4, 1, 2, 3, 0, 5, 6, 7, 8, 9, 10]);
                }}
                src={images[id[4]].url}
                className={` ${
                  status4 ? "block" : "hidden"
                } h-[21%] w-[21%] border-2 rounded-xl m-[3.45%] mr-0 mt-0`}
              />
              <div
                className={`${status4 ? "block" : "hidden"} w-0 pt-10`}
                onClick={() => {
                  setStatus4(false);
                }}
              >
                <button className="p-1 border-[0.5px] rounded-2xl">X</button>
              </div>
              <img
                onClick={() => {
                  setId([5, 1, 2, 3, 4, 0, 6, 7, 8, 9, 10]);
                }}
                src={images[id[5]].url}
                className={` ${
                  status5 ? "block" : "hidden"
                } h-[21%] w-[21%] border-2 rounded-xl m-[3.45%] mr-0 mt-0`}
              />
              <div
                className={`${status5 ? "block" : "hidden"} w-0 pt-10`}
                onClick={() => {
                  setStatus5(false);
                }}
              >
                <button className="p-1 border-[0.5px] rounded-2xl">X</button>
              </div>
              <img
                onClick={() => {
                  setId([6, 1, 2, 3, 4, 5, 0, 7, 8, 9, 10]);
                }}
                src={images[id[6]].url}
                className={` ${
                  status6 ? "block" : "hidden"
                } h-[21%] w-[21%] border-2 rounded-xl m-[3.45%] mr-0 mt-0`}
              />
              <div
                className={`${status6 ? "block" : "hidden"} w-0 pt-10`}
                onClick={() => {
                  setStatus6(false);
                }}
              >
                <button className="p-1 border-[0.5px] rounded-2xl">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-row ml-[5%]">
        <img
          onClick={() => {
            setId([7, 1, 2, 3, 4, 5, 6, 0, 8, 9, 10]);
          }}
          src={images[id[7]].url}
          className={` ${
            status7 ? "block" : "hidden"
          } h-[14.2%] w-[14.2%] border-2 rounded-xl m-[0.9%] mr-0 mt-0`}
        />
        <div
          className={`${status7 ? "block" : "hidden"} w-0 pt-10  pr-8`}
          onClick={() => {
            setStatus7(false);
          }}
        >
          <button className="p-1 border-[0.5px] rounded-2xl">X</button>
        </div>
        <img
          onClick={() => {
            setId([8, 1, 2, 3, 4, 5, 6, 7, 0, 9, 10]);
          }}
          src={images[id[8]].url}
          className={` ${
            status8 ? "block" : "hidden"
          } h-[14.2%] w-[14.2%] border-2 rounded-xl m-[0.9%] mr-0 mt-0`}
        />
        <div
          className={`${status8 ? "block" : "hidden"} w-0 pt-10  pr-8`}
          onClick={() => {
            setStatus8(false);
          }}
        >
          <button className="p-1 border-[0.5px] rounded-2xl">X</button>
        </div>
        <img
          onClick={() => {
            setId([9, 1, 2, 3, 4, 5, 6, 7, 8, 0, 10]);
          }}
          src={images[id[9]].url}
          className={` ${
            status9 ? "block" : "hidden"
          } h-[14.2%] w-[14.2%] border-2 rounded-xl m-[0.9%] mr-0 mt-0`}
        />
        <div
          className={`${status9 ? "block" : "hidden"} w-0 pt-10  pr-8`}
          onClick={() => {
            setStatus9(false);
          }}
        >
          <button className="p-1 border-[0.5px] rounded-2xl">X</button>
        </div>
        <img
          onClick={() => {
            setId([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
          }}
          src={images[id[10]].url}
          className={` ${
            status10 ? "block" : "hidden"
          } h-[14.2%] w-[14.2%] border-2 rounded-xl m-[0.9%] mr-0 mt-0`}
        />
        <div
          className={`${status10 ? "block" : "hidden"} w-0 pt-10  pr-8`}
          onClick={() => {
            setStatus10(false);
          }}
        >
          <button className="p-1 border-[0.5px] rounded-2xl">X</button>
        </div>
        <div className="h-[14.2%] w-[14.2%] border-2 border-dotted rounded-xl m-[3%] ml-[2.41%] mr-0 mt-0 py-[6.2%] bg-gray-100 flex justify-center items-center">
          <p>Add Images</p>
        </div>
      </div>
    </div>
  );
}

export default App;
