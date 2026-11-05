import Link from 'next/link';
import { site } from '@/data/site';
export function Footer(){return <footer className="site-footer"><div className="footer-top"><Link className="brand brand-footer" href="/"><span className="brand-mark">IK</span><span>INARI<i>KICCHIN</i></span></Link><p>{site.brandLine}</p><div className="footer-links"><Link href="/menu/">Menu</Link><Link href="/story/">Our story</Link><Link href="/visit/">Find us</Link></div></div><small>© {new Date().getFullYear()} INARI KICCHIN. MADE FOR GOOD MOMENTS.</small></footer>}
