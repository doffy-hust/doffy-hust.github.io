
function ProfileDescription(){
	return (
		<section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
			</div>

			<div>
				<p className="mb-4">
					I&#39;m a full-stack engineer with a maker&#39;s mindset — curious, detail-driven,
					and quietly obsessed with building things that feel just right.
					Whether shaping product logic or fine-tuning the UI, I care about how things work and how they feel.
				</p>

				<p className="mb-4">
					I find joy in clean interfaces, thoughtful flows, and software that solves real problems without shouting.
					I enjoy working in fast-moving teams where ideas become products and experiments lead to insights.
				</p>

				<p className="mb-4">
					Outside of work, I stay grounded through movement and play — running, badminton, billiards — and get lost in books that stretch my thinking beyond the screen.
				</p>
			</div>
		</section>
	)
}

export default ProfileDescription