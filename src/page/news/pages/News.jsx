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
                backgroundColor: active === "latest" ? "rgba(79, 195, 247, 0.15)" : "rgba(255, 255, 255, 0.03)",
                border: active === "latest" ? "1px solid rgba(79, 195, 247, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                color: active === "latest" ? "#4fc3f7" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Latest
            </button>

            <button
              onClick={() => setActive("info")}
              className={style.btn_info}
              style={{
                backgroundColor: active === "info" ? "rgba(79, 195, 247, 0.15)" : "rgba(255, 255, 255, 0.03)",
                border: active === "info" ? "1px solid rgba(79, 195, 247, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                color: active === "info" ? "#4fc3f7" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Info
            </button>

            <button
              onClick={() => setActive("update")}
              className={style.btn_info}
              style={{
                backgroundColor: active === "update" ? "rgba(79, 195, 247, 0.15)" : "rgba(255, 255, 255, 0.03)",
                border: active === "update" ? "1px solid rgba(79, 195, 247, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                color: active === "update" ? "#4fc3f7" : "rgba(255, 255, 255, 0.6)",
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
