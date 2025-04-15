export default function WelcomeSection() {
    return (
      <div
        className="w-full lg:w-1/2 bg-cover bg-center text-white flex items-center justify-center p-8"
        style={{ backgroundImage: 'url(/concert.png)' }}
      >
        {/* Desktop */}
        <div className="hidden lg:block max-w-md">
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Welcome<br />back</h1>
          <p className="text-sm mb-4">
            Discover millions of concert, get alerts about your favorite artists, teams, plays and more — plus always-secure, effortless ticketing.
          </p>
          <div className="h-1 w-10 bg-pink-500 rounded-full"></div>
        </div>
  
        {/* Mobile */}
        <div className="lg:hidden w-full h-full bg-black/70 flex flex-col items-center justify-center text-center p-6 rounded-none">
          <h1 className="text-2xl font-bold text-pink-500 mb-2">Welcome back</h1>
          <p className="text-sm text-white">
            Discover millions of concert, get alerts about your favorite artists, teams, plays and more — plus always-secure, effortless ticketing.
          </p>
        </div>
      </div>
    )
  }
  