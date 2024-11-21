import HomePage from "./components/HomePage";

export const metadata = {
  title: "Home | Astrominchu",
  description: "Welcome to our website - discover what we have to offer",
};

export default function Home() {
  return (
    <div className="container w-full mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to AstroMinchu</h1>
      <p className="text-lg mb-4">
        AstroMinchu aims to inspire people to marvel at the various astronomical events, galaxies,
        nebulas, and other wonders that grace our universe.
      </p>
      <HomePage />
    </div>
  );
}
