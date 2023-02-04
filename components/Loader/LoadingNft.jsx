import Container from "../layout/Container";
import ContentLayout from "../layout/ContentLayout";
import NavBar from "../NavBar/NavBar";
import ButtonFill from "../Buttons/ButtonFill";

import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";
import CardLineChart from "../utils/Chart/Chart";
export default function LoadingNft() {
  return (
    <Container>
      <NavBar />
      <ContentLayout>
        <div
          role="status"
          className="my-16 animate-pulse smx:flex-row  flex flex-col rounded-2xl"
        >
          <div className="smx:w-[50%]  h-[400px] p-8 flex items-center justify-center w-full smx:h-[650px] bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-full h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="w-full my-8">
            <div className=" mx-10 lg:mx-28">
              <div className="h-10  bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
              <div className="h-6 bg-gray-200 mb-12 rounded-full dark:bg-gray-700 max-w-[480px] "></div>
              <div className="w-full flex space-x-4">
                <div className="h-12  bg-gray-200 w-44  rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-12 bg-gray-200 w-44 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              </div>
              <div className="h-48 bg-gray-200 mt-10 dark:bg-gray-700 max-w-[460px] mb-6"></div>
              <div className="h-36 bg-gray-200 mt-10  dark:bg-gray-700 max-w-[460px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </ContentLayout>
    </Container>
  );
}
