# Abdelwahab Anwr | Portfolio

A personal portfolio built with Next.js to introduce me, showcase selected projects and skills, share my experience, and make it easy to get in touch.

lishing.

## Live Demo

- **Website:** [https://portfolio2025-7hqp.vercel.app/](https://portfolio2025-7hqp.vercel.app/)
- **GitHub:** [https://github.com/aa366](https://github.com/aa366)
- **LinkedIn:** [https://www.linkedin.com/in/abdelwahab-anwr/](https://www.linkedin.com/in/abdelwahab-anwr/)

## About

This portfolio brings my work and background together in one place. It includes sections for:

- **Introduction** — a short profile and welcome.
- **Skills** — technologies and tools I work with.
- **Projects** — selected work with links to live demos and source code.
- **Experience** — education and experience highlights.
- **Contact** — a form for sending me a message.

The site also supports English and Arabic, including right-to-left layout for Arabic, and offers theme switching.

## Built With

- [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) for localization
- [next-themes](https://github.com/pacocoursey/next-themes) for theme switching
- [Nodemailer](https://nodemailer.com/) for contact form email delivery

## Getting Started

### Requirements

- Node.js (use a current LTS release)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Contact form configuration

The contact form sends email through Gmail. Add these variables to a `.env.local` file in the project root:

```env
EMAIL_USER=your-sending-address@gmail.com
EMAIL_PASS=your-gmail-app-password
MY_EMAIL=your-inbox@example.com
```

Use a Gmail app password for `EMAIL_PASS`; do not put credentials in source control. Without these values, the site can run, but contact form email delivery will not work.

## Available Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the local development server |
| `npm run build` | Create a production build          |
| `npm run start` | Start the production server        |
| `npm run lint`  | Run ESLint                         |

## Personalize the Portfolio

Update the profile content, project links, skills, and experience to match your work. The main portfolio content is maintained in `src/constants/data.ts`; page sections are composed in `src/app/page.tsx`. Translation messages are in the `messages/` directory, and images and technology icons are in `public/`.

Before deploying, update the site metadata in `src/app/layout.tsx` and replace the demo links in this README.

## Deployment

The app can be deployed to [Vercel](https://vercel.com/) or another platform that supports Next.js. Configure the three contact form environment variables in your hosting provider if you want email delivery enabled.
