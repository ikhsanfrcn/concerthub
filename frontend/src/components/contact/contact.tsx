import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";

export default function CustomerService() {
 

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center bg-white text-[#1A1A1A]">
      
      <h1 className="text-2xl font-bold mb-2">Customer Service</h1>
      <p className="text-[#666] mb-6">
        Have a question? We may already have the answer for you! Check out our Frequently Asked Questions (FAQ) section below.
      </p>

      <div className="text-left bg-[#F6F6F6] p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4 text-[#1A1A1A]">Frequently asked questions</h2>

        <div className="space-y-2">
          <details className="group bg-white px-4 py-3 rounded-md border border-[#E5E5E5] cursor-pointer">
            <summary className="flex items-center justify-between font-medium">
              <span>Q: When will I get my tickets?</span>
              <ChevronDown className="w-4 h-4 text-[#999] group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-[#666] mt-2">
              We offer product and body measurements on each of our product pages, just click on "Size Guide" to find your best fit. Measuring guides are included.
            </p>
          </details>

          <details className="group bg-white px-4 py-3 rounded-md border border-[#E5E5E5] cursor-pointer">
            <summary className="flex items-center justify-between font-medium">
              <span>Q: Where is my ticket?</span>
              <ChevronDown className="w-4 h-4 text-[#999] group-open:rotate-180 transition-transform" />
            </summary>
          </details>

          <details className="group bg-white px-4 py-3 rounded-md border border-[#E5E5E5] cursor-pointer">
            <summary className="flex items-center justify-between font-medium">
              <span>Q: How and when will I receive my money back?</span>
              <ChevronDown className="w-4 h-4 text-[#999] group-open:rotate-180 transition-transform" />
            </summary>
          </details>

          <details className="group bg-white px-4 py-3 rounded-md border border-[#E5E5E5] cursor-pointer">
            <summary className="flex items-center justify-between font-medium">
              <span>Q: How can I cancel my order?</span>
              <ChevronDown className="w-4 h-4 text-[#999] group-open:rotate-180 transition-transform" />
            </summary>
          </details>

          <details className="group bg-white px-4 py-3 rounded-md border border-[#E5E5E5] cursor-pointer">
            <summary className="flex items-center justify-between font-medium">
              <span>Q: When will I get my tickets?</span>
              <ChevronDown className="w-4 h-4 text-[#999] group-open:rotate-180 transition-transform" />
            </summary>
          </details>

          <button className="text-[#666] mt-4 text-sm font-medium">See More</button>
        </div>
      </div>

      <p className="text-sm text-[#666] mb-1">Can’t find what you are looking for?</p>
      <p className="text-[#6A5BFF] font-medium mb-6">Our self-help center is the fastest place to get help.</p>

   

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email */}
        <a
          href="mailto:support@example.com"
          className="flex flex-col items-center justify-center p-4 border border-[#E5E5E5] rounded-lg hover:shadow-md hover:bg-[#F9F9FF] transition"
        >
          <Mail className="w-6 h-6 text-[#6A5BFF] mb-2" />
          <p className="text-sm font-medium">Send Us an Email</p>
        </a>

        {/* Live Chat */}
        <button
         
          className="flex flex-col items-center justify-center p-4 border border-[#E5E5E5] rounded-lg hover:shadow-md hover:bg-[#F9F9FF] transition"
        >
          <MessageCircle className="w-6 h-6 text-[#6A5BFF] mb-2" />
          <p className="text-sm font-medium">Live Chat</p>
        </button>

        {/* Call */}
        <a
          href="tel:+1234567890"
          className="flex flex-col items-center justify-center p-4 border border-[#E5E5E5] rounded-lg hover:shadow-md hover:bg-[#F9F9FF] transition"
        >
          <Phone className="w-6 h-6 text-[#6A5BFF] mb-2" />
          <p className="text-sm font-medium">Call Us</p>
        </a>
      </div>
    </div>
  );
}
