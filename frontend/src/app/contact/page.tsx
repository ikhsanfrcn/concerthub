import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, MessageCircle, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Contact Us</h1>

      <p className="text-gray-600 mb-10 max-w-xl">
        We'd love to hear from you! Whether you have a question about tickets, events, or anything else — our team is ready to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Chat */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-pink-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Office</h4>
                <p className="text-gray-600">123 Concert Ave, Music City, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-pink-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-pink-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@concerthub.com</p>
              </div>
            </div>
          </div>

          {/* Live Chat */}
          <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="text-pink-600" />
              <h4 className="text-gray-800 font-semibold">Live Chat</h4>
            </div>
            <p className="text-sm text-gray-600">
              Chat with us directly for real-time support. (Feature coming soon!)
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-600 hover:text-pink-800 w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-pink-600 hover:text-pink-800 w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-pink-600 hover:text-pink-800 w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="text-pink-600 hover:text-pink-800 w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
