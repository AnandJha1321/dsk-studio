// pages/course-detail.js

import CourseDetailPage from "@/components/courses/CourseDetailPage";
import beautician from '@/assets/beautician.jpeg';


export default function CourseDetail() {
  const courseData = {
    image: beautician,
    title: 'Beautician Course',
    subtitle: 'A comprehensive course designed to equip you with foundational to advanced beauty skills, including skincare, haircare, and makeup artistry, for a career as a professional beautician in the beauty industry.',
    syllabus: [
        "Haircut",
        "Hair colouring",
        "Hair highlights",
        "Waxing",
        "Facial",
        "Cleanup",
        "Bleach",
        "Manicure & Pedicure",
        "Eyebrow",
        "Hair spa",
        "Hair treatments",
        "Keratin",
        "Smoothening",
        "Botox",
        "Nanoplastia",
        "Kerasmoothening"
      ],
    makeupDetails: 
      [ 
        "Nude Makeup",
        "Black and white makeup",
        "Colour photography Makeup",
        "HD Makeup",
        "Haldi Makeup",
        "Engagement makeup/reception makeup",
        "Runway catwalk Makeup",
        "Party Makeup",
        "Asian Bridal Makeup",
        "Film and video Makeup",
        "Fantasy Makeup",
        "Airbrush makeup",
        "Corrective makeup"],

    hairsdetails: [
        "Open hairstyles (Curls, Tongs, Beach waves, Hollywood tongs, Ironing, Triple tong, Blowdry)",
        "Front variations (Waterfall, Twisting, French braid, Double Dutch, Upside down Dutch braid)",
        "Braids (Messy braid, French braid, Double Dutch braid)",
        "Hair buns (Apple bun, Lower bun, Indian puff bun, French knot, Messy bun, Sabhyasachi bridal bun)",
        "International hairstyle"
      ],
    tools: [
        "Knowledge about hair products", "different hair types" , "makeup" , "hair up dos" , "hair treatments "
    ],
    instructors: 'Hair up do’s and hair treatments will be taught by Deepali Jogi trainer of makeup and hair up do’s , Diya Jogi trainer of makeup will be teaching makeup they will be teaching offline on models and on live clients and then practice will be taken after learning sessions completes exams will be taken',
    certification: 'Upon course completion, students will receive a professional certificate.',
    pricing: [
      'Beauticial Course: ₹30,000',
    ]
  };

  return <CourseDetailPage {...courseData} />;
}
