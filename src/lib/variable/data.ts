import { IReviewData } from "@/components/HomePage/ReviewSection/ReviewCard/ReviewCard";

export const restaurantData = {
  phoneNumber1: "020 33806046",
  phoneNumber2: "07429 120266",

  address: "97-99 High Street, Edgware London HA8 7DB",

  email1: "info@himalayanspices.uk",
  email2: "himalayanspices.info@gmail.uk",

  socialUrls: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    tiktok: "https://www.tiktok.com",
  },

  hours: "Mon-Fri 5pm-11pm",

  reviewUrl:
    "https://www.google.com/maps/place/Himalayan+Spices/@51.6113399,-0.2800175,18z/data=!4m19!1m10!3m9!1s0x487617cb003160e1:0x4108a34b44dd851!2sHimalayan+Spices!8m2!3d51.6112377!4d-0.280256!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11t7k_fyn1!3m7!1s0x487617cb003160e1:0x4108a34b44dd851!8m2!3d51.6112377!4d-0.280256!9m1!1b1!16s%2Fg%2F11t7k_fyn1?hl=en&entry=ttu",
};
export const reviewData: IReviewData[] = [
  {
    name: "Emanuel Farauanu",
    review:
      "I keep coming here over and over again, it's definitely one of the best tasting Nepalese/Indian food in London.",
    star: 5,
  },

  {
    name: "Lorna Reichental",
    review:
      "Amazing food, best biryani I've ever had and loved my first Mo No experience. The staff were very attentive and clearly passionate about their food. Would highly recommend a visit! Thank you Himalayan Spices for a lovely meal.",
    star: 5,
  },
];
