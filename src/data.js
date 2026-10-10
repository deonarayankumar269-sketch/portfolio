export const projects=[
{n:'01',t:'N1 Lab',s:'React, Node.js, Express, MongoDB',img:'/assets/n1lab.jpg',d:'An N-of-1 experiment app. It makes randomized ABAB schedules, takes a daily log or a wearable CSV import, and gives a keep, drop or extend verdict with intervals. I wrote the Bayesian stats engine from scratch, with autocorrelation handled and 18 unit tests, including a check that 80% intervals cover the truth about 80% of the time.',live:'https://countermeasure-lab-space.vercel.app',gh:'https://github.com/deonarayankumar269-sketch/countermeasure-lab-space'},
{n:'02',t:'CGPA Booster',s:'MERN, Socket.io, Cloudinary, Google OAuth',img:'/assets/cgpa.jpg',d:'A workspace for college students: a credit weighted SGPA and CGPA calculator, notes and PYQ uploads with search, and live study rooms with chat and an active user count. Login with email or Google, rate limiting on the API, files on Cloudinary. Frontend on Vercel, API on Render.',live:'https://cgpa-booster-rosy.vercel.app',gh:'https://github.com/deonarayankumar269-sketch/cgpa-booster'},
{n:'03',t:'AI Code Reviewer',s:'MERN, Google Gemini API',img:'/assets/reviewer.jpg',d:"Pick a language, paste code, and get a review scored on cleanliness, time complexity, space complexity and logic. JWT auth keeps each user's review history private. The API runs on Render's free tier, so the first load can take 30 to 40 seconds.",live:'https://ai-code-reviewer-client-fvz3.onrender.com',gh:'https://github.com/deonarayankumar269-sketch/ai-code-reviewer'}]
export const certs=[
['Advanced Software Engineering Job Simulation','Walmart Global Tech, via Forage','Jul 2026'],
['Responsive Web Design','freeCodeCamp, about 300 hours','Jul 2026','https://freecodecamp.org/certification/fcc-148dffea-76fa-4133-8a2d-628db646170b/responsive-web-design'],
['Web Development Internship','Skill Nexis, online, 6 months','Sep 2026'],
['GenAI Powered Data Analytics','Tata, via Forage','Sep 2026'],
['Google AI Essentials','Google, via Coursera','Jul 2026','https://coursera.org/verify/specialization/KXKRM8ZXF479'],
['Google Prompting Essentials','Google, via Coursera','Jul 2026','https://coursera.org/verify/specialization/7OP8VT3QO2OJ'],
['Career Edge, Young Professional','TCS iON','Jul 2026']]
export const skills=[['Languages','C++, JavaScript'],['Frontend','HTML, CSS, React, Redux Toolkit, Tailwind CSS'],['Backend','Node.js, Express.js, REST APIs, Socket.io, JWT, Google OAuth'],['Database','MongoDB Atlas'],['Tools','Git, GitHub, Docker, Render, Vercel, Cloudinary'],['Education','B.Tech CSE, Radha Govind University, 2025 to 2029']]
export const profiles=[
{id:'r',n:'Recruiter',d:'Skills, certificates, resume',l:'R',tile:'bg-paper text-ink',o:['certs','skills','projects','journey'],line:'Skills and certificates first, projects after.'},
{id:'d',n:'Developer',d:'Projects and stack',l:'{ }',tile:'bg-ink text-paper',o:['projects','skills','journey','certs'],line:'Projects and stack first, with live links and code.'},
{id:'m',n:'Deonarayan',d:'The full story',l:'D',tile:'bg-ver text-paper',o:['journey','projects','skills','certs'],line:'The full story, in order.'}]
export const journey=[
{s:'S1',t:'The start',e:[['Class 10, CBSE','2023, 80%, D.A.V Public School'],['Class 12, CBSE','2025, 67%, Sree Ayyappa Public School']]},
{s:'S2',t:'B.Tech',e:[['Radha Govind University','Computer Science and Engineering, 2025 to 2029'],['First semester','CGPA 8.0']]},
{s:'S3',t:'Building real products',e:[['Skill Nexis','6 month online web development internship'],['CGPA Booster and AI Code Reviewer','Two MERN apps, deployed'],['N1 Lab','Statistics engine written from scratch'],['Certificates','Walmart, Tata, Google, freeCodeCamp and more']]}]
