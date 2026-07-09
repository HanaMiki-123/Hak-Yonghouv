import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/public/App.css";
import json from '../hooks/components/compo_route.json';
import Breadcrumb from "../utils/Breadcrumb";
import Loading from "../utils/Loading";
import ScrollUp from "../utils/ScrollUp";
import MobileBlock from "../utils/MobileBlock";
import useDeviceDetect from "../hooks/useDeviceDetect";

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const Home = lazy(() => import('../page/home/pages/Home'));
const News = lazy(() => import('../page/news/pages/News'));
const Contact = lazy(() => import('../page/contact/pages/Contact'));

const App = () => {
  const { isMobile } = useDeviceDetect();

  // Show mobile block page if user is on phone or tablet
  if (isMobile) {
    return <MobileBlock />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Breadcrumb />
        <Routes>
          <Route path={json.home_page.p1} element={<Home />} />
          <Route path={json.news_page.p1} element={<News />} />
          <Route path={json.contact_page.p1} element={<Contact />} />
        </Routes>
        <ScrollUp />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
