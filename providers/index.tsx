"use client";

import { PagesContextProvider } from "@/context/PagesContext";

export function Providers({ children }: { children: React.ReactNode }) {
	return <PagesContextProvider>{children}</PagesContextProvider>;
}
