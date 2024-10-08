import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 

export interface Participant {
  id: number;
  username: string;
  email: string;
  address: string;
}

interface ParticipantTableProps {
  participants: Participant[] | null;
  onDelete: (id: number) => void;
  userWallet?: string | null;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

export const ParticipantTable: React.FC<ParticipantTableProps> = ({
  participants,
  onDelete,
  userWallet,
  fetchNextPage,
  hasNextPage,
}) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate(); 

  // IntersectionObserver для реализации бесконечной прокрутки
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage(); // Загружаем следующую страницу
        }
      },
      {
        root: null, // В качестве корня используется viewport
        rootMargin: '20px', // Увеличенный отступ для триггера загрузки
        threshold: 0.1, // Срабатывает при пересечении 10% элемента
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current); // Для подгрузки новых данных
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current); // Очищаем observer при размонтировании
      }
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="w-full max-w-[695px] ml-[144px] h-[534px] overflow-y-auto relative pr-[27px]">
      <span className="block h-[37px] font-bebas text-h1 font-normal uppercase">
        Participation listing (enable only for participants)
      </span>
      <table className="w-full mt-9 text-left bg-darkBackground rounded-lg overflow-hidden relative">
        <thead>
          <tr className="text-white uppercase h-[38px]">
            <th className=" font-bebas font-normal text-h3 w-[200px]">Name</th>
            <th className="font-bebas font-normal text-h3 pl-[30px]">Email</th>
            <th className="font-bebas font-normal text-h3 pl-[79px]">Wallet</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white">
          {participants?.map((participant) => {
            if (!participant) return null;
            const isClient = userWallet === participant.address;

            return (
              <React.Fragment key={participant.id}>
                {isClient && (
                  <tr className="h-[2px] bg-orange-darkOrange" key={`separator-${participant.id}`} />
                )}
                <tr
                  key={participant.id}
                  className={`max-h-[25px] text-body0 font-avenir font-normal text-white relative ${
                    isClient ? '' : 'cursor-pointer'
                  }`} // Убираем cursor-pointer, если запись клиентская
                  onClick={() => {
                    if (!isClient) navigate(`/participant/${participant.id}`);
                  }}
                >
                  <td className={`py-4 text-body0 truncate ${isClient ? 'text-orange-darkOrange' : ''}`}>
                    {participant.username || 'No Name'}
                  </td>
                  <td
                    className={`pl-[30px] py-4 max-w-[200px] w-[180px] text-body0 truncate overflow-hidden ${
                      isClient ? 'text-orange-darkOrange' : ''
                    }`}
                  >
                    {participant.email}
                  </td>
                  <td
                    className={`pl-[79px] max-w-[235px] w-[195px] text-body0 py-4 truncate ${
                      isClient ? 'text-orange-darkOrange' : ''
                    }`}
                  >
                    {participant.address || 'No Wallet'}
                  </td>
                  {isClient && (
                    <td className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <button
                        className="ml-2 text-white hover:text-orange-darkOrange transition"
                        onClick={(e) => {
                          e.stopPropagation(); // Останавливаем событие клика, чтобы не происходило перенаправление
                          onDelete(participant.id);
                        }}
                      >
                        &#10005; {/* Крестик */}
                      </button>
                    </td>
                  )}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {hasNextPage && <div ref={observerRef} className="h-10" />} {/*  Для бесконечной прокрутки */}
    </div>
  );
};
