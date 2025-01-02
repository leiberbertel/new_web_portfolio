import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

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
        <section className="md:flex hidden flex-col items-center gap-10">
          <h2 className="acorn-bold text-6xl max-w-[600px] text-center">
            Finished
          </h2>
          <div className="flex justify-between w-full">
            <div
              style={{
                background: "linear-gradient(100deg, #FAAC12, #E07262)",
              }}
              className="w-[35%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 absolute acorn-bold text-4xl">
                Interactive Financial Dashboard
              </h1>
              <a href={"https://github.com/leiberbertel/financial_dashboard_dash"} target="_blank">
                <div
                  style={{
                    width: "500px",
                    height: "360px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute translate-x-[200px] bottom-0 rounded-[40px] hover:translate-x-[180px] transition-all"
                    src="/dashboard_financial.png"
                    layout="fill"
                    alt="dashboard financial"
                  />
                </div>
              </a>
            </div>
            <div
              style={{
                background: "linear-gradient(100deg, #7EBAFF, #2400FF)",
              }}
              className="w-[60%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 absolute acorn-bold text-4xl">
                Task Planner
              </h1>
              <a
                href={"https://todoapp-12a65.web.app/"}
                target="_blank"
              >
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute translate-x-[50px] bottom-0 rounded-[40px] hover:translate-x-[20px] transition-all"
                    src="/task_planner.png"
                    layout="fill"
                    alt="task planner"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="flex md:hidden flex-col items-center gap-10">
          <h2 className="acorn-bold text-6xl max-w-[600px] text-center">
            Finished
          </h2>
          <div className="flex flex-col justify-between w-full gap-16">
            <div
              style={{
                background: "linear-gradient(100deg, #FAAC12, #E07262)",
              }}
              className="w-[100%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 text-center acorn-bold text-4xl">
                Interactive Financial Dashboard
              </h1>
              <a href={"https://github.com/leiberbertel/financial_dashboard_dash"} target="_blank">
                <div
                  style={{
                    width: "500px",
                    height: "360px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute translate-x-[230px] bottom-0 rounded-[40px] hover:translate-x-[180px] transition-all"
                    src="/dashboard_financial.png"
                    layout="fill"
                    alt="dashboard financial"
                  />
                </div>
              </a>
            </div>
            <div
              style={{
                background: "linear-gradient(100deg, #7EBAFF, #2400FF)",
              }}
              className="w-[100%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 text-center acorn-bold text-4xl">
                Task Planner
              </h1>
              <a
                href={"https://todoapp-12a65.web.app/"}
                target="_blank"
              >
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute translate-x-[230px] bottom-0 rounded-[40px] hover:translate-x-[20px] transition-all"
                    src="/task_planner.png"
                    layout="fill"
                    alt="task planner"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Projects;
