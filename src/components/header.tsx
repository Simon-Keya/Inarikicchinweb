'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { site } from '@/data/site';
import { motion } from 'framer-motion';
import { useState } from 'react';
export function Header() {
 const path = usePathname(); const [open,setOpen] = useState(false);
 return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><Link className="brand" href="/" aria-label="Inari Kicchin home"><span className="brand-mark">IK</span><span>INARI<i>KICCHIN</i></span></Link><nav className="main-nav" aria-label="Main navigation">{site.nav.map(item=><Link key={item.href} href={item.href} className={path===item.href || (item.href!=='/' && path.startsWith(item.href))?'active':''}>{item.label}{(path===item.href || (item.href!=='/' && path.startsWith(item.href)))&&<motion.span className="nav-indicator" layoutId="nav-indicator"/>}</Link>)}</nav><div className="header-actions"><ThemeToggle/><Link className="header-cta" href="/menu/">Explore menu <ArrowUpRight size={15}/></Link></div><Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger asChild><button className="nav-toggle" aria-label="Open navigation"><Menu/></button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="sheet-overlay"/><Dialog.Content className="mobile-sheet"><div className="sheet-heading"><Link className="brand" href="/" onClick={()=>setOpen(false)}><span className="brand-mark">IK</span><span>INARI<i>KICCHIN</i></span></Link><Dialog.Close asChild><button className="theme-toggle" aria-label="Close navigation"><X/></button></Dialog.Close></div><Dialog.Title className="sr-only">Site navigation</Dialog.Title><nav aria-label="Mobile navigation">{site.nav.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className={path===item.href?'active':''}>{item.label}<ArrowUpRight size={16}/></Link>)}</nav><ThemeToggle/></Dialog.Content></Dialog.Portal></Dialog.Root></header></>;
}
