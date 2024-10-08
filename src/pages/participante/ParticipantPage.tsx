import { useParams } from 'react-router-dom';
import { useParticipantData } from '../../shared/api/useParticipantsData';
import { Header } from '../../shared/ui/Header';

export const ParticipantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Мы всегда вызываем хук, даже если id undefined. Проверка внутри хука.
  const { data, isLoading, error } = useParticipantData(id || '');
  // Проверка, если id не был передан
  if (!id) {
    return <div>Error: Invalid participant ID</div>;
  }
  // Обработка загрузки
  if (isLoading) return <div>Loading...</div>;
  // Обработка ошибки
  if (error) return <div>Error loading participant details</div>;
  // Проверка наличия данных
  if (!data) {
    return <div>No participant data</div>;
  }
  return (
    <div className="w-[1440px] h-[700px] flex flex-col items-start overflow-hidden">
      <Header/>
      <div className="pl-16 pt-24 pb-[169px] h-[600px]">
        <div className="flex justify-between bg-darkBackground w-full max-w-[700px] rounded-lg relative">
          <div className="flex flex-col text-white text-h3 font-bebas uppercase">
            <h1 className="text-5xl font-normal">Personal Data</h1>
            <div className="mt-12">
              <p className="block h-[26px] font-normal">Name</p>
              <p className="text-orange-darkOrange text-4xl mt-2">{data.username}</p>
            </div>
            <div className="mt-[22px]">
              <p className="block h-[26px] font-normal">Email</p>
              <p className="text-orange-darkOrange text-4xl mt-2">{data.email}</p>
            </div>
            <div className="mt-[22px]">
              <p className="block h-[26px] font-normal">Wallet</p>
              <p className="text-orange-darkOrange text-4xl break-all mt-2">{data.address}</p>
            </div>
          </div>
        </div>

        <div className="relative right-[-136%] top-[-435px] w-[650px] h-[1350px] flex justify-center items-center mt-[35px]">
        <div className=" absolute right-[-16%] top-[-435px] w-[650px] h-[1350px] flex justify-center items-center">
          <div
            className="absolute w-[526px] h-[526px] rounded-full border-[#1c1c1f] border-2"
            style={{
              background: 'radial-gradient(circle, darkBackground 60%, #1c1c1e 80%)',
            }}
          ></div>
          <div
            className="absolute w-[532px] h-[532px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(61, 56, 58, 0.7), rgba(0,0,0,0.1))',
              filter: 'blur(8px)',
            }}
          ></div>
          <div
            className="absolute w-[486px] h-[486px] rounded-full bg-[darkBackground]"
            style={{
              background: 'radial-gradient(circle, darkBackground, darkBackground)',
              filter: 'blur(6px)',
            }}
          >
          </div>
          <div className="absolute w-[446px] h-[446px] rounded-full bg-[#1E1E20]" />
          <div className="absolute w-[384px] h-[384px] rounded-full border-2 border-[#323232] bg-[#1E1E20]" />
          <div className="absolute w-[370px] h-[370px] rounded-full border-2 border-[#323232] bg-[#1E1E20]" />

          <img
            src="/planet.png"
            alt="Planet"
            className="relative w-full max-w-[320px] z-[10]"
          />

            <svg
              className="absolute z-[20] right-[-10%]" 
              width="486"
              height="486"
              viewBox="0 0 486 486"
              overflow="visible"
            >
              {/* Полукруг */}
            <path
              d="
                M 95,0
                A 103,103 0 0,1 95,486
              "
              stroke="#E75626"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="93" cy="0" r="3" fill="#E75626" />
            <circle cx="243" cy="486" r="3" fill="#E75626" />
            <circle cx="93" cy="486" r="3" fill="#E75626" />
          </svg>
        </div>
      </div>
    </div>
    </div>
  );
};
