import React, { useState } from "react";
import style from '../styles/App.module.css';

import BoxNewsGrid from '../components/BoxNewsGrid';
import Latest from '../components/Latest';
import Info from '../components/Info';
import Update from '../components/Update';
import json from '../../../hooks/page/news.json';

const News = () => {
  const [active, setActive] = useState("latest");

  return (
    <>
      <div className={style.News}>
        <div className={style.Container}>
          <div className={style.box_news} data_grid="true" style={{ gap: '20px' }}>

            {json.map((item) => {
              return (
                <BoxNewsGrid url={item.url} title={item.title} description={item.description} date={item.date} links={item.links} />
              );
            })}

          </div>
          <div className={style.container_btn_info}>

            <button
              onClick={() => setActive("latest")}
              className={style.btn_info}
              style={{
                backgroundColor: active === "latest" ? "#2e2e2e" : "#d4d4d4",
                color: active === "latest" ? "#fff" : "#000",
              }}
            >
              Latest
            </button>

            <button
              onClick={() => setActive("info")}
              className={style.btn_info}
              style={{
                backgroundColor: active === "info" ? "#2e2e2e" : "#d4d4d4",
                color: active === "info" ? "#fff" : "#000",
              }}
            >
              Info
            </button>

            <button
              onClick={() => setActive("update")}
              className={style.btn_info}
              style={{
                backgroundColor: active === "update" ? "#2e2e2e" : "#d4d4d4",
                color: active === "update" ? "#fff" : "#000",
              }}
            >
              Update
            </button>

          </div>
          <div className={style.container_box_all}>
            {active === "latest" && <Latest />}
            {active === "info" && <Info />}
            {active === "update" && <Update />}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
