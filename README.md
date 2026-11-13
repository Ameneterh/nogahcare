# NogahCare Website

Responsive NogahCare landing-page starter built with **React + Vite** and an **Express + MongoDB** API. JavaScript is used throughout.

## Project structure

- `client/` — responsive React website, content sections, enquiry forms and styling.
- `server/` — Express API, MongoDB/Mongoose enquiry model and validation.
- `client/public/nogahcare-logo.png` — logo lockup derived from the supplied NogahCare splash-screen image.

## Requirements

- Node.js 20+
- npm
- MongoDB local instance or MongoDB Atlas connection string

## Setup

1. Install root dependencies:

   ```bash
   npm install
   ```

2. Install client and server dependencies:

   ```bash
   npm run install:all
   ```

3. Create `server/.env` using `server/.env.example` and set `MONGODB_URI`.

4. Start both applications from the project root:

   ```bash
   npm run dev
   ```

Client: `http://localhost:5173`  
API health check: `http://localhost:5000/api/health`

## Enquiry forms

The contact, pharmacy partner and healthcare professional forms post to:

- `POST /api/enquiries`

The server stores the enquiry type, contact details and message in MongoDB. The API intentionally does not collect medical records or prescription files.

## Before production

- Replace placeholder contact details and social links.
- Confirm which services are actually live; update service statuses in `client/src/data/siteContent.js`.
- Add email notifications, spam protection/rate limiting and an admin workflow for handling enquiries.
- Add a privacy policy and consent language reviewed for your operations and jurisdiction.
- Configure HTTPS, secure hosting, production CORS origins, logging and backups.
- Add verified regulatory information only after it has been obtained.
- Do not use sample testimonials as real customer reviews.

## Notes

This is a working website starter, not a deployed service. Online consultation, medicine ordering, prescription upload, payments and delivery tracking are not represented as operational backend workflows in this starter. Their cards can be marked `Coming Soon` until the relevant features are built, tested and approved.
