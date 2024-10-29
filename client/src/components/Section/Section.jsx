// Section.jsx
import React from 'react';
import './Section.css'; // External CSS for additional styling

const Section = () => {
  return (
    <section className="section-container">
      <div className="container">
        <div className="row text-center shadow-sm">
            <h2 className='text-danger'>අපගේ පිටු වෙත පිවිසෙන්න</h2>
            <h2>Visit Our pages</h2>
            <h3>எங்கள் பக்கங்களைப் பார்வையிடவும்</h3> <hr />
            
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=1" className="card-img-top fixed-size-img" alt="Home" />
              <div className="card-body">
                <h5 className="card-title text-danger">Home මුල් පිටුව முகப்பு பக்கம்</h5><br />
                <p className="card-text">Welcome to our homepage where you can find all  updates.</p>
                <p className="card-text"> සියලු යාවත්කාලීන සොයා ගත හැකි  මුල් පිටුවට සාදරයෙන් පිළිගනිමු.</p>
                <a href="/home" className="btn btn-danger">Go to Home</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=2" className="card-img-top fixed-size-img" alt="Blogs" />
              <div className="card-body">
                <h5 className="card-title text-danger">Blog බ්ලොග් வலைப்பதிவு</h5><br />
                <p className="card-text">Read our latest blog posts and stay informed.</p>
                <p className="card-text">අපගේ නවතම බ්ලොග් සටහන් කියවා දැනුවත්ව සිටින්න.</p>
                <a href="/Blogs" className="btn btn-danger">Visit Blog</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=3" className="card-img-top fixed-size-img" alt="Register" />
              <div className="card-body">
                <h5 className="card-title text-danger">Election මැතිවරණ தேர்தல்கள்</h5> <br />
                <p className="card-text">Join us and go to election page.</p>
                <p className="card-text">අප හා එකතු වී මැතිවරණ පිටුවට යන්න.</p>
                <a href="/Election" className="btn btn-danger">Election</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=4" className="card-img-top fixed-size-img" alt="Register" />
              <div className="card-body">
                <h5 className="card-title text-danger">Register ලියාපදිංචි பதிவு செய்யுங்கள்</h5> <br />
                <p className="card-text">Join us and become a part of our community.</p>
                <p className="card-text">අප හා එක් වී අපගේ ප්‍රජාවේ කොටසක් වන්න.</p>
                <a href="/register" className="btn btn-danger">Register Now</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=5" className="card-img-top fixed-size-img" alt="About Us" />
              <div className="card-body">
                <h5 className="card-title text-danger">About Us අපි ගැන எங்களை பற்றி</h5> <br />
                <p className="card-text">Learn more about our mission and team.</p>
                <p className="card-text">අපගේ මෙහෙවර සහ කණ්ඩායම ගැන තව දැනගන්න.</p>
                <a href="/About" className="btn btn-danger">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src="https://picsum.photos/400/300?random=6" className="card-img-top fixed-size-img" alt="Register" />
              <div className="card-body">
                <h5 className="card-title text-danger"> Updates යාවත්කාලීන மேம்படுத்தல்</h5> <br />
                <p className="card-text">Join with us and get new updates</p>
                <p className="card-text">අප සමඟ එකතු වී නව යාවත්කාලීන ලබා ගන්න</p>
                <a href="/Blogs" className="btn btn-danger">New Updates</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
