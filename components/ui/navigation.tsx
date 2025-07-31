
function Navigation({activeSection = "about"}){

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<nav className="nav hidden lg:block" aria-label="In-page jump links">
			<ul className="mt-16 w-max">
				<li>
					<button
						className="group flex items-center py-3 w-full text-left"
						onClick={() => scrollToSection("about")}
					>
						<span
							className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
								activeSection === "about" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
							}`}
						></span>
						<span
							className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-in-out group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
								activeSection === "about" ? "text-slate-200" : "text-slate-500"
							}`}
						>
							About
						</span>
					</button>
				</li>

				<li>
					<button
						className="group flex items-center py-3 w-full text-left"
						onClick={() => scrollToSection("experience")}
					>
						<span
							className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
								activeSection === "experience" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
							}`}
						></span>
						<span
							className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-in-out group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
								activeSection === "experience" ? "text-slate-200" : "text-slate-500"
							}`}
						>
							Experience
						</span>
					</button>
				</li>

				<li>
					<button
						className="group flex items-center py-3 w-full text-left"
						onClick={() => scrollToSection("projects")}
					>
						<span
							className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
								activeSection === "projects" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
							}`}
						></span>
						<span
							className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-in-out group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
								activeSection === "projects" ? "text-slate-200" : "text-slate-500"
							}`}
						>
							Projects
						</span>
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation