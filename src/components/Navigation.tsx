import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Experience", path: "/experience" },
	{ name: "Projects", path: "/projects" },
	{ name: "Skills", path: "/skills" },
	{ name: "PORs", path: "/pors" },
	{ name: "Achievements", path: "/achievements" },
	{ name: "Resume", path: "/resume" },
	{ name: "Contact", path: "/contact" },
];

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showPreview, setShowPreview] = useState(false);

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<NavLink to="/" activeClassName="text-primary">
							<img
								src="/Aarav-Maheshwari.png"
								alt="Logo"
								className="w-10 h-10 rounded-full object-cover border-2 border-primary shadow-md cursor-pointer"
								onClick={(e) => {
									e.preventDefault();
									setShowPreview(true);
								}}
							/>
						</NavLink>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center gap-6">
							{navItems.map((item) => (
								<NavLink
									key={item.path}
									to={item.path}
									className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
									activeClassName="!text-primary"
								>
									{item.name}
								</NavLink>
							))}
						</div>

						{/* Mobile Menu Button */}
						<Button
							variant="ghost"
							size="icon"
							className="lg:hidden"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? <X /> : <Menu />}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="lg:hidden bg-card/95 backdrop-blur-lg border-t border-border/50"
						>
							<div className="container mx-auto px-6 py-4 flex flex-col gap-4">
								{navItems.map((item) => (
									<NavLink
										key={item.path}
										to={item.path}
										onClick={() => setIsOpen(false)}
										className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
										activeClassName="!text-primary"
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>

			{/* Image Preview Modal */}
			<AnimatePresence>
				{showPreview && (
					<motion.div
						className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setShowPreview(false)}
					>
						<motion.img
						src="/Aarav-Maheshwari.png"
							alt="Large Preview"
							className="max-w-full max-h-[80vh] rounded-lg border-4 border-primary shadow-2xl"
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							onClick={(e) => e.stopPropagation()}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
