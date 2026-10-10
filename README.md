# Deonarayan Kumar, portfolio

This is my personal portfolio site. It has my three projects, my certificates, a short intro and my contact details. I'm a B.Tech CSE student looking for a full stack internship, so this is the link I send people.

Live: https://portfolio-chi-nine-8c57lfdqhy.vercel.app/

## What's on it

- A hero with my photo that tilts with the mouse, and a headline that changes every few seconds
- About, technologies, projects, certificates and contact sections
- Three projects, each with a live link and the GitHub repo: N1 Lab, CGPA Booster and AI Code Reviewer
- Small privacy and terms pages (the site doesn't collect anything)

## Built with

React 18, Vite, Tailwind CSS 3, GSAP with ScrollTrigger, and Lenis for smooth scrolling. Fonts are Bebas Neue and Geist from Google Fonts.

## Running it locally

You need Node.js installed.

```
npm install
npm run dev
```

Then open the link it prints, usually http://localhost:5173.

To make a production build:

```
npm run build
```

The output goes to `dist`.

## Where things are

```
public/assets   photo, project screenshots, resume PDF
public          favicon, privacy.html, terms.html
src/App.jsx     the whole page and all the animations
src/data.js     projects, skills and certificates
src/index.css   fonts and a few small styles
```

## Changing things

- To edit a project, a skill or a certificate, change `src/data.js`.
- To swap the photo, screenshots or resume, replace the files in `public/assets`. Keep the same file names, or update the paths in the code.

## A few notes

- There is no contact form on purpose. I don't have a backend for it, so the site just links to my email, LinkedIn and GitHub.
- If someone has "reduce motion" turned on in their system, the animations are switched off.
- AI Code Reviewer runs on Render's free tier, so its first load can take 30 to 40 seconds.

## Contact

- Email: deonarayankumar269@gmail.com
- LinkedIn: https://www.linkedin.com/in/deonarayan-kumar
- GitHub: https://github.com/deonarayankumar269-sketch
