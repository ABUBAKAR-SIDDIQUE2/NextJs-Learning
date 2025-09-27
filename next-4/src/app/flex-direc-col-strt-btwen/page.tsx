import { Fragment } from "react";
import Image from "next/image";

export default function Page() {
  return (
    <Fragment>
      <div className="card flex flex-col justify-between items-start">
        <Image
          src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg"
          alt="this"
          width={50}
          height={50}
        />
        <p>
          I just finished my trial period and was so amazed with the support and
          good results that I purchased the Pro version for my business.
        </p>
        <span>John Doe</span>
      </div>

      {/* <div className="flex flex-col justify-between items-start w-64 h-64 border p-4 ml-64">
        <div className="bg-blue-300 p-2">One</div>
        <div className="bg-blue-300 p-2">Two</div>
        <div className="bg-blue-300 p-2">Three</div>
      </div> */}
    </Fragment>
  );
}
