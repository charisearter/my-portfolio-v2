import React from 'react'

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Reese.
            <br className="hidden lg:inline-block" />I love to build useful
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Front End Engineer | Former ESL Teacher | US Navy Veteran
            <br />
            Fun Fact: Loves building interactive games, drawing and travel.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Hire Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
            <a
              href="https://docs.google.com/document/d/1YUZD-3XovyCLRehvBmAD9Mf7FvlPX_00AV5OIbUa9Zg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./reeseA.svg"
          />
        </div>
      </div>
    </section>
  )
}

export default About
