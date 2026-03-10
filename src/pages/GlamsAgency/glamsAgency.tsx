import { Link } from "react-router-dom";

export default function AgencyModel() {
  const models = [
    {
      src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
      alt: "Baby Model",
      path: "/baby-model",
    },
    {
      src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
      alt: "Kid Model",
      path: "/kid-model",
    },
    {
      src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-3_xnb3t0.png",
      alt: "Kid Model 2",
      path: "/kid-model-2",
    },
  ];

  return (
    <section className="h-screen bg-[#d9d9d9] flex flex-col justify-end px-12 pb-4">
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-[25px] tracking-tight font-medium mb-2">
          GLAMS AGENCY MODEL
        </h2>
        <div className="h-[1px] bg-black"></div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-3 gap-8 justify-center items-center mx-auto">
        {models.map((model, index) => (
          <Link key={index} to={model.path}>
            <div className="w-[590px] h-[700px] overflow-hidden group cursor-pointer">
              <img
                src={model.src}
                alt={model.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
