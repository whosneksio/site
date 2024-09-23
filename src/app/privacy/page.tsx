export default function Home() {
    return (
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat p-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://cdn.resonance.rest/bg.png')",
        }}
      >
        {/* Container for logo and title */}
        <div className="flex items-center space-x-4 mt-6">
          {/* Smaller Logo */}
          <img
            src="https://cdn.resonance.rest/logo.png"
            width="80"
            height="80"
            alt="Resonance Logo"
            className="rounded-full shadow-lg"
          />
        </div>
  
        {/* Privacy Policy Content */}
        <section className="mt-8 max-w-2xl text-sm leading-relaxed sm:text-base">
          {/* Usage of Data */}
          <h3 className="text-lg font-semibold text-white mb-4">
            Usage of Data
          </h3>
          <p className="text-zinc-400">
            The bot and website may use stored data, as defined below, for
            different features, including but not limited to: Welcoming joining
            users (when enabled), handling commands, and enhancing the overall
            user experience on the website and in Discord servers. No usage of
            data outside of the aforementioned cases will occur, and the data
            will not be shared with any third-party site or service.
          </p>
  
          {/* Stored Information */}
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">
            Stored Information
          </h3>
          <p className="text-zinc-400">
            The bot and website may store the following information automatically:
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>
              <code>id</code> — the server’s or user’s unique ID.
            </li>
            <li>
              <code>convene data</code> — user or server convene data for
              improved service delivery.
            </li>
          </ul>
  
          {/* Updating Data */}
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">
            Updating Data
          </h3>
          <p className="text-zinc-400">
            Data may be updated when using specific features of the bot or
            website. Such updates may involve user-provided information, such as
            text messages or interaction logs, which are only stored temporarily
            for their intended purposes.
          </p>
  
          {/* Temporarily Stored Information */}
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">
            Temporarily Stored Information
          </h3>
          <p className="text-zinc-400">
            Both the bot and website may cache certain data temporarily to
            minimize database requests and improve performance. Cached data is
            discarded after a set period or can be dropped prematurely by removing
            the bot from a server or ceasing use of the website.
          </p>
  
          {/* Removal of Data */}
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">
            Removal of Data
          </h3>
  
          {/* Automatic Removal */}
          <h4 className="text-gray-300 font-semibold text-white mt-4">
            Automatic Removal
          </h4>
          <p className="text-zinc-400">
            Stored data can be removed automatically by removing the bot from a
            Discord server or ceasing use of our website. This can be achieved via
            standard server or account management options.
          </p>
  
          {/* Manual Removal */}
          <h4 className="text-gray-300 font-semibold text-white mt-4">
            Manual Removal
          </h4>
          <p className="text-zinc-400">
            Manual removal of data can be requested through our official{" "}
            <a
              href="https://discord.gg/e6VWztQyYu"
              className="underline hover:text-gray-300"
            >
              Support Discord
            </a>{" "}
            for the bot, or by contacting us at{" "}
            <a
              href="mailto:support@resonance.rest"
              className="underline hover:text-gray-300"
            >
              support@resonance.rest
            </a>{" "}
            for website-related inquiries. Proof of ownership or identity may be
            required for such requests.
          </p>
        </section>
      </main>
    );
  }
  