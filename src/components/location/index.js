import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20747.861381700935!2d36.8470251!3d49.456493949999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1544348648432"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
  );
};

export default Location;
