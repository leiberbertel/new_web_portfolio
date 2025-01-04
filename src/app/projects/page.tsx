import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Carousel from "@/components/Carousel";

function Projects() {
  return (
    <>
      <nav className="h-[150px] z-20">
        <NavBar />
      </nav>
      <main className="flex flex-col gap-16 max-w-[1200px] mx-10">
        <section className="md:flex hidden items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h1 className="acorn-bold title text-8xl">My Projects </h1>
              <h1 className="acorn-bold text-6xl">Works and personal</h1>
              <h1 className="acorn-bold text-6xl">projects.</h1>
            </div>
            <p className="acorn-regular text-lg max-w-[600px]">
              I always enjoy working on personal projects, and these are some of
              the ones I have done over time.
            </p>
          </div>
          <Image
            src="/result_Browser 1.png"
            width={500}
            height={500}
            alt="Browser image"
            className="ml-4"
          />
        </section>
        <section className="flex md:hidden">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5 items-center">
              <h1 className="acorn-bold title text-6xl text-center">
                My Projects
              </h1>
              <h1 className="acorn-bold text-4xl text-center">
                Works and personal projects.
              </h1>
            </div>
            <p className="acorn-regular text-lg max-w-[600px] text-center">
              I always enjoy working on personal projects, and these are some of
              the ones I have done over time.
            </p>
          </div>
        </section>
        <Carousel />
        <Footer />
      </main>
    </>
  );
}

export default Projects;
