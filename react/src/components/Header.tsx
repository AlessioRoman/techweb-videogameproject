import { ModeToggle } from "./mode-toggle";

function Header() {
	return (
		<div className="py-3 px-5 ring-2 border-white">
			<div className="w-1/2 m-auto flex justify-between items-center">
				<h1>Header space</h1>
				<ModeToggle />
			</div>
		</div>
	);
}

export default Header;
