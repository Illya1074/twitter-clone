import React from 'react'
import styles from '../../styles/Home.module.css'


const Trends = () => {
    return (
        <div className={styles["home_propose-section_trends"]}>
            <div className={styles["home_propose-section_trends-title"]}>
              Trends for you
            </div>
            <div className={styles["home_propose-section_trends_item"]}>  
              <div className={styles["home_propose-section_trends_item_sub-title"]}>
                Politics - Trending
              </div>
              <div className={styles["home_propose-section_trends_item-title"]}>
                LGBT
              </div>
              <div className={styles["home_propose-section_trends_item_amount"]}>
                48.3K Tweets
              </div>
            </div>
            <div className={styles["home_propose-section_trends_item"]}>  
              <div className={styles["home_propose-section_trends_item_sub-title"]}>
                Tranding in Poland
              </div>
              <div className={styles["home_propose-section_trends_item-title"]}>
                Kabulu
              </div>
              <div className={styles["home_propose-section_trends_item_amount"]}>
                4,984 Tweets
              </div>
            </div>
            <div className={styles["home_propose-section_trends_item"]}>  
              <div className={styles["home_propose-section_trends_item_sub-title"]}>
                Politics - Trending
              </div>
              <div className={styles["home_propose-section_trends_item-title"]}>
                Afganistanu
              </div>
              <div className={styles["home_propose-section_trends_item_amount"]}>
                12.8K Tweets
              </div>
            </div>
            <div className={styles["home_propose-section_trends_item"]}>  
              <div className={styles["home_propose-section_trends_item_sub-title"]}>
                Tranding in Poland
              </div>
              <div className={styles["home_propose-section_trends_item-title"]}>
                #BabiesLivesMatter
              </div>
              <div className={styles["home_propose-section_trends_item_amount"]}>
                48.3K Tweets
              </div>
            </div>
          </div>
    )
}

export default Trends
