"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

import {personalInfo} from "@/lib/config"
import Avatar from "@/components/ui/avatar"
import Navigation from "./components/ui/navigation"
import Experience from "./components/ui/experience"
import SocialMedia from "@/components/ui/social.media"
import Projects from "@/components/ui/projects"
import ProfileDescription from "@/components/ui/profile.description"

import Footer from "@/components/ui/footer"

export default function Component() {

	const [activeSection, setActiveSection] = useState("about")

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "education", "experience", "projects"]
			const scrollPosition = window.scrollY + 200 // Increased offset for better detection

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i]
				const element = document.getElementById(section)
				if (element) {
					const offsetTop = element.offsetTop
					if (scrollPosition >= offsetTop) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		// Throttle scroll events for better performance
		let ticking = false
		const throttledHandleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll()
					ticking = false
				})
				ticking = true
			}
		}

		window.addEventListener("scroll", throttledHandleScroll)
		handleScroll() // Call once to set initial state

		return () => window.removeEventListener("scroll", throttledHandleScroll)
	}, [])

	return (
		<div className="min-h-screen bg-slate-900 text-slate-300">
			<div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					{/* Left Column - Fixed on large screens */}
					<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
						<div>
							{/* Avatar - Left-aligned on all screen sizes */}
							<Avatar></Avatar>

							<div className="text-left">
								<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
									<Link href="/">{personalInfo.name}</Link>
								</h1>
								<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
									{personalInfo.title}
								</h2>

								<p className="mt-4 max-w-xs leading-normal">
									{personalInfo.bio}
								</p>
							</div>

							{/* Navigation with improved scroll spy */}
							<Navigation activeSection={activeSection}></Navigation>
						</div>

						{/* Social Links */}
						<SocialMedia></SocialMedia>
					</header>

					{/* Right Column - Scrollable content */}
					<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
						{/* About Section */}
						<ProfileDescription></ProfileDescription>

						<Experience></Experience>

						<Projects></Projects>

						<Footer></Footer>
					</main>
				</div>
			</div>
		</div>
	)
}
