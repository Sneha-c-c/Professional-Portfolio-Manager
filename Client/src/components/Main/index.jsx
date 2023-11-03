// import styles from "./styles.module.css";

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>PORTFOLIO-RESUME</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav>
// 			<div>
				
// 			</div>
// 		</div>
// 	);
// };

// export default Main;


import React, { useState } from 'react';
import styles from './styles.module.css';

const Main = ({ user }) => {
  const [photoURL, setPhotoURL] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPhotoURL(url);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>PORTFOLIO-RESUME</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      
        <div className={styles.profile_photo}>
          <h2 className='hello'>Profile Photo</h2>
          {photoURL ? (
            <img src={photoURL} alt="User's Profile" className={styles.profile_image} />
          ) : (
            <p>No profile photo available</p>
          )}
		  <br/>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      </div>
   
  );
};

export default Main;
