import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function SearchBox() {
	return (
		<div className="flex w-full h-10 max-w-sm items-center space-x-2">
			<Input type="search" placeholder="Search" />
			<Button type="submit" className={cn("p-2")}>
				<ArrowUpRight />
			</Button>
		</div>
	);
}

export default SearchBox;
