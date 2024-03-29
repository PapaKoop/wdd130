import React from 'react';
import "../styles/StaticStyles.css";

const AboutUs = () => {

  const image_URL_Base = "https://firebasestorage.googleapis.com/v0/b/simpsonltd-bfd2b.appspot.com/o/about-us-images%2F"
  const image_Michael = `${image_URL_Base}webMichael.jpg?alt=media&token=2aae8ded-66a9-4de7-96e5-9745baff1e7a`
  const image_Brad = `${image_URL_Base}webBrad.jpg?alt=media&token=5b3eb5f7-1be7-4eac-a9de-ce7cbe92b8c5`
  const image_Floyd = `${image_URL_Base}webFloyd.jpg?alt=media&token=2b556f0b-9363-43cb-935c-8d9144c40153`
  const image_Robert = `${image_URL_Base}webRobert.jpg?alt=media&token=71f615fc-622d-4c66-a048-44a4d919d1cd`
  // const image_Carol = `${image_URL_Base}Carolweb.jpg?alt=media&token=b2de47f1-ccbb-4cd9-8492-79228836e623`
  const image_Leroy = `${image_URL_Base}webLeroy.jpg?alt=media&token=a5641d26-1abb-46af-80bb-992c3cbdf53d`
  const image_Sara = `${image_URL_Base}webSara.jpg?alt=media&token=050267d4-c5d8-41a9-b688-279278e48caf`
  const image_Nica = `${image_URL_Base}webNica.jpg?alt=media&token=b4d4e55b-ce5e-4c21-931f-242c63b87e9a`
  const image_Building = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  const image_Jamari = `${image_URL_Base}webJamari.jpg?alt=media&token=d9b61905-0cb3-4579-a800-aac2697a7927`
  const image_Buffy = `${image_URL_Base}webBuffyChair.jpg?alt=media&token=b0a46173-6949-478a-ba4d-ae5b5a6f17b7`
  const image_Greg = `${image_URL_Base}webGreg.jpg?alt=media&token=d2980cdc-58a7-4fec-a79b-1df2fb318a1c`
  const image_Chad = `${image_URL_Base}webChad.jpg?alt=media&token=a77b48bd-6a27-4228-9c90-df3438155f72`
  const image_Anthony = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  const image_Katie = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  const image_Derek = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  const image_Jasmine = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  const image_John = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  const image_Martin = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  const image_Tim = `${image_URL_Base}BUILDING.jpg?alt=media&token=cf730fb6-21de-4c38-a7a6-e8fac1b810e4`
  
  return (
    <div className="about-us-container">
      <div className="building-section">
        <img src={image_Building} alt="Building" className="building-image" />
        <div className="building-info">
          <h1>About Us</h1>
          <p>
            We are located at 140 S Seminary St in Galesburg, IL 61401.
          </p>
          <p>
            You can contact us by phone at 309/ 342-5800. Need to FAX us? Our number is 309/ 342-5730.
          </p>
          <p>
            Our Showroom is open from 1:00pm - 6:00pm, Tuesday - Friday. Saturday from 1:00pm - 5:00pm.
            Phone hours from 10:00am - 6:00pm Tuesday - Friday and 1:00pm - 5:00pm Saturday. We are closed on Sunday and Monday. All times are US Central Time (same as Chicago time).
          </p>
          <p>
            We have been located in our present showroom since 1994. The Amtrak train station is across the street from us (what a great excuse to take a train ride!).
          </p>
          <p>
            There are thousands of firearms to browse through while you're here, including over 800 Lugers at any one time.
          </p>
        </div>
      </div>
      
      <div className="team-members-container">
        <div className="team-member">
          <img src={image_Robert} alt="Robert" />
          <div className="team-member-info">
            <h2>Robert</h2>
            <p>Founder & Vice-President</p>
          </div>
        </div>
        
        {/* <div className="team-member">
          <img src={image_Carol} alt="Carol" />
          <div className="team-member-info">
            <h2>Carol</h2>
            <p>Co-Founder  1945 - 2017</p>
          </div>
        </div> */}

        <div className="team-member">
          <img src={image_Brad} alt="Brad" />
          <div className="team-member-info">
            <h2>Brad</h2>
            <p>President</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Floyd} alt="Floyd" />
          <div className="team-member-info">
            <h2>Floyd</h2>
            <p>General Manager</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Michael} alt="PapaKoop" />
          <div className="team-member-info">
            <h2>Michael</h2>
            <p>Compliance & IT Manager</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Leroy} alt="Leroy" />
          <div className="team-member-info">
            <h2>Leroy</h2>
            <p>Sales</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Sara} alt="Sara" />
          <div className="team-member-info">
            <h2>Sarah</h2>
            <p>Sales</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Nica} alt="Nica" />
          <div className="team-member-info">
            <h2>Nica</h2>
            <p>Import/Export</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Anthony} alt="Anthony" />
          <div className="team-member-info">
            <h2>Anthony</h2>
            <p>Import/Export</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Buffy} alt="Buffy" />
          <div className="team-member-info">
            <h2>Buffy</h2>
            <p>Office Manager</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Katie} alt="Katie" />
          <div className="team-member-info">
            <h2>Katie</h2>
            <p>Computer Tech</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Jamari} alt="Jamari" />
          <div className="team-member-info">
            <h2>Jamari</h2>
            <p>Web Developer</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Derek} alt="Derek" />
          <div className="team-member-info">
            <h2>Derek</h2>
            <p>Photographer</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Jasmine} alt="Jasmine" />
          <div className="team-member-info">
            <h2>Jasmine</h2>
            <p>Photographer</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Greg} alt="Greg" />
          <div className="team-member-info">
            <h2>Greg</h2>
            <p>Website Descriptions</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_John} alt="John" />
          <div className="team-member-info">
            <h2>John</h2>
            <p>Website Descriptions</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Chad} alt="Chad" />
          <div className="team-member-info">
            <h2>Chad</h2>
            <p>Shipping</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Tim} alt="Tim" />
          <div className="team-member-info">
            <h2>Tim</h2>
            <p>Shipping/Receiving</p>
          </div>
        </div>

        <div className="team-member">
          <img src={image_Martin} alt="Martin" />
          <div className="team-member-info">
            <h2>Martin</h2>
            <p>Shipping/Receiving</p>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default AboutUs;
