import React, { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch("https://images.pexels.com/photos/823301/pexels-photo-823301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", { mode: "cors" })
      .then((response) => {
        if (response.ok) {
          return response.url; // Get the URL directly from the response
        }
        throw new Error("Network response was not ok.");
      })
      .then((url) => setImageURL(url)) // Set the image URL in state
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
    
      {imageURL && <img
          src={imageURL}
          alt="stop and pray picture"
          style={{ width: "200px", 
                   height: "auto" }} />} {/* requires styling troubleshooting */}

    </>
  );
};

export default Image;
