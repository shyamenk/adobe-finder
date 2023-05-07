import { FC, useLayoutEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiOutlineSun, HiMoon } from 'react-icons/hi';

const ThemeButton: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const iconProps: React.SVGProps<SVGSVGElement> = {
    className: 'w-5 h-5 dark:text-secondary text-primary',
  };

  if (resolvedTheme === 'dark') {
    iconProps.className += ' hover:animate-spin-slow';
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={handleToggleTheme}
    >
      {resolvedTheme === 'dark' ? (
        <HiOutlineSun {...iconProps} />
      ) : (
        <HiMoon {...iconProps} />
      )}
    </button>
  );
};

const ThemeToggleButton: FC = () => {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <ThemeButton /> : null;
};

export default ThemeToggleButton;
