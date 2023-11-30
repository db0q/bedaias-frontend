import React from "react";
import "../styles/SingleCardDetails.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SingleCardDetails = (profileInfo) => {
  const yearsText =
    profileInfo.profile_info.experience === 1 ? "Year" : "Years";
  console.log(profileInfo.profile_info.bio);
  return (
    <div className="mx-0 md:mx-20">
      <div className="flex mx-12  mt-20">
        <a href="/" className="text-blue-500 mr-1">
          Home
        </a>
        {" / "}
        <a href="/" className="text-blue-500 mx-1">
          Developers
        </a>
        {" / "}
        <a href="/" className="ml-2 text-gray-400">
          {profileInfo.profile_info.unique_id}
        </a>
      </div>
      <div className=" mt-8">
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <img
                src={
                  profileInfo.profile_info.userPhoto === "uploads/"
                    ? "https://augmntx.com/assets/img/noimage.jpg"
                    : `https://augmntx.com/${profileInfo.profile_info.userPhoto}`
                }
                alt={profileInfo.profile_info.first_name}
                className="w-full"
              />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center">
                <h2 className="text-xl text-gray-400 mx-2">
                  {profileInfo.profile_info.first_name}
                  {profileInfo.profile_info.last_name}
                </h2>
                <h3 className="text-xs text-red-500 mr-2">
                  {profileInfo.profile_info.unique_id}
                </h3>
                <h4 className="text-xs text-green-500">
                  {profileInfo.profile_info.active ? "Active" : "Not Active"}
                </h4>
              </div>
              <p className="text-lg font-sans font-medium mt-2">
                {profileInfo.profile_info.primary_title} in{" "}
                {profileInfo.profile_info.city}
              </p>
              <p className="mt-2 text-sm font-sans text-gray-500 ">
                {profileInfo.profile_info.bio}
              </p>
            </div>
            <div className="flex  md:whitespace-nowrap  my-4">
              {Array.isArray(profileInfo.skills) &&
                profileInfo.skills.slice(0, 10).map((skill) => (
                  <span
                    key={skill.id}
                    className="border-blue-500 inline-block text-xs border  rounded-full px-2 py-1 mr-2 mb-2 text-blue-500 hover:bg-indigo-300 cursor-pointer"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="flex ml-20 items-center">
            <h3 className=" text-lg font-bold ">Industries :-</h3>
            {Array.isArray(profileInfo.projects) &&
              profileInfo.projects.map((project) => (
                <div key={project.id} className="text-gray-600  ">
                  <a
                    href="/"
                    className="px-2 py-1 underline cursor-pointer rounded mt-1"
                  >
                    {project.industry}
                  </a>
                </div>
              ))}
          </div>
          <div className="flex flex-col mt-8 lg:flex-row justify-center items-center">
            <button className="text-gray-700 flex items-start w-40 px-4 py-1 mb-2 rounded hover:bg-indigo-400 hover:transform hover:text-white hover:-translate-y-1 hover:duration-700 transition-transform">
              <div className="mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m21.707 11.293l-8-8A1 1 0 0 0 12 4v3.545A11.015 11.015 0 0 0 2 18.5V20a1 1 0 0 0 1.784.62a11.456 11.456 0 0 1 7.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 0 0 1.707.707l8-8a1 1 0 0 0 0-1.414ZM14 17.586V15.5a1 1 0 0 0-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 0 0-7.386 2.948A9.013 9.013 0 0 1 13 9.5a1 1 0 0 0 1-1V6.414L19.586 12Z"
                  />
                </svg>
              </div>
              Share
            </button>
            <button className="text-gray-700 flex w-48 pl-4  py-1 mb-2 rounded hover:bg-indigo-400 hover:transform hover:text-white hover:-translate-y-1 hover:duration-700 transition-transform">
              <div className="mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.29 3.71a1 1 0 0 0 1.42 0a1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 21 3a1 1 0 0 0-.29-.71l-.15-.12a.76.76 0 0 0-.18-.09a1 1 0 0 0-1.09.21A1 1 0 0 0 19 3a1 1 0 0 0 .08.38a1.15 1.15 0 0 0 .21.33ZM20 5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm.06 8a1 1 0 0 0-1.11.87A7 7 0 0 1 12 20H6.41l.64-.63a1 1 0 0 0 0-1.41A7 7 0 0 1 12 6a6.91 6.91 0 0 1 3.49.94a1 1 0 0 0 1-1.72A8.84 8.84 0 0 0 12 4a9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 22h8a9 9 0 0 0 8.93-7.88a1 1 0 0 0-.87-1.12Z"
                  />
                </svg>
              </div>
              
              { ' Hire ' + profileInfo.profile_info.first_name + ' ' + profileInfo.profile_info.last_name}
            
            </button>
            <button className="text-gray-700 w-40 flex px-2 py-1 mb-2 rounded hover:bg-indigo-400 hover:text-white hover:transform hover:-translate-y-1 hover:duration-700 transition-transform">
              <div className="mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.29 13.29a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0-1.42-1.42L13 14.59V3a1 1 0 0 0-2 0v11.59l-1.29-1.3a1 1 0 0 0-1.42 0ZM18 9h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Z"
                  />
                </svg>
              </div>
              Download PDF
            </button>
          </div>
        </div>

        <div className="border-b  border-gray-300"></div>
        <p className="grid grid-cols-3 my-4 ml-20">
          <div className="text-lg font-medium">
            <i class="bi bi-calendar-check"></i> Availability:
          </div>
          <div className="col-start-2 col-end-3  text-gray-500">
            {profileInfo.profile_info.comittment}
          </div>
        </p>

        <div className="border-b border-gray-300"></div>
        <p className="grid grid-cols-3 my-4 ml-20">
          <div className="text-lg font-medium">
            <i class="bi bi-hourglass"></i> Total experiance:
          </div>
          <div className="col-start-2 col-end-3  text-gray-500">
            {profileInfo.profile_info.experience} {yearsText}
          </div>
        </p>

        <div className="border-b border-gray-300"></div>
        <div className="grid grid-cols-6 gap-4 my-4 ml-20">
          <h3 className="relative text-lg font-medium">
            <i class="bi bi-code-slash"></i> Technical skills
          </h3>
          <div className="col-start-2 col-end-6">
            {profileInfo.skills &&
              profileInfo.skills.map((skill) => (
                <ul key={skill.id} className="grid grid-cols-2">
                  <li className="text-gray-500">{skill.name} </li>
                  <li className="text-gray-500">
                    {skill.year} Years{" "}
                    {skill.month > 0 && `&  ${skill.month} months`}
                  </li>
                </ul>
              ))}
          </div>
        </div>
        <div className="border-b border-gray-300"></div>
        <div className="grid grid-cols-4 gap-5 mt-4 ml-20">
          <div className="">
            <h3 className="text-lg font-medium">
              <i class="bi bi-gear"></i> Projects
            </h3>
          </div>
          <ul className=" col-span-3">
            {profileInfo.projects &&
              profileInfo.projects.map((project) => (
                <li key={project.id} className="flex items-center ">
                  <span>
                    <span className="dot"></span>
                    <span className="font-bold text-lg text-gray-900 ">
                      {project.title}
                    </span>
                    <a
                      href={project.url}
                      className="text-blue-700 underline font-extralight ml-2"
                    >
                      view project
                      <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                    <div className="flex justify-start">
                      <div className="line"></div>
                      <ul className="mb-12 mt-2">
                        <li className="my-2 text-gray-500">
                          {project.description}
                        </li>
                        <li className="my-2 text-gray-500">
                          {project.responsibilities}
                        </li>
                        <li className="my-2 text-gray-500">
                          <span className="font-bold text-m text-gray-600">
                            Technologies Used:
                          </span>
                          {project.technologies}
                        </li>
                        <li className="my-2 text-gray-500">
                          <span className="font-bold text-m text-gray-600">
                            Industry:
                          </span>
                          {project.industry}
                        </li>
                      </ul>
                    </div>
                  </span>
                </li>
              ))}
          </ul>
        </div>
        {profileInfo.experience && profileInfo.experience.length > 0 && (
          <div className="border-b mx-20 border-gray-300"></div>
        )}
        <div className="grid grid-cols-4 gap-5 mt-4 ml-20">
          {profileInfo.experience && profileInfo.experience.length > 0 && (
            <h3 className="text-lg font-medium">
              <i class="bi bi-briefcase"></i> Work History
            </h3>
          )}
          <ul className="text-gray-500">
            {profileInfo.experience &&
              profileInfo.experience.map((experience_data) => (
                <div key={experience_data.id} className=" text-gray-600 my-4">
                  <h4>
                    {experience_data.company_name.length > 0 &&
                      ` ${experience_data.company_name}`}
                    {experience_data.title.lenth > 0 &&
                      `${experience_data.title} `}
                    .{" "}
                    {experience_data.start &&
                      experience_data.start.length > 0 &&
                      `${experience_data.start} to ${experience_data.end}`}
                  </h4>
                  {experience_data.description.length > 0 && (
                    <p>Description: {experience_data.description}</p>
                  )}
                </div>
              ))}
          </ul>
        </div>
        {profileInfo.profile_info.soft_skill &&
          profileInfo.profile_info.soft_skill.length > 0 && (
            <div className="border-b mx-20 border-gray-300"></div>
          )}
        <div className="grid grid-cols-4 gap-5 mt-4 ml-20">
          {profileInfo.profile_info.soft_skill &&
            profileInfo.profile_info.soft_skill.length > 0 && (
              <h3 className="text-lg font-medium">
                <i class="bi bi-nut"></i> Soft Skills
              </h3>
            )}
          <ul className="flex  text-gray-600 ">
            {profileInfo.profile_info.soft_skill &&
              profileInfo.profile_info.soft_skill
                .split(",")
                .map((skill, index) => (
                  <li
                    className="text-gray-700  md:whitespace-nowrap w-40 px-2 py-1 mb-2 rounded hover:bg-indigo-400 hover:text-white hover:transform hover:-translate-y-1 transition-transform"
                    key={index}
                  >
                    {skill}
                  </li>
                ))}
          </ul>
        </div>
        {profileInfo.certifications &&
          profileInfo.certifications.length > 0 && (
            <div className="border-b mx-20 border-gray-300"></div>
          )}
        <div className="grid grid-cols-5 gap-5 mt-4 ml-20">
          {profileInfo.certifications &&
            profileInfo.certifications.length > 0 && (
              <div>
                <h3 className="text-lg font-medium">
                  <i class="bi bi-patch-check"></i> certifications
                </h3>
              </div>
            )}
          <ul className="col-start-2 col-end-5">
            {profileInfo.certifications &&
              profileInfo.certifications.length > 0 &&
              profileInfo.certifications.map((certification) => (
                <li className="   mb-4" key={certification.id}>
                  <p>
                    {" "}
                    {certification.name} by {certification.issuer}
                  </p>
                  <p className="text-gray-600">{certification.year}</p>
                </li>
              ))}
          </ul>
        </div>

        <div className="border-b mx-40 border-gray-300"></div>
        <div className="grid grid-cols-4 gap-5 mt-4 ml-20">
          <div className="">
            <h3 className="text-lg font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-mortarboard"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"></path>{" "}
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"></path>{" "}
              </svg>{" "}
              education
            </h3>
          </div>
          {profileInfo.education &&
            profileInfo.education.length > 0 &&
            profileInfo.education.map((education) => (
              <div className=" ">
                <div>
                  <p className="my-4 w-96">
                    Degree: {education.degree} in {education.major}
                  </p>
                  <p className="my-4 w-96 text-gray-600">
                    University: {education.univ}
                  </p>
                  <p className="my-4 w-96 text-gray-600">
                    Start Date: {education.edu_start}
                  </p>
                  <p className="my-4 w-96 text-gray-600">
                    End Date: {education.edu_end}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="border-b mx-40 border-gray-300"></div>
      <div className="grid grid-cols-4 gap-5 my-4 ml-20">
        <h3 className="text-lg font-medium flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            viewBox="0 96 960 960"
            width="26"
          >
            <path d="m475 976 181-480h82l186 480h-87l-41-126H604l-47 126h-82Zm151-196h142l-70-194h-2l-70 194Zm-466 76-55-55 204-204q-38-44-67.5-88.5T190 416h87q17 33 37.5 62.5T361 539q45-47 75-97.5T487 336H40v-80h280v-80h80v80h280v80H567q-22 69-58.5 135.5T419 598l98 99-30 81-127-122-200 200Z"></path>
          </svg>
          <p className="">Languages</p>
        </h3>
        <ul className=" text-gray-600">
          <li key={profileInfo.profile_info.english}>
            English: {profileInfo.profile_info.english}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleCardDetails;
