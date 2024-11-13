# Profile Explorer Web Application

This is a React web application that allows users to explore profiles, view location maps, and interact with a collection of individuals in various fields. The app is fully responsive and includes a feature to view and manage profiles, along with an interactive map.

## Key Features

- **Profile Display**: A homepage showing a list of profiles with their name, photo, and description.
- **Interactive Mapping**: Click on "View Summary" to open an interactive map displaying the geographic location of the profile.
- **Profile Summary**: Clicking on a profile redirects you to a detailed page with more information about the profile.
- **Responsive Design**: Fully responsive layout, optimized for mobile and desktop.
- **About Us Page**: A page describing the platform and its goals.
- **Contact Us Page**: A form for users to contact the platform for any queries or suggestions.
- **Footer**: Global footer with links to the app's social media pages, and contact info.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **React Router**: For routing and navigation between pages.
- **Google Maps API**: Integrated for displaying interactive maps with profile locations.

## Project Structure

```plaintext
/
├── public/
│   └── index.html              # Main HTML template
├── src/
│   ├── components/             # Reusable UI components (Header, Footer, ProfileCard, etc.)
│   ├── pages/                  # Different pages in the app (Home, About, Contact, ProfileSummary)
│   ├── App.js                  # Main component for routing
│   ├── index.js                # Entry point for the React app
│   ├── Contact.js              # Contact form and page component
│   ├── About.js                # About page with platform information
│   ├── Footer.js               # Footer component
│   ├── Header.js               # Header component with navigation
│   ├── data.js         # Hardcoded profiles data
├── tailwind.config.js          # Tailwind CSS configuration
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
