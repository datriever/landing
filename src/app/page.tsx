/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image'; // Next.js for optimized images
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import ScrollBtn from './ScrollBtn';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Menu */}
      <header className="bg-black shadow-lg">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Image className='rounded-full'
              src="/logo.png" // Path to your logo file
              alt="Datriever Logo"
              width={36}
              height={36}
            />
            <h1 className="ml-2 text-3xl font-bold text-gold">Datriever</h1>
          </div>
          <div className="flex space-x-4 text-2xl">
          <Link href="https://github.com/datriever" target='_blank' legacyBehavior>
              <a className="text-gray-300 hover:text-gold transition duration-300 flex items-center">
                <FaGithub className="mr-2" /> {/* GitHub Icon */}
              </a>
            </Link>
            <Link href="mailto:hey@datriever.com" legacyBehavior>
              <a className="text-gray-300 hover:text-gold transition duration-300 flex items-center">
                <FaEnvelope className="mr-2" /> {/* Email Icon */}
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-black py-20 w-[40%] m-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gold">Data at Your Command, Insights on Demand</h2>
          <p className="mt-4 text-lg text-gray-400">
            Automate the retrieval, analysis, and insights from both structured and unstructured data.
            Whether you're a researcher, energy trader, or consultant, Datriever gives you the power to turn data into action, fast.
          </p>
          <div className="mt-6">
            <ScrollBtn to='use-cases' href="#use-cases" className="bg-gold text-black font-bold py-2 px-4 rounded-lg hover:bg-dark-gold transition duration-300 shadow-md">
              Explore Use Cases
            </ScrollBtn>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-black text-center w-[80%] m-auto">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-gold mb-12">Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-800 shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-bold text-gold">Academic Research</h4>
              <p className="mt-4 text-gray-400">
                Automate the retrieval of research articles, build a custom RAG, and ask specific questions for targeted insights.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-800 shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-bold text-gold">Energy Market Strategy</h4>
              <p className="mt-4 text-gray-400">
                Retrieve and analyze energy market prices to optimize your energy purchases with real-time data insights.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-800 shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-bold text-gold">Compliance with CO₂ Regulations</h4>
              <p className="mt-4 text-gray-400">
                Stay compliant with the latest CO₂ regulations by scraping government publications and asking compliance-specific questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
