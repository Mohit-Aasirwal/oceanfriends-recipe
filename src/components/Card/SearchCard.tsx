import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const SearchCard = () => {
  return (
    <div className="relative aspect-square rounded-xl">
      <div className="bg-gradient-to-t rounded-xl from-black to-transparent w-full h-full absolute" />
      <Image
        src="https://s3-alpha-sig.figma.com/img/2234/134e/6e53ef9148ab9085bbd1369e270f0bba?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kF3wU3A8ltcz01BWmzupsxlHPgqWaMiiC-arfXnw5bBA~9xwc2DZhOgTlOZyNAiiE49u~BIt--9ueWMDJW6SMCvUTjobPZHjET0hYVYtvvQikHsBVskcJiB12Pbekr5rB1HS03j~2RbuWZEwYZaXlg5HmxNt5R1HXnydhUiLWa-aLjBU6QOba-rgdE1E8wBU8x9w5m0606ue7LvnLMVR5JMVwGVMqNqpYUTesaONxppyejh7TMaDTPh5uptmJwqhWQPpZYdt6JtTaPKLdb523jLyScDR8wx22AhT3rvc~5qbuMgWsvidBVYi2Eo3LztiNXHSBl8DavdaIoGppFOObA__"
        alt=""
        className="rounded-xl h-full w-full"
        width={1000}
        height={1000}
      />
      <div className="absolute top-5 right-5 bg-[#FFE1B3] rounded-full px-2 py-0.5 justify-center items-center flex flex-row space-x-1">
        <FaStar color="#FFAD30" size={12} />
        <span className="text-xs">4.0</span>
      </div>
      <div className="absolute flex-col bottom-2 left-2 md:bottom-5 md:left-5 rounded-xl">
        <h1 className="text-white text-sm font-semibold w-4/5 ">
          Traditional spare ribs baked
        </h1>
        <p className="text-[#A9A9A9] text-sm">By Chef John</p>
      </div>
    </div>
  );
};

export default SearchCard;
