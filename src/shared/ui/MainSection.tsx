export const MainSection: React.FC = () => {
  return (
    <section className="bg-darkBackground text-white w-full max-w-[1440px] mx-auto px-16 h-[700px] flex items-center">
      {/* Левая часть с текстом */}
      <div className="w-full z-[20] relative mb-[200px] flex items-start flex-col">
        {/* Основной слой текста - белый */}
        <h1 className="tracking-[.03em] font-semibold w-[1007px] h-[120px] text-[112px] leading-[78px] font-bebas absolute top-[20px] left-0 whitespace-nowrap text-white">
          EXPLORE YOUR OWN PLANET
        </h1>
        <h1 className="tracking-[.0055em] font-semibold w-[1007px] h-[120px] text-[120px] leading-[155px] font-bebas absolute top-[100px] left-0 whitespace-nowrap text-white">
          IN <span className="stroke-text font-thin">OUR NEW</span> METAVERSE
        </h1>
        {/* Второй слой текста - частично закрашенный оранжевым */}
        <h1
          className="tracking-[.03em] font-semibold w-[1007px] h-[120px] text-[112px] leading-[78px] font-bebas absolute top-[20px] left-0 whitespace-nowrap text-orange-darkOrange"
          style={{
            clipPath: 'circle(160.5px at 830.9px 80px)',
          }}
        >
          EXPLORE YOUR OWN PLANET
        </h1>
        <h1
          className="tracking-[.0055em] font-semibold w-[1007px] h-[120px] text-[120px] leading-[155px] font-bebas absolute top-[100px] left-0 whitespace-nowrap text-orange-darkOrange"
          style={{
            clipPath: 'circle(123px at 796px 18px)',
          }}
        >
          IN OUR NEW METAVERSE
        </h1>
        {/* Текст снизу */}
        <p className="absolute top-[285px] left-0 w-[421px] h-[95px] text-body leading-[19.2px] font-normal mt-0 font-avenir">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Правая часть с планетой */}
      <div className="w-1/2 relative right-[20%] flex justify-center items-center">
        {/* Круговые линии вокруг планеты */}

        <div
          className="absolute w-[526px] h-[526px] rounded-full border-[#1c1c1f] border-2"
          style={{
            background: "radial-gradient(circle, #171719 60%, #1c1c1e 80%)",
          }}
        ></div>
        <div
          className="absolute w-[532px] h-[532px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(61, 56, 58, 0.7), rgba(0,0,0,0.1))",
            filter: "blur(8px)"
          }}
        ></div>
        <div
          className="absolute w-[486px] h-[486px] rounded-full bg-[#171719]"
          style={{
            background:
              "radial-gradient(circle, #171719, #171719)",
            filter: "blur(6px)"
          }}
        ></div>
        <div
          className="absolute w-[446px] h-[446px] rounded-full bg-[#1E1E20]"
        ></div>
        <div className="absolute w-[384px] h-[384px] rounded-full border-2 border-grey-fewBlack bg-[#1E1E20]" />
        <div className="absolute w-[370px] h-[370px] rounded-full border-2 border-grey-fewBlack bg-[#1E1E20]" />
        {/* Изображение планеты */}
        <img
          src={`${process.env.PUBLIC_URL}/planet.png`}
          alt="Planet"
          className="relative w-full max-w-[320px] z-[10]"
        />
        {/* Оранжевая линия с точками */}
        <svg
          className="absolute z-[20] right-[-5%]" // Немного корректируем смещение вправо
          width="486"
          height="486"
          viewBox="0 0 486 486"
          overflow="visible"
        >
          {/* Полукруг */}
          <path
            d="
              M 243,0 
              A 243,243 0 0,1 243,486
            "
            stroke="#E75626"
            strokeWidth="1"
            fill="none"
          />
          {/* Точки на круге */}
          <circle cx="486" cy="243" r="3" fill="#E75626" />
          <circle cx="243" cy="486" r="3" fill="#E75626" />
          <circle cx="243" cy="0" r="3" fill="#E75626" />
        </svg>
        {/* Блок с текстом Q1 2022 и точкой */}
        <div className="w-20 h-[30px] absolute top-[-97px] right-[46.8%] flex items-center justify-center bg-white text-black py-2 rounded-full shadow-md">
          <span className="text-body0 color-[#171719] font-bebas font-bold pr-2 pl-3">Q1 2022</span>
          <div className=" relative flex justify-center items-center pr-[9px]">
            <div className="w-3 h-3 rounded-full bg-[orange-darkOrange] "></div>
            <div className="absolute inset-0 w-[12px] h-[12px] rounded-full bg-white shadow-md"></div>
          </div>
        </div>
        {/* Блок Roadmap Stats */}
        <div className="absolute top-[10px] left-[118%] text-white z-[20] flex flex-col items-center">
          <h2 className="font-bebas font-normal text-High font-bold mb-[42px] w-[169px] h-[31px]">ROADMAP STATS</h2>
          <div className="relative space-y-2 w-full">
            {/* Каждый элемент статистики */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="w-[72px] h-[28px] font-bebas mb-3 text-Med text-orange-darkOrange font-normal">12, 345</p>
                <p className="w-[109px] h-[22px] font-bebas font-normal text-body1 whitespace-nowrap">LOREM IPSUM DOLOR</p>
                {index < 2 && (
                  <hr className="w-[199px] border-t border-grey mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
