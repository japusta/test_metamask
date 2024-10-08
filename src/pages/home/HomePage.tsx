import React, { useState } from 'react';
import { ParticipantForm } from '../../features/participante/ui/ParticipantForm';
import { Participant, ParticipantTable } from '../../features/participante/ui/ParticipantTable';
import { Header } from '../../shared/ui/Header';
import { MainSection } from '../../shared/ui/MainSection';
import { useParticipantsData } from '../../shared/api/useParticipantsData';

export const HomePage: React.FC = () => {
  const { data, fetchNextPage, hasNextPage } = useParticipantsData();
  const [userAdded, setUserAdded] = useState<Participant | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Функция для обработки регистрации участника
  const handleRegistration = (participantData: Omit<Participant, 'id'>) => {
    const newParticipant = { ...participantData, id: Date.now() }; // Генерируем уникальный ID
    setUserAdded(newParticipant);
    setIsFormSubmitted(true);
  };
  // Функция удаления только своей записи
  const handleDelete = (id: number) => {
    if (userAdded && userAdded.id === id) {
      setUserAdded(null); // Удаляем запись только текущего пользователя
    }
  };

  return (
    <div className="min-h-screen w-[1440px] bg-darkBackground text-white p-0">
      <Header />
      <MainSection />
      <div className="flex flex-row	 mt-12 h-[797px]">
        {/* Форма регистрации */}
        <ParticipantForm 
          onSubmit={handleRegistration} 
          isListed={Boolean(userAdded)} 
          onListMeClick={() => {}} // Логика добавления пользователя в таблицу
        />
        {/* Таблица отображается только после отправки формы */}
        {isFormSubmitted && (
          <ParticipantTable
            participants={[userAdded, ...(data?.pages?.flatMap(page => page.items) || [])]} 
            onDelete={handleDelete}
            userWallet={userAdded?.address || ''}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        )}
      </div>
    </div>
  );
};
