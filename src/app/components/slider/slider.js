'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  // ...
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // <--- THÊM DÒNG NÀY VÀO DÒNG 16
  };
// ...
  return (
    <Slider {...settings}>
      <div>
        <Image src="/ao1.jpg" alt="Áo 1" width={600} height={300} style={{ objectFit: 'contain' }} />
      </div>
      <div>
        <Image src="/ao2.jpg" alt="Áo 2" width={600} height={300} style={{ objectFit: 'contain' }} />
      </div>
      <div>
        <Image src="/ao3.jpg" alt="Áo 3" width={600} height={300} style={{ objectFit: 'contain' }} />
      </div>
      <div>
        <Image src="/ao4.jpg" alt="Áo 4" width={600} height={300} style={{ objectFit: 'contain' }} />
      </div>
      <div>
        <Image src="/ao1.jpg" alt="Áo 1" width={600} height={300} style={{ objectFit: 'contain' }} />
      </div>
      <div>
        <Image src="/ao2.jpg" alt="Áo 2" width={600} height={300} style={{ objectFit: 'contain' }} />
      </div>
    </Slider>
  );
}
