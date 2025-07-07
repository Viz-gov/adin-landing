// app/page.tsx
"use client";
import React from "react";
import Header from "../components/Header/Header";
import Background from "../components/Background/Background";
import Main from "../components/Main/Main";
import Content from "@/components/Content";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <Background />
      <Main />
      <Content />
      <Footer />
    </div>
  );
}
