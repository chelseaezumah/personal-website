import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './TimelineSlider.css';

const events = [
  {
    name: "Online Boutique",
    title: "June 2020",
    description: "I launched an online boutique where I sold handmade cosmetics, customized jewelry, and accessories. Using only social media marketing and organic promotions, I was able to generate $2,000 in revenue within the first three months. I managed everything from product creation and inventory to packaging, customer service, and digital branding—gaining valuable experience in entrepreneurship, e-commerce, and social media strategy.",
  },
  {
    name: "Hello World!",
    title: "June 2023",
    description: "I began teaching myself programming with Python in June 2023 using free online resources such as Codecademy, freeCodeCamp, and YouTube tutorials. What started as simple print statements quickly grew into a deeper curiosity about how code works behind the scenes. I explored topics like variables, loops, functions, and data structures, and built small projects to practice what I learned. This self-guided journey laid the foundation for my continued growth in computer science and sparked my passion for technology.",
  },
  {
    name: "Joined E-Board for Sankofa Africa Organization",
    title: "April 2024",
    description: " I joined a student group that promotes awareness of African and African Diaspora experiences. As the Public Relations chair, I’ve created engaging content, analyzed engagement metrics, and develop strategies to increase visibility and community engagemen. I've also helped plan and execute events, manage organizational initiatives, and collaborate with fellow leaders to foster community, cultural education, and student engagement on campus.",
  },
  {
    name: "CodePath's WEB101 Course",
    title: "June 2024",
    description: "I was accepted into my first course at CodePath: 'Beginner Web Development', where I learned the fundamentals of web development including HTML, CSS, and JavaScript during the 10-week program.",
  },
  {
    name: "Joined ColorStack",
    title: "January 2025",
    description: "Joined ColorStack, a national organization that supports the academic and professional success of Black and Latinx computer science students. Through this community, I’ve engaged in technical workshops, mentorship opportunities, and networking events that have helped me grow both personally and professionally in my journey toward a career in tech.",
  },
  {
    name: "Joined Rewriting the Code",
    title: "January 2025",
    description: "Joined a national community that empowers college women in tech—particularly those from historically underrepresented backgrounds—through career development, mentorship, and networking opportunities. As a member, I’ve gained access to a supportive network of peers and industry professionals, participated in workshops and virtual events, and explored resources designed to help me navigate and thrive in the tech industry.",
  },
  {
    name: " UAlbany's 'Hack-A-Damien' Hackathon",
    title: "February 2025",
    description: "Awarded 3rd place at UAlbany's 'Hack-A-Damien' Hackathon for developing a web application designed to help students study, in response to the event’s challenge theme. Collaborated with a teammate to create a Solfege Memory Game (featured on the Projects page), which leveraged music theory to enhance memory retention. Presented the project to a panel of judges, earning recognition for innovation, creativity, and effective teamwork.",
  },
  {
    name:"Acceptance into Break Through Tech AI Program by Cornell Tech",
    title: "March 2025",
    description: " I was selected as one of 1,000 Fellows in partnership with industry leaders to increase the representation of women and underrepresented groups in artificial intelligence. Joined a dynamic cohort dedicated to gaining essential technical skills in Python, machine learning, and data science through hands-on training, industry mentorship, and real-world project experience.",
  },
  {
    name: "Public Relations to Vice President of Sankofa Africa Organization",
    title: "April 2025",
    description: "I was promoted to Vice President of Sankofa Africa Organization, where I now oversee organizational initiatives, manage event planning, and collaborate with fellow leaders to foster community, cultural education, and student engagement on campus.",
  },
  {
    name: "Acceptance into CodePath's TIP102 Course",
    title: "April 2025",
    description: "I was accepted into CodePath's 10-week Technical Interview Prep 102 course, where I am learning advanced data structures and algorithms to prepare for technical interviews.",
  },
  {
    name: "Acceptance into the SPEED Internship Program",
    title: "April 2025",
    description: "I was accepted into the Univeristy at Albany's SPEED Internship Program, where I will be working as a tech intern for a local company supported by START UP-NY, in the fall semester.",
  },
  {
    name: "CodePath Emerging Engineers Summit",
    title: "May 2025",
    description: "I secured my ticket for the CodePath Emerging Engineers Summit (EES) which will take place this September! I’ll be joining thousands of junior engineers, computer science students, and tech professionals to make connections, share our experiences, and play a part in changing the face of tech.",
  },
  {
    name: "Intermediate Web Development Certificate",
    title: "May 2025",
    description: "I obtained an Intermediate Web Development Certificate upon completion of CodePath's WEB102 course. Gained hands-on experience building full-stack web applications using React, Node.js, and many other features.",
  },
  {
    name: "Machine Learning Foundations Certificate",
    title: "July 2025",
    description: "Earned a certificate in Machine Learning Foundations from Cornell Tech through the Break Through Tech AI program. Recieved a stipend and gained hands-on experience building machine learning models and designing data pipelines using Python and libraries such as Pandas, NumPy, Matplotlib, Seaborn, and more.",
  },
  {
    name: "Deployment of my Portfolio Website",
    title: "July 2025",
    description: "I successfully deployed my portfolio website using React and used Netlify to deploy the live site.",
  },
  {
    name: "Coming soon...",
    title: "I'm currently working on completing a few more exciting accomplishments, feel free to check out my LinkedIn for the latest updates!",
    },
];

const TimelineSlider = () => {
    
  return (
    <section className="px-6 py-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className='helloworld'>My Journey In Tech</h1>
        {/* <select className="border rounded px-3 py-1 text-sm">
          <option>2007</option>
          <option>2008</option>
          <option>2009</option>
        </select> */}
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        modules={[Navigation]}
      >
        {events.map((event, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-lg border shadow-sm overflow-hidden bg-white">
              <div className="p-4">
                <h2>{event.name} </h2>
                <h3 className ="name">{event.title}</h3>
                <p className="paragraph">{event.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default TimelineSlider;
