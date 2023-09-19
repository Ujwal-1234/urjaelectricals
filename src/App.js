import './App.css';
import { useEffect, useState } from 'react';
import pl from './logo/pl.png'
import ImageSlider from './components/ImageSlider';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  function sendNoReplyEmail(to, subject, body) {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
  
  // Usage example
  const mail = ()=>{
    sendNoReplyEmail('kujwal147@gmail.com', 'Subject of the Email', 'Body of the email...');
  }
  
  
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const servicesSection = document.getElementById('services');
      const projectsSection = document.getElementById('projects');
      const aboutSection = document.getElementById('about');
      const contactSection = document.getElementById('contact');
      const scrollY = window.scrollY;
      console.log(scrollY)
    
      if (scrollY >= homeSection.offsetTop && scrollY < servicesSection.offsetTop) {
        setActiveSection('home');
        if(window.scrollY ==0){
          setScrolled(false)
        }
        else{setScrolled(true)}
      } else if (scrollY >= servicesSection.offsetTop && scrollY < projectsSection.offsetTop) {
        setActiveSection('services');
        setScrolled(true)
      } else if (scrollY >= projectsSection.offsetTop && scrollY < aboutSection.offsetTop) {
        setActiveSection('projects');
        setScrolled(true)
      } else if (scrollY >= aboutSection.offsetTop && scrollY < contactSection.offsetTop) {
        setActiveSection('about');
        setScrolled(true)
      } else if (scrollY >= contactSection.offsetTop) {
        setActiveSection('contact');
        setScrolled(true)
      }else if(window.scrollY ==0){
        setScrolled(false)
      }
    };
    // const handleScroll = () => {
    //   console.log(window.scrollY)
    //   if (window.scrollY > 1) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const images = [
    'https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1412784748.jpg?w=1390&crop=1',
    'https://www.hallmarknameplate.com/wp-content/uploads/2021/12/resize-closeup-of-computer-circuit-boards-2021-11-17-17-50-54-utc.png',
    'https://evatronix.com/images/en/offer/printed-circuits-board/pcb-technology/Evatronix_Manufacturing_capabilities_01_1920x1080.jpg'
  ];
  return (
    <>
      <section id='home' className='flex flex-wrap z-50 items-center justify-center h-auto lg:h-screen bg-fixed bg-center bg-cover'>
        <div className={`fixed top-0 hidden left-0 w-full transition-all duration-300 z-20  ${scrolled ? 'bg-white shadow-md h-14' : 'bg-transparent'} navbar bg-white lg:flex items-center justify-center border-slate-500 border-b-4 fixed top-0 w-screen`}>
          
          <a><img src={pl} className={` ${scrolled? 'hidden':'w-48'}`}/></a>
          <a href='#home' className={`text-2xl text-center hover:cursor-pointer hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:shadow-inner hover:shadow-black p-3 pl-6 pr-6 rounded-lg ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href='#services' className={`text-2xl text-center hover:cursor-pointer hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:shadow-inner hover:shadow-black p-3 pl-6 pr-6 rounded-lg ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
          <a href='#projects' className={`text-2xl text-center hover:cursor-pointer hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:shadow-inner hover:shadow-black p-3 pl-6 pr-6 rounded-lg ${activeSection === 'projects' ? 'active' : ''}`}>Products</a>
          <a href='#about' className={`text-2xl text-center hover:cursor-pointer hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:shadow-inner hover:shadow-black p-3 pl-6 pr-6 rounded-lg ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href='#contact' className={`text-2xl text-center hover:cursor-pointer hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:shadow-inner hover:shadow-black p-3 pl-6 pr-6 rounded-lg ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>

        </div>
        <div className=' bg-gray-900 rounded-b-2xl h-auto items-center top-0 lg:mt-12 justify-center'>
          <ImageSlider images={images} interval={2000} className='z-10'/>
          <img src={pl} className='lg:hidden'/>
          
        </div>
        <div className=' z-0 w-3/4 text-xl text-center lg:text-4xl text-black'>
          <span className='font-bold block text-4xl lg:text-6xl'>Welcome to <span className=''> URJA ELECTRICAL</span> </span>
          Legacy of excellence, innovation continues
        </div>
      </section>
      <section id="services"  className=' bg-gradient-to-l  flex flex-wrap items-center lg:min-h-screen justify-center h-auto  mb-12 bg-fixed bg-center bg-cover'>
        <div className='flex lg:mt-14 flex-wrap items-center justify-center'>
          <span className='text-2xl text-left ml-10 w-full block font-bold lg:text-3xl'>SERVICES</span>
          <div className=' w-full p-10 text-justify text-xl lg:text-2xl'>
            At Pradnya Consultant, we take pride in offering a diverse range of services that cater to the evolving needs of our clients. Our expertise extends beyond conventional boundaries, allowing us to deliver comprehensive solutions that drive innovation and efficiency. Here's a glimpse of our multifaceted service offerings
          </div>
          <div className='border md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card custom-img-3'>
            <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>Turnkey Electrical Substation up to 33KV</span>
            <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
            Seamless power solutions: Design, build, and commission high-quality electrical substations up to 33KV with our comprehensive turnkey services.
            </span>
          </div>
          <div className='border md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card custom-img-2'>
            <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>Industrial Electrical Work</span>
            <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
            Boost industrial efficiency with tailored electrical solutions, from installation to maintenance, provided by our expert team for seamless operations.
            </span>
          </div>
          <div className='border md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card custom-img'>
            <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>Electrical Design Consultancy Services</span>
            <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
            Unlock electrical system potential with expert design guidance from our experienced team for safe, efficient, and compliant projects
            </span>
          </div>
          <div className='border md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card custom-img-2'>
            <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>Electrical Project Management Consultation</span>
            <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
            Confidently manage electrical projects from start to finish with our expert consultation in planning, cost, scheduling, quality, and risk management
            </span>
          </div>
          
        </div>
      
      </section>
      <section id="projects"  className='flex flex-wrap items-center justify-center lg:min-h-screen h-auto mb-12 bg-fixed bg-center bg-cover custom-img'>
          
          <div className='border w-96 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-white bg-opacity-60'>
              <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>Redundant Automatic Voltage Regulator</span>
              <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
                Dependable voltage control safeguards critical equipment, ensuring uninterrupted operations in any condition.
              </span>
          </div>
          <div className='border w-96 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-white bg-opacity-60'>
              <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>GPS Trackers / VTS Vehicle Tracking System</span>
              <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
                Elevate operations with our real-time GPS tracking solutions for vehicles. Stay connected, stay informed, and optimize every move.
              </span>
          </div>
          <div className='border w-96 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-white bg-opacity-60'>
              <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>Drivers - BLDC Motor Drive, LED Drive</span>
              <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
               Efficiently power LED solutions and industrial BLDC motors with our innovative, high-performance drivers.
              </span>
          </div>
          <div className='border w-96 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-white bg-opacity-60'>
              <span className='bg-white font-bold block p-2 rounded-2xl text-2xl'>APFC Controller (Automatic Power Factor Controller)</span>
              <span className='bg-white p-2 rounded-2xl mt-4 block bg-opacity-90 font-bold'>
                Empower efficiency and cost savings with our innovative Automatic Power Factor Controller and quality-driven solutions
              </span>
          </div>
      </section>
      <section id="about"  className='flex bg-slate-300 flex-wrap items-center justify-center h-auto lg:h-screen mb-12 bg-fixed bg-center bg-cover'>
        <div className=' h-3/4 border w-full lg:w-3/4 p-4 bg-white shadow-2xl overflow-auto lg:p-2'>
          <span className='lg:text-5xl text-2xl font-bold block underline'>About Us</span>

          <span className=' mt-2 block text-sm lg:text-xl'>
            Pradnya Consultant - Empowering Innovation since 2014At Pradnya Consultant, we are more than just a consulting firm; we are the architects of tomorrow's technology. Established in 2014 as a proprietary firm, Pradnya Consultant has earned its reputation as a trailblazer in the fields of IoT and Embedded Electronics Product Development. Our journey has been one marked by innovation, excellence, and a commitment to ethical business practices.</span>
          
          <span className='font-bold block lg:text-3xl text-xl mt-5 text-center'>Our Expertise</span>
          <span className=' text-sm block mt-2 lg:text-xl'>Pradnya Consultant specializes in crafting cutting-edge solutions that harness the power of the Internet of Things (IoT) and Embedded Electronics. Our team of experts is passionate about bringing ideas to life, transforming concepts into reality, and developing products that shape the future.</span>
          <span className='lg:text-3xl text-xl font-bold block mt-5 text-center'>Our Valued Partners</span>
          <span className='text-sm block mt-2 lg:text-xl'>
          Over the years, we have had the privilege of serving as trusted consultants to numerous multinational corporations. Companies such as Cummins, ETON, TATA, Royal Enfield, and many more have benefited from our technical expertise and unwavering dedication to their success. Our collaborations have resulted in the creation of innovative and impactful solutions that have left a lasting mark on their industries.
          </span>
          <span className='lg:text-3xl text-xl font-bold block mt-5 text-center'>Our Ethical Commitment</span>
          
          <span className='text-sm block mt-2 lg:text-xl'>
            At Pradnya Consultant, ethics are the cornerstone of our operations. We believe in conducting our business with integrity, transparency, and a steadfast commitment to our clients' needs. Our persistent dedication to delivering high-quality work and exceeding expectations has solidified our reputation as a trustworthy partner in the ever-evolving world of technology.
          </span>
          <span className='lg:text-3xl text-xl font-bold block mt-5 text-center'>Beyond Technology: Empowering Rural Communities</span>

          <spapn className='text-sm block mt-2 lg:text-xl'>
            While our core expertise lies in technology, our commitment to creating positive change extends beyond the digital realm. Pradnya Consultant is also deeply involved in the distribution of stoves and biogas plants in rural areas. This initiative aligns with our belief that technology should not only benefit corporations but also uplift communities and protect the environment.
            At Pradnya Consultant, our mission is to continue pushing the boundaries of what's possible in IoT and Embedded Electronics while simultaneously making a meaningful impact on the world around us. We invite you to join us on this journey of innovation, ethical business, and community empowerment.
            Pradnya Consultant - Where Innovation Meets Integrity, Where Technology Transforms Lives.
          </spapn>
       </div>
        
      </section>
      <section id="contact"  className='flex flex-wrap items-center justify-center h-auto lg:h-screen mb-12 bg-fixed bg-center bg-cover'>
        <div className=' lg:w-1/4 h-3/4 bg-slate-200 flex  items-center justify-center rounded-2xl shadow-inner shadow-black'>
          <form className=' flex flex-wrap justify-center items-center'>
            <input type='text' className=' w-3/4 m-2 rounded-full border p-2 border-black text-center bg-opacity-50 shadow-inner text-xl shadow-black' placeholder='FULL NAME'/>
            <input type='text' className=' w-3/4 m-2 rounded-full border p-2 border-black text-center bg-opacity-50 shadow-inner text-xl shadow-black' placeholder='EMAIL'/>
            <input type='text' className=' w-3/4 m-2 rounded-full border p-2 border-black text-center bg-opacity-50 shadow-inner text-xl shadow-black' placeholder='CONTACT'/>
            <input type='text' className=' w-3/4 m-2 rounded-full border p-2 border-black text-center bg-opacity-50 shadow-inner text-xl shadow-black' placeholder='SUBJECT'/>
            <textarea style={{maxHeight:'100px'}} className=' w-3/4 rounded-full border p-2 border-black text-center bg-opacity-50 shadow-inner text-xl shadow-black' placeholder='DESCRIBE YOUR QUERY'/>
            <input type='submit' onClick={mail} className=' w-3/4 m-2 rounded-full hover:cursor-pointer hover:shadow-white border p-2 border-black text-center bg-black text-white bg-opacity-50 shadow-inner text-xl shadow-black' value={"SUBMIT"}/>

          </form>
        </div>
      </section>

    </>
  )
}