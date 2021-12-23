import React from "react";
import { motion } from "framer-motion";

// classes
import classes from "../classes/HomeScreen.module.css";

function HomeScreen() {
  return (
    <motion.div
      className={classes.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home">
            <div className="main-container">
                <div className="welcome-box">
                    <img src={thumbnailPicture} alt="Thumbnail"/>
                    <h1>Atletik Ganesha</h1>
                    <h2>Tulis Apa Ya</h2>
                    <div className="btn">Get to Know Us!</div>
                </div>

                {/* <div className="menu">
                    <nav className="nav-menu">
                        <Link className="link nav-shop" to="/shop">
                            Shop
                        </Link>

                        <Link className="link nav-news" to="/news">
                            News
                        </Link>

                        <Link className="link nav-events" to="/events">
                            Events
                        </Link>
                    </nav>
                </div> */}
            </div>
            {/* <Footer/> */}
        </div>
    </motion.div>
  );
}

export default HomeScreen;
