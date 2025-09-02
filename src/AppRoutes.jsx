import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Stack = lazy(() => import('./components/Stack'));

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">{t('common.notFound.title')}</h1>
      <p className="text-xl text-slate-400 mb-8">{t('common.notFound.message')}</p>
      <a href="/react_resume" className="text-cyan-400 underline">{t('common.notFound.backHome')}</a>
    </div>
  );
};

const AppRoutes = () => {
  const { t } = useTranslation();
  
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl">{t('common.loading')}</div>}>
        <Header />
        <Routes>
          <Route path="/react_resume" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/home" element={<Navigate to="/react_resume" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;

