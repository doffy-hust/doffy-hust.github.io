import Image from "next/image"

function Avatar(){

	return (
		<div className="mb-8 flex justify-start">
			<div className="relative">
				<Image
					src="/images/avatar.jpg"
					alt="Profile avatar"
					width={128}
					height={128}
					className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full object-cover border-2 border-slate-600 hover:border-slate-400 transition-colors duration-300 shadow-lg"
					priority
					sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
				/>
			</div>
		</div>
	)
}

export default Avatar;