export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md space-y-4">
        <div>
          <label className="block mb-2">Name:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-2">Message:</label>
          <textarea className="w-full p-2 border rounded h-32"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}