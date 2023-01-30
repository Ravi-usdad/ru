import React from "react";
import Layout from "../components/layout";
import { WelcomeBanner, Features, Portfolio, ProfessionalSkills, Contact, Education } from "../components/homepage";
import ScrollTop from "../components/partial/scrolltop";

export default function Index() {
  return (
    <Layout>
      <WelcomeBanner />
      <Features />
      <ProfessionalSkills />
      <Education />
      <Portfolio />
      <Contact />
      <ScrollTop />
    </Layout>
  )
}