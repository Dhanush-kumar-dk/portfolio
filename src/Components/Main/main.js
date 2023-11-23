import React from 'react'
import './main.css'
import { Link } from 'react-scroll'
import image from '../../Components/Assests/Sushant-Singh-Rajput.png'
import hire from '../../Components/Assests/portfolio.png'

const PDF_file_url='http://localhost:3000/Resume.pdf'
const main = () => {
  const downloadFileaturl=(url)=>{
    fetch(url)
    .then((Response)=>Response.blob())
    .then((blob)=>{
      const bloburl=window.URL.createObjectURL(new Blob([blob]));
      const filename=url.split('/').pop();
      const aTag=document.createElement('a');
      aTag.href=bloburl;
      aTag.setAttribute("download",filename);
      document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    });
  };
  return (
    <section id='main'>
        <div className='main-container'>
            <span className='helo'>Hello</span>
            <span className='maintext'> I am <span className='mainname'> Dhanush kumar</span>
             <br/>web developer</span>
             <p className='mainpara'>
                i am aspiriing web developer
             </p>
             <Link>
             <button className='mainbtn' onClick={()=>{downloadFileaturl( PDF_file_url)}}>
                <img src={hire} alt='' className=' btn-img' to='/Resume'/>Resume
                </button>
             </Link>
        </div>
         <img src={image} alt='' className='main-img'/>
    </section>
  )
}

export default main