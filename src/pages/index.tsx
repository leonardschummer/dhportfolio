import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import Dribbble from "../../public/dribbble.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import SocialButton from "../../components/SocialButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonard Schummer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />  

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="bg-zinc-50 h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-cover">
          <h1 className="text-4xl font-semibold">
            Senior at the Univerisity of California, Los Angeles studying Materials Engineering with career interests in sustainbility and green energy
          </h1>
          <p className="flex-1">

          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
              Contact me
            </button>
            <div className="flex items-center gap-4">
              <SocialButton bgColor="dribbble">
                <Dribbble className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="instagram">
                <Instagram className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="twitter">
                <Twitter className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="linkedin">
                <Linkedin className="w-5 h-5" />
              </SocialButton>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile.jpg')] bg-cover bg-center" />

      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Projects"
          description = " "
          imageUrl="/project-1.png"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Research"
          description=" "
          imageUrl=""
          bgColor="#313442"
          dark
        />
        <ProjectPreview
          name="Extracurriculars"
          description=" "
          imageUrl=" "
        />
      </section>
    </>
  );
}
