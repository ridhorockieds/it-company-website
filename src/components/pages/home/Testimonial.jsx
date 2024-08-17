import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../../Section";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import getImgUrl from "../../../utils/utils";
import { testimonials } from "./../../../data/testimonial";

const Testimonial = () => {
  return (
    <Section
      subtitle="From Our Customers"
      title="Testimonials"
      css={"px-4 bg-white text-center py-16 md:py-24"}
      cssTitle={"text-primary"}
    >
      <div className="my-10 text-left">
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-3 md:p-4 lg:p-6 bg-slate-100 rounded-lg">
                <div className="flex justify-between relative">
                  <img
                    src={getImgUrl(testimonial.ava)}
                    alt={testimonial.name}
                    className="h-16 w-16"
                  />
                  <h1 className="text-9xl font-serif text-secondary absolute top-0 right-0">
                    "
                  </h1>
                </div>
                <p className="text-lg py-4 md:py-6 lg:py-8 xl:py-10">
                  {testimonial.text}
                </p>
                <h3 className="text-secondary font-bold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.professional}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Testimonial;
