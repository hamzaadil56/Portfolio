"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
	mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("dark");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Set mounted first to prevent hydration issues
		setMounted(true);

		// Check for saved theme preference or default to 'dark'
		const savedTheme = localStorage.getItem("theme") as Theme;
		if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
			setTheme(savedTheme);
		} else {
			// Check system preference only if no saved preference
			const systemPrefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setTheme(systemPrefersDark ? "dark" : "light");
		}
	}, []);

	useEffect(() => {
		if (mounted) {
			// Update localStorage
			localStorage.setItem("theme", theme);

			// Update document class with optimized approach
			const root = document.documentElement;
			if (theme === "dark") {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}
		}
	}, [theme, mounted]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	// Return a simple div during SSR to prevent hydration mismatch
	if (!mounted) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900" />
		);
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
