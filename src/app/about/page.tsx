import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer";

function About() {
  return (
    <>
      <nav className="md:h-[150px] h-[100px] z-[20]">
        <NavBar />
      </nav>
      <main className="flex flex-col gap-16 max-w-[1200px] mx-10 items-center">
        <section className="md:flex hidden items-center justify-between w-[100%]">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h1 className="acorn-bold title text-8xl">Hey! I’m Leiber</h1>
              <h1 className="acorn-bold text-6xl">Software developer</h1>
            </div>
            <p className="acorn-regular text-lg max-w-[600px]">
              Software developer with two years of experience in creating robust and scalable applications. Although my primary focus is backend development, I also have a solid foundation in frontend technologies, making me a well-rounded developer.
            </p>
            <p className="acorn-regular text-lg max-w-[600px]">
            I am currently working as a Developer Analyst.
            </p>
          </div>
          <Image
            src="/profile-image-3.jpg"
            width={400}
            height={400}
            alt="Profile image"
          />
        </section>
        <section className="flex md:hidden items-center">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="acorn-bold title text-6xl text-center">
                Hey! I’m Leiber
              </h1>
              <h1 className="acorn-bold text-4xl text-center">
                Software developer
              </h1>
            </div>
            <p className="acorn-regular text-md max-w-[400px] text-center">
              Software developer with two years of experience in creating robust and scalable applications. Although my primary focus is backend development, I also have a solid foundation in frontend technologies, making me a well-rounded developer.
            </p>
            <p className="acorn-regular text-md max-w-[400px] text-center">
              I’m currently working as a Developer Analyst.
            </p>
            <Image
              src="/profile-image-3.jpg"
              width={300}
              height={300}
              alt="Profile image"
            />
          </div>
        </section>
        <section className="hidden md:flex flex-col items-center gap-10 w-[100%]">
          <h2 className="acorn-bold text-2xl max-w-[600px] text-center">
            If I had to define my life in some way, I would definitely do it as
            follows.
          </h2>
          <div className="flex bg-[#FFFFFF] bg-opacity-[10%] rounded-2xl p-16 gap-32">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Programming</h1>
                <p className="montserrat font-bold">
                  I currently work as a developer, and in addition to my
                  job, I always enjoy working on a personal projects, so this
                  aspect takes up a significant part of my day.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Coffee</h1>
                <p className="montserrat font-bold">
                  In my day, coffee is a must, whether I’m working or reading, I
                  love being accompanied by my cup of coffee.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Learn</h1>
                <p className="montserrat font-bold">
                  I am curious by nature; learning something new every day, no matter how small, makes my days more interesting and drives me to keep growing.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Read</h1>
                <p className="montserrat font-bold">
                  In my free time, I always like to be reading a book. For me,
                  it’s a moment to forget about the world and immerse myself in
                  an incredible story.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex md:hidden flex-col items-center gap-10">
          <h2 className="acorn-bold text-2xl max-w-[400px] text-center">
            If I had to define my life in some way, I would definitely do it as
            follows.
          </h2>
          <div className="flex flex-col bg-[#FFFFFF] bg-opacity-[10%] rounded-2xl p-16 gap-16">
            <div className="flex flex-col gap-5">
              <h1 className="acorn-bold text-4xl text-center">Programming</h1>
              <p className="montserrat font-bold text-center">
                I currently work as a developer, and in addition to my job,
                I always enjoy working on a personal projects, so this aspect
                takes up a significant part of my day.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="acorn-bold text-4xl text-center">Coffee</h1>
              <p className="montserrat font-bold text-center">
                In my day, coffee is a must, whether I’m working or reading, I
                love being accompanied by my cup of coffee.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="acorn-bold text-4xl text-center">
                Learn
              </h1>
              <p className="montserrat font-bold text-center">
                I am curious by nature; learning something new every day, no matter how small, makes my days more interesting and drives me to keep growing.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="acorn-bold text-4xl text-center">Read</h1>
              <p className="montserrat font-bold text-center">
                In my free time, I always like to be reading a book. For me,
                it’s a moment to forget about the world and immerse myself in an
                incredible story.
              </p>
            </div>
          </div>
        </section>
        <section className="md:flex hidden flex-col items-center gap-16 w-[100%]">
          <p className="montserrat font-bold max-w-[600px] text-center ">
            I believe that programming is more than just a tool to create
            software. I think programming allows us to craft solutions to many
            problems, and that’s why I love working on projects that solve
            something, that make life easier for people, that make the world a
            better place.
          </p>
        </section>
        <section className="flex md:hidden flex-col items-center gap-16">
          <p className="montserrat font-bold max-w-[400px] text-center ">
            I believe that programming is more than just a tool to create
            software. I think programming allows us to craft solutions to many
            problems, and that’s why I love working on projects that solve
            something, that make life easier for people, that make the world a
            better place.
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default About;
