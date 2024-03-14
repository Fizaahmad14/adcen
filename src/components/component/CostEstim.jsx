import { Button } from "@/components/ui/button";

export function CostEstim() {
  return (
    <div className="bg-white text-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Cost Estimation</h2>
      <div className="flex">
        <div className="w-1/3 pr-4">
          <h3 className="font-semibold mb-2">
            National University of Computer and Emerging Sciences
          </h3>
          <nav className="space-y-1">
            <Button className="flex items-center justify-start w-full text-left">
              <BookIcon className="mr-2" />
              Tuition{"\n"}
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <UtensilsIcon className="mr-2" />
              Food{"\n"}
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <BedIcon className="mr-2" />
              Hostel{"\n"}
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <BusIcon className="mr-2" />
              Transport{"\n"}
            </Button>
          </nav>
        </div>
        <div className="w-2/3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Tuition</span>
              <span>Rs. 164,000</span>
            </div>
            <div className="flex justify-between">
              <span>Food</span>
              <span>Rs. 9,000</span>
            </div>
            <div className="flex justify-between">
              <span>Hostel</span>
              <span>Rs. —</span>
            </div>
            <div className="flex justify-between">
              <span>Transport</span>
              <span>Rs. 4,500</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rs. 177,500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function BusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}
