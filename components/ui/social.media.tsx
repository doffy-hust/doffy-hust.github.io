import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import Link from "next/link"
import {personalInfo} from "@/lib/config"

function LinkIcon({href, type}: {href: string; type: string}){
	let icon = <Github className="h-6 w-6"></Github>
	let label = "GitHub (open in a new tab)"
	if (type == "linkedin"){
		icon = <Linkedin className="h-6 w-6"></Linkedin>
		label = "Linkedin (open in a new tab)"
	} else if (type == "email"){
		icon = <Mail className="h-6 w-6"></Mail>
		label = "Email"
		href = `mailto:${personalInfo.email}`
	} else if (type == "researchgate"){
		icon = <BookOpen className="h-6 w-6"></BookOpen>
		label = "Research Gate (open in a new tab)"
	}

	return (
		<Link
			className="block hover:text-slate-200 transition-colors duration-200"
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={label}
		>
			{icon}
		</Link>
	)
}

function SocialMedia(){
	const social = personalInfo.social;

	return (
		<ul className="ml-1 mt-8 flex items-center justify-start" aria-label="Social media">
			{social.map((item, index) => {
				return (
					<li className="mr-5 text-xs shrink-0" key={index}>
						<LinkIcon href={item.link} type={item.id}></LinkIcon>
					</li>
				)
			})}
		</ul>
	)
}

export default SocialMedia