import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const buttonVariants = cva('inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', { variants: { variant: { primary: 'bg-[var(--red)] text-white hover:bg-[#A5142B]', outline: 'border border-[var(--line)] text-[var(--fg)] hover:border-[var(--red)]', ghost: 'text-[var(--fg)] hover:bg-[var(--surf)]' }, size: { default: 'px-4 py-3 text-xs', icon: 'h-9 w-9 rounded-full' } }, defaultVariants: { variant: 'primary', size: 'default' } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export function Button({ className, variant, size, ...props }: ButtonProps) { return <button className={cn(buttonVariants({ variant, size }), className)} {...props}/>; }
