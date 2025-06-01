"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface PagesContextType {
	activePage: {
		pageIndex: number;
		pageType: string;
		previousPageIndex?: number;
		previousPageType?: string;
		activePageScale: number;
		previousPageScale: number;
	};
	isPageAnimation: boolean;
	handleActivePage: (
		activeIndex: number,
		activeType: string,
		previousPageIndex: number,
		previousPageType: string
	) => void;
	handlePageAnimation: (isAnimating: boolean) => void;
}

// Create the context
const PagesContext = createContext<PagesContextType | undefined>(undefined);

// Create a provider component
export function PagesContextProvider({ children }: { children: ReactNode }) {
	const [activePage, setActivePage] = useState({
		pageIndex: 0,
		pageType: "home",
		previousPageIndex: 0,
		previousPageType: "home",
		activePageScale: 1,
		previousPageScale: 0.75,
	});

	const [isPageAnimation, setIsPageAnimation] = useState(false);

	const handleActivePage = (
		activeIndex: number,
		activeType: string,
		previousPageIndex: number,
		previousPageType: string
	) => {
		setActivePage((prevState) => ({
			...prevState,
			pageIndex: activeIndex,
			pageType: activeType,
			previousPageIndex: previousPageIndex,
			previousPageType: previousPageType,
		}));
	};

	const handlePageAnimation = (isAnimating: boolean) => {
		setIsPageAnimation(isAnimating);
	};

	return (
		<PagesContext.Provider
			value={{
				activePage,
				isPageAnimation,
				handleActivePage,
				handlePageAnimation,
			}}
		>
			{children}
		</PagesContext.Provider>
	);
}

// Create a custom hook for using the context
export function usePagesContext() {
	const context = useContext(PagesContext);
	if (context === undefined) {
		throw new Error(
			"usePagesContext must be used within a PagesContextProvider"
		);
	}
	return context;
}
