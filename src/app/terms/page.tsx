export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat p-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://cdn.resonance.rest/bg.png')",
      }}
    >
      <div className="flex items-center space-x-4 mt-6">
        <img
          src="https://cdn.resonance.rest/logo.png"
          width="80"
          height="80"
          alt="Resonance Logo"
          className="rounded-full shadow-lg"
        />
      </div>

      <section className="mt-8 max-w-2xl text-sm leading-relaxed sm:text-base">
        <h2 className="text-lg font-semibold text-white mb-4">
          Usage Agreement
        </h2>
        <p className="text-zinc-400">
          By accessing and using our website, products, or inviting the Discord
          Bot <strong>Changli#7754</strong>
          (Unique discord user ID <code>1274075579666399252</code>, referred to
          as "bot") to a Discord Server ("server"), you agree to the following
          Terms of Service ("terms") and Privacy Policy.
        </p>
        <p className="text-zinc-400">
          You may access the website and services provided therein, including
          inviting the bot to a server you have sufficient permissions for and
          using its features. These privileges may be revoked at any time should
          you violate these terms, the{" "}
          <a
            href="https://discord.com/terms"
            className="underline hover:text-gray-300"
          >
            Discord Terms of Service
          </a>
          ,{" "}
          <a
            href="https://discord.com/privacy"
            className="underline hover:text-gray-300"
          >
            Privacy Policy
          </a>
          ,{" "}
          <a
            href="https://discord.com/guidelines"
            className="underline hover:text-gray-300"
          >
            Community Guidelines
          </a>
          , or any additional guidelines provided by our service.
        </p>

        {/* Intended Age */}
        <h2 className="text-lg font-semibold text-white mt-6 mb-4">
          Intended Age
        </h2>
        <p className="text-zinc-400">
          Individuals must meet the minimum age required by Discord to use its
          services, as described in their{" "}
          <a
            href="https://discord.com/terms"
            className="underline hover:text-gray-300"
          >
            Terms of Service
          </a>
          . Additionally, our products and services, including the website and
          bot, are intended for individuals who are at least 13 years old.
        </p>

        {/* Affiliation */}
        <h2 className="text-lg font-semibold text-white mt-6 mb-4">
          Affiliation
        </h2>
        <p className="text-zinc-400">
          Our website, products, and the bot are not affiliated with, supported
          by, or created by Discord Inc. Any similarities to Discord's assets,
          trademarks, or intellectual property are coincidental. The same
          applies to any third-party content referenced in our products or
          services.
        </p>

        {/* Liability */}
        <h2 className="text-lg font-semibold text-white mt-6 mb-4">
          Liability
        </h2>
        <p className="text-zinc-400">
          The bot's owner trusts that users will not use the bot or our services
          maliciously. All features, products, and services are to be used for
          their intended purposes only.
        </p>
        <p className="text-zinc-400">
          We reserve the right to update these Terms of Service and the Privacy
          Policy with a 7-day notice. You may opt out by discontinuing the use
          of our services and removing the bot from any server you have
          permission for.
        </p>

        {/* Contact */}
        <h2 className="text-lg font-semibold text-white mt-6 mb-4">Contact</h2>
        <p className="text-zinc-400">
          For any support or inquiries related to the website or our products,
          please contact us at{" "}
          <a
            href="mailto:support@resonance.rest"
            className="underline hover:text-gray-300"
          >
            support@resonance.rest
          </a>
          . For assistance with the bot, you can reach us through the official{" "}
          <a
            href="https://discord.gg/e6VWztQyYu"
            className="underline hover:text-gray-300"
          >
            Support Discord
          </a>
          .
        </p>
      </section>
    </main>
  );
}
