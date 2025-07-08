// app/page.tsx
'use client';
import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Main from './components/Main';
import Content from './components/Content';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Background />
      <Main />
      <Content />
      <Footer />
    </div>
  );
}
