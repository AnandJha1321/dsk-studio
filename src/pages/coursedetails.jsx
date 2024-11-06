// pages/course-detail.js

import CourseDetailPage from "@/components/courses/CourseDetailPage";
import corrective from '@/assets/corrective.jpeg'

export default function CourseDetail() {
  const courseData = {
    image: corrective,
    title: 'Basic to International Makeup & Hairstyle Course',
    subtitle: 'A comprehensive 3-month course that takes you from basic to professional bridal and fashion makeup artistry.',
    syllabus: [
      'Nude Makeup', 'Black and White Makeup', 'Color Photography Makeup', 'HD Makeup', 'Haldi Makeup',
      'Engagement Makeup', 'Reception Makeup', 'Runway Catwalk Makeup', 'Party Makeup',
      'Asian Bridal Makeup', 'Film and Video Makeup', 'Fantasy Makeup', 'Airbrush Makeup',
      'Corrective Makeup'
    ],
    hairsdetails: [
      "Open hairstyles (Curls, Tongs, Beach waves, Hollywood tongs, Ironing, Triple tong, Blowdry)",
      "Front variations (Waterfall, Twisting, French braid, Double Dutch, Upside down Dutch braid)",
      "Braids (Messy braid, French braid, Double Dutch braid)",
      "Hair buns (Apple bun, Lower bun, Indian puff bun, French knot, Messy bun, Sabhyasachi bridal bun)",
      "International hairstyle"
    ],
    tools: [
      'Makeup products and application techniques', 'Airbrush usage', 'Understanding eye and face shapes',
      'Color wheel and eyeshadow techniques'
    ],
    instructors: 'International Makeup Artist Diya Jogi will guide you in mastering professional makeup skills. Hairstyle training will be conducted by our experienced Hair Trainer. Classes will be conducted live on models, followed by hands-on practice sessions.',
    certification: 'Upon course completion, students will receive a professional certificate.',
    pricing: [
      'Makeup Class: ₹15,000',
      'Hairstyle Class: ₹15,000',
      'Combined Makeup & Hairstyle Course: ₹25,000'
    ]
  };

  return <CourseDetailPage {...courseData} />;
}
