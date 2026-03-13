import { getDictionary } from "@/i18n/dictionaries";
import { locales } from "@/i18n/config";
import { Locale } from "@/lib/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main>
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Experience dict={dict.experience} />
        <Projects dict={dict.projects} />
        <TechStack dict={dict.techStack} />
        <Education dict={dict.education} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
