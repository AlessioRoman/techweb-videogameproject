import { pro, t1 } from "@/assets/imageIndex";

function Dashboard() {
	return (
		<div className="w-2/3 m-auto">
			<div className="relative isolate top-64">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
			<div className="text-center my-36">
				<h1 className="text-5xl font-bold">
					Welcome to the
					<span className="text-primary"> Gaming</span> house
				</h1>
			</div>
			<div className="flex px-5 my-40 gap-32 items-center">
				<img src={pro} className="h-[780px] rounded-2xl" alt="proplayer" />
				<div className="">
					<h1 className="font-semibold text-2xl mb-10">
						A word from our <span className="text-primary">Partners</span>
					</h1>
					<div>
						<div className="flex items-center space-x-4">
							<img src={t1} className="h-14 w-14 rounded-full" />
							<div className="space-y-2">
								<h6 className="h-4 font-semibold">T1 Pro Team</h6>
								<p className="h-4">- A paradise for gaming enthusiasts!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
