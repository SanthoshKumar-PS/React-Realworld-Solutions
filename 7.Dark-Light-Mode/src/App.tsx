import { useEffect } from 'react'


const getLocalTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};


function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function App() {
  useEffect(() => {
    getLocalTheme();
  }, []);

  return (
    <div className='min-h-screen flex flex-col gap-4 justify-center items-center bg-[var(--color-bg)] text-[var(--color-text)]'>
      <h1 className='text-bold p-10 rounded-lg text-2xl bg-[var(--color-secondary)]'>Santhosh</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded border border-[var(--color-text)] bg-transparent text-[var(--color-text)]"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
