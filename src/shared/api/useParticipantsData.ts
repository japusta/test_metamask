import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Participant } from '../../features/participante/ui/ParticipantTable';

// Функция для запроса данных участников с сервера
export const fetchParticipants = async ({ pageParam = 0 }) => {
  const { data } = await axios.get('https://new-backend.unistory.app/api/data', {
    params: { page: pageParam, perPage: 50 }, // Увеличиваем параметр page на 1
  });
  return data;
};

// Функция для получения данных участника по ID
export const fetchParticipantById = async (id: string): Promise<Participant> => {
  const { data } = await axios.get(`https://new-backend.unistory.app/api/data/id/${id}`);
  return data;
};

// Хук для работы с бесконечной прокруткой
export const useParticipantsData = () => {
  return useInfiniteQuery({
    queryKey: ['participants'],
    queryFn: fetchParticipants,
    getNextPageParam: (lastPage, pages) => {
      const { meta } = lastPage;
      if (meta.currentPage < meta.totalPages) {
        return meta.currentPage + 1; // Возвращаем номер следующей страницы корректно
      }
      return undefined; // Нет больше страниц для загрузки
    },
    initialPageParam: 0, // Начальное значение для первой страницы
  });
};

// Хук для запроса данных конкретного участника
export const useParticipantData = (id: string) => {
  return useQuery<Participant>({
    queryKey: ['participant', id],
    queryFn: () => fetchParticipantById(id), 
    enabled: !!id, // Запрос только при наличии id
  });
};