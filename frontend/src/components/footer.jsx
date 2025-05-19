import React from 'react';


const Footer = () => {
  return (
    <footer className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 hover:text-yellow-400">
          © 2025 moestilos
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialLink href="https://www.docker.com/" icon={<DockerIcon />} />
          <SocialLink href="" icon={<SpotifyIcon />} />
          <SocialLink href="https://github.com/moestilos/TFG-Willy/tree/dev" icon={<GithubIcon />} />
          <SocialLink href="https://tailwindcss.com/" icon={<TailwindIcon />} />
          <SocialLink href="https://angular.dev/" icon={<AngularIcon />} />
          <SocialLink href="https://www.linkedin.com/in/guillermo-mateos-de-los-santos-aguilera-02427b260/" icon={<LinkedinIcon />} />
        </span>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a href={href} className="ml-3 first:ml-0 text-white hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);

const IconWrapper = ({ children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline">
    {children}
  </svg>
);

const DockerIcon = () => (
  <IconWrapper>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z" />
    <path d="M5 10h3v3h-3z" />
    <path d="M8 10h3v3h-3z" />
    <path d="M11 10h3v3h-3z" />
    <path d="M8 7h3v3h-3z" />
    <path d="M11 7h3v3h-3z" />
    <path d="M11 4h3v3h-3z" />
    <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
    <path d="M10 16l0 .01" />
  </IconWrapper>
);

// Similar icon components for other social icons...

export default Footer;
