import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css';

import json from '../../../hooks/page/library.json';

const Library = () => {

  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredData = json.Library_props.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const showMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setVisibleCount(5); // reset ទៅ 5 ពេល search
  };

  return (
    <>
      <div className={styles.Library}>
        <div className={styles.Library_Content}>

          <div className={styles.Library_Header}>
            <h1>Librarys</h1>

            <div className={styles.search}>
              <input
                type="text"
                placeholder="Search library."
                onChange={handleSearch}
              />
            </div>
          </div>

          <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '10px',
              marginTop: '30px',
              marginBottom: '100px'
            }}
          >

            {filteredData.slice(0, visibleCount).map((item, index) => (
              <li
                key={index}
                className={styles.Library_props}
                style={{
                  animationDelay: `${(index + 1) * 0.1}s`
                }}
              >
                <div>
                  <h2>{item.title}</h2>
                  <br />

                  <p>
                    From : {item.from} <br />
                    Size : {item.size}
                  </p>
                </div>

                <div>
                  <a href={item.link} className={styles.download} download target='_blank'>
                    Download
                  </a>
                </div>
              </li>
            ))}


            {visibleCount < filteredData.length && (
              <button
                className={styles.more}
                onClick={showMore}
              >
                More
              </button>
            )}

          </div>

        </div>
      </div>
    </>
  );
};

export default Library;