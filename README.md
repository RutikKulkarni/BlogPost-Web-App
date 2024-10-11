# Blog Posting Web App

This project is a full-stack blog posting web application built using the MERN stack (MongoDB, Express, React/Next.js, Node.js). It consists of two main components:

- **Public Blog Feed**: A frontend interface that displays blog posts tailored to the user’s geo-location.
- **Blog Editor/Creator**: A secure, private interface for users to create and edit blog posts, manage media (text, images, and videos), and organize content blocks to design their desired layout.

Users must register and log in to create blog posts, which are associated with the creator’s location based on their IP address. Additionally, a checkout process using an external payment provider is required before publishing a blog post.

## Objective
- Build and deploy a MERN-based web app for both public blog viewing and private blog creation.
- Implement location-based filtering for blog posts on the frontend.
- Develop an account creation and authentication system for blog creators.
- Integrate a block-based rich text editor for blog creation.
- Add a checkout process for publishing blogs using a selected payment provider.
- Deploy the project using Vercel with the code stored in a GitHub repository.

## Constructs and Constraints

### Public Blog Feed:
- Display blogs according to the user’s geographic location, detected via the user's IP address (e.g., US-based users should only see US blogs).
- Use React/Next.js for frontend development.
- Deploy the frontend via Vercel.

### Blog Editor/Creator:
- Implement a sign-up and sign-in system for users to access the blog creator/editor.
- Use an open-source block editor (e.g., Draft.js, Editor.js, or any other) that supports rich text, images, and video blocks, allowing users to reorder blocks.
- Automatically associate the user’s location with their blog posts based on their IP address.
- Provide a preview feature for users to review their blogs before submission.

### Payment Integration:
Integrate a checkout process using one of the following libraries/tools:
1. Fastrr
2. Razorpay
3. Stripe
4. PayPal
5. Cashfree

### Backend:
- Set up MongoDB for storing user accounts and blog posts.
- Implement the backend using Express.js and Node.js.
- Ensure proper API endpoints to serve both the public feed and the blog creation processes.

### Deployment:
- Host the application on a publicly accessible URL via Vercel.
- Version control the code in a GitHub repository.
- Include a comprehensive `README.md` file with setup instructions for running the project locally.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/RutikKulkarni/BlogPost-Web-App.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables, including database connection strings and payment provider keys.

4. Run the backend server:
   ```bash
   cd backend
   npm run dev
   ```

5. Run the frontend application:
   ```bash
   cd frontend
   npm run dev
   ```

6. Access the application in your browser:
   ```plaintext
   http://localhost:3000
   ```
