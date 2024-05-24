import React from "react";
import Navbar from "../components/Navbar";
import Pratham from "../assets/Pratham.jpg";
import Kennis from "../assets/Kennis.jpg";
import Vinayak from "../assets/Vinayak.jpg";
import Pratik from "../assets/Pratik.jpg";

const About = () => {
    return (
        <div>
            <Navbar />
            <h1 className="mt-10 -mb-20 text-3xl font-bold text-center">
                Meet the team!
            </h1>
            <div id="about" className="w-full py-[10rem] px-4 text-black ">
                <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-6">
                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 h-52 mx-auto mt-[-3rem] "
                            src={Pratham}
                            alt=""
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Pratham Gupta
                        </h2>
                        <div className="text-center font-medium ">
                            <p>Frontend</p>
                            <p>
                                Vellore Institute of Technology Vellore, India
                            </p>
                            <p>2nd Year</p>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://www.linkedin.com/in/pratham-gupta-a23673243/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 h-52 mx-auto mt-[-3rem] "
                            src={Pratik}
                            alt=""
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Pratik Karelia
                        </h2>
                        <div className="text-center font-medium ">
                            <p>UI-UX/Frontend</p>
                            <p>National Institute of Technology, Surat</p>
                            <p>2nd Year</p>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://www.linkedin.com/in/pratikkarelia25"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 h-52 mx-auto mt-[-3rem] "
                            src={Vinayak}
                            alt=""
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Vinayak Sharma
                        </h2>
                        <div className="text-center font-medium ">
                            <p>Full Stack Developer</p>
                            <p>
                                Ajay Kumar Garg Engineering College, Ghaziabad
                            </p>
                            <p>2nd Year</p>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://www.linkedin.com/in/vinayak-sharma-308071225/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 h-52 mx-auto mt-[-3rem] "
                            src={Kennis}
                            alt=""
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Kennis Joseph
                        </h2>
                        <div className="text-center font-medium ">
                            <p>FullStack Developer</p>
                            <p>
                                Shree Sai Institute Of Technology (SSIT),
                                Ratlam, MP
                            </p>
                            <p>2nd Year</p>
                        </div>
                        <div className="text-center">
                            <a
                                href=" https://www.linkedin.com/in/kennis-joseph-a519571a1/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
