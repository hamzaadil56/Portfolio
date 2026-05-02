"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
	to: number;
	suffix?: string;
	prefix?: string;
	duration?: number;
	className?: string;
};

export function StatCounter({
	to,
	suffix = "",
	prefix = "",
	duration = 1400,
	className,
}: Props) {
	const ref = useRef<HTMLSpanElement>(null);
	const [val, setVal] = useState(0);
	const reduce = useReducedMotion();

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (reduce) {
			setVal(to);
			return;
		}

		const obs = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					const start = performance.now();
					const tick = (now: number) => {
						const t = Math.min(1, (now - start) / duration);
						const eased = 1 - Math.pow(1 - t, 4);
						setVal(Math.round(to * eased));
						if (t < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
					obs.disconnect();
				}
			},
			{ threshold: 0.4 },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, [to, duration, reduce]);

	return (
		<span ref={ref} className={className}>
			{prefix}
			<span className="tnum">{val.toLocaleString()}</span>
			{suffix}
		</span>
	);
}
