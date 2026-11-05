'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';
import { useEffect, useState } from 'react';
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return <Button variant="ghost" size="icon" className="theme-toggle" aria-label="Colour theme" type="button"><Sun size={17}/></Button>;
  const dark = resolvedTheme === 'dark';
  return <Button variant="ghost" size="icon" className="theme-toggle" type="button" onClick={() => setTheme(dark ? 'light' : 'dark')} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</Button>;
}
