import Image from "next/image";
import Label from "./label";
import Title from "./title";

export default function NewArrival() {

  const newArrivalData = [
    {
      type: "sale",
      image: "/property-1.png",
      title: "Modern apartment",
      address: "457 Avenue des Arts, 1000, Brussels",
      price: "€280,650",
      area: "80m²",
      bedroom: 1,
      bathroom: 1,
    },
    {
      type: "rent",
      image: "/property-2.png",
      title: "35m² studio",
      address: "47 Avenue des Tulipes, 1000, Brussels",
      price: "€550/month",
      area: "35m²",
      bedroom: 1,
      bathroom: 1,
    },
    {
      type: "sale",
      image: "/property-3.png",
      title: "Family apartment",
      address: "47 Avenue des Tulipes, 1000, Brussels",
      price: "€450,000",
      area: "80m²",
      bedroom: 1,
      bathroom: 1,
    },
  ]

  return (
    <div className="container">
      <Label>our new arrivals</Label>
      <Title className="mt-3">Discover our new arrivals</Title>

      <div className="flex gap-5 overflow-x-scroll min-w-max">
        {newArrivalData.map((data, i) => {
          return (
            <div key={i}>
              <div className="inline-block relative">
                <Image
                  height={392}
                  width={617}
                  src={data.image}
                  alt={data.image}
                  className="rounded-md"
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-b from-[#1E284D00] to-[#1E284D99] z-20" />

                <div className="absolute inset-0 z-30">
                  <div className="flex flex-col h-full p-4">
                    <div className="flex justify-between">
                      <div className="h-[34px] w-[88px] flex items-center justify-center bg-[#FFFFFF1A] rounded-full">
                        <div className="text-[12px] text-white font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
                          for {data.type}
                        </div>
                      </div>

                      <Image
                        height={26}
                        width={92.7}
                        src="/grade.png"
                        alt="grade.png"
                        className="rounded-md"
                        priority
                      />
                    </div>

                    <div className="flex gap-5 md:gap-0 flex-col md:flex-row md:justify-between mt-auto">
                      <CardBottomLabel
                        label="price"
                        data={data.price}
                        dataClass="text-[24px]"
                      />

                      <div className="flex gap-5">
                        <CardBottomLabel 
                          label="area"
                          data={data.area}
                        />

                        <CardBottomDivider />

                        <CardBottomLabel 
                          label="bedrooms"
                          data={data.bedroom}
                        />
                        
                        <CardBottomDivider />
                        
                        <CardBottomLabel 
                          label="bathrooms"
                          data={data.bathroom}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[12px] text-[#3C6AD4] font-manrope font-[800] leading-[150%] tracking-[5%] uppercase mt-3">
                for {data.type}
              </div>

              <div className="text-[24px] font-manrope font-[500] leading-[120%]">
                {data.title}
              </div>

              <div className="flex gap-2 items-center mt-3">
                <Image
                  height={20}
                  width={20}
                  src="/map-pin-icon.svg"
                  alt="map-pin-icon.svg"
                  className="rounded-md"
                  priority
                />
                <div className="text-[16px] text-[#3356C2] font-inter font-[500] leading-[150%]">
                  {data.address}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

function CardBottomLabel({
  className, label, labelClass, data, dataClass 
} : { 
  className?: string, label: string, labelClass?: string, data: any, dataClass?: string
}) {

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className={`text-[12px] text-[#C6DBF7] font-manrope font-[800] leading-[150%] tracking-[5%] uppercase ${labelClass}`}>
        {label}
      </div>
      <div className={`text-[16px] text-white font-inter font-[600] leading-[90%] ${dataClass}`}>
        {data}
      </div>
    </div>
  );
}

function CardBottomDivider({ className } : { className?: string }) {
  return (
    <div className="h-full w-[1px] bg-[#FFFFFF33]" />
  );
}
