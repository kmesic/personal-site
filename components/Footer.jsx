export default function Footer() {
  const today = new Date()
  return (
    <footer className="flex-shrink-0 flex flex-col items-center justify-center w-full h-16 text-white text-sm opacity-80">
      <span className="mx-10 text-center">
        🛠️ by me with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>
        . ☁️ with <strong>Netlify</strong>.
      </span>
      <span className="text-xs">&copy; {today.getFullYear()} Kenan Mesic</span>
    </footer>
  )
}
