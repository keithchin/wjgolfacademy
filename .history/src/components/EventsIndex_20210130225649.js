import React from "react";
import { Link } from "gatsby";
import ReactWhatsapp from "react-whatsapp";
import Carousel from "@brainhubeu/react-carousel";

export default function VisionIndex() {
  return (
    <div>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">Past Events </h2>
          </div>
        </div>
        <Carousel arrow dots>
          <img src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/s1080x2048/107478510_1822802441195317_7295935440533032461_o.jpg?_nc_cat=102&ccb=2&_nc_sid=9267fe&_nc_ohc=z15jwHUvGKEAX9PbwUo&_nc_ht=scontent.fkul16-1.fna&tp=7&oh=b852ff3ce6a784a0ade1c066f735678a&oe=603CB6FF" />

          <img src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/64771884_684327635324562_3867664306845777920_o.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=YMoEsNkJ7rUAX88qJl9&_nc_ht=scontent.fkul16-1.fna&oh=0bc443ce845ebfb8323005861e56f332&oe=603BC88A" />

          <img src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/119165555_1886882974787263_5282074764445491536_o.jpg?_nc_cat=104&ccb=2&_nc_sid=a26aad&_nc_ohc=Qty_MdVvnvgAX-zV701&_nc_ht=scontent.fkul16-1.fna&oh=fffddc64fe9d039e433cb87b244d7e1f&oe=603C114C" />
        </Carousel>
      </div>
    </div>
  );
}
