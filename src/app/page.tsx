"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LoadingCircle = () => (
  <motion.div
    className="w-16 h-16 border-4 border-t-4 border-[#d86a59] border-t-transparent rounded-full"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
)

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 bg-black flex items-center justify-center z-50"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <LoadingCircle />
  </motion.div>
)

export default function Home() {
  const [apiStatus, setApiStatus] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch("https://api.resonance.rest/")
        setApiStatus(response.ok)
      } catch (error) {
        console.error("Error checking API status:", error)
        setApiStatus(false)
      } finally {
        setLoading(false)
      }
    }

    checkApiStatus()
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <motion.div
        className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-no-repeat p-4 sm:p-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://cdn.resonance.rest/bg.png')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full bg-[#d86a59] text-white p-2 flex justify-center items-center z-50 text-sm sm:text-base"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>
            We have released a new bot for Discord,{" "}
            <a
              href="https://discord.com/oauth2/authorize?client_id=1274075579666399252&permissions=274878253056&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#060506] font-semibold hover:text-[#3a303a] transition duration-300"
            >
              add bot
            </a>
          </span>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mt-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            className="px-4 py-2 text-lg text-zinc-50 bg-white bg-opacity-10 rounded-lg backdrop-blur-lg"
            onClick={() =>
              window.open(
                "https://discord.com/oauth2/authorize?client_id=1274075579666399252&permissions=274878253056&integration_type=0&scope=bot+applications.commands",
                "_blank"
              )
            }
          >
            API Status{" "}
            {loading ? (
              <LoadingCircle />
            ) : apiStatus ? (
              <span className="text-green-500">●</span>
            ) : (
              <span className="text-red-500">●</span>
            )}
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src="https://cdn.resonance.rest/logo.png"
            width="200"
            height="200"
            alt="Logo"
          />
          <h1 className="mt-4 text-zinc-50 text-2xl sm:text-3xl">
            resonance.rest
          </h1>
          <p className="mt-2 text-center text-zinc-400 max-w-xs sm:max-w-md">
            Discover a range of innovative tools designed to enhance your
            experience with Wuthering Waves. Our projects are open-source,
            fostering collaboration and community-driven development.
          </p>
        </motion.div>

        <motion.ul
          className="mt-4 text-center space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://discord.com/oauth2/authorize?client_id=1274075579666399252&permissions=274878253056&integration_type=0&scope=bot+applications.commands",
                  "_blank"
                )
              }
              className="w-full sm:w-auto px-6 py-3 text-lg text-zinc-50 bg-[#d86a59] bg-opacity-80 rounded-lg backdrop-blur-lg hover:bg-opacity-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Changli - Discord bot for Wuthering Waves
            </button>
          </li>
          <li>
            <button
              onClick={() => window.open("https://github.com/resonance-rest", "_blank")}
              className="w-full sm:w-auto px-6 py-3 text-lg text-zinc-50 bg-white bg-opacity-10 rounded-lg backdrop-blur-lg hover:bg-opacity-20 transition duration-300 border border-zinc-600 hover:border-[#d86a59] shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              GitHub organization with various tools
            </button>
          </li>
          <li>
            <button
              onClick={() => window.open("https://api.resonance.rest/", "_blank")}
              className="w-full sm:w-auto px-6 py-3 text-lg text-zinc-50 bg-white bg-opacity-10 rounded-lg backdrop-blur-lg hover:bg-opacity-20 transition duration-300 border border-zinc-600 hover:border-[#d86a59] shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Rest API for Wuthering Waves
            </button>
          </li>
        </motion.ul>
      </motion.div>
    </>
  )
}