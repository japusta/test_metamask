import React from 'react';
import { Button } from '../../../shared/ui/Button';
import WalletConnect from '../../wallet/ui/WalletConnect';
import { useParticipantForm } from '../hooks/useParticipantForm';

interface RegistrationFormProps {
  onSubmit: (data: { username: string; email: string; address: string }) => void;
  isListed: boolean;
  onListMeClick: () => void;  
}

export const ParticipantForm: React.FC<RegistrationFormProps> = ({ onSubmit, isListed }) => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    isFormSubmitted,
    walletAddress,
    handleFormSubmit,
    handleListMeClick,
    errors, 
  } = useParticipantForm();

  return (
    <section className="w-[421px] ml-16">
      <div className="mb-9">
        <h2 className="font-bebas text-h1 font-normal text-orange-darkOrange w-[310px] h-[37px]">
          BETA TEST REGISTRATION
        </h2>
        <p className="mt-[18px] text-body1 font-normal max-w-lg font-avenir">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {!isFormSubmitted ? (
        <form onSubmit={handleFormSubmit} className="space-y-[18px] max-w-lg">
          {/* Поле для имени */}
          <div className="flex flex-col">
            <label className="text-h3 font-bebas font-normal mb-2" htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="We will display your name in participation list"
              className={`block bg-transparent border ${
                walletAddress ? 'focus:border-orange-darkOrange focus:outline-none' : 'border-white opacity-50 cursor-not-allowed'
              } text-body0 font-avenir font-normal pl-[18px] pr-[116px] py-3 rounded-[30px] placeholder:text-gray-500`}
              disabled={!walletAddress}
              required
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
          </div>

          {/* Поле для email */}
          <div className="flex flex-col">
            <label className="text-h3 font-bebas font-normal mb-2" htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="We will display your email in participation list"
              className={`block bg-transparent border ${
                walletAddress ? 'focus:border-orange-darkOrange focus:outline-none' : 'border-white opacity-50 cursor-not-allowed'
              } text-body0 font-avenir font-normal pl-[18px] pr-[116px] py-3 rounded-[30px] placeholder:text-gray-500`}
              disabled={!walletAddress}
              required
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
        </form>
      ) : (
        <div className="space-y-[22px] max-w-lg uppercase ">
          <div>
            <label className="block font-bebas font-normal text-h3 h-[25px] mb-2">Name</label>
            <p className="text-High font-bebas font-normal text-orange-darkOrange h-[38px]">{username}</p>
          </div>
          <div>
            <label className="block font-bebas font-normal text-h3 h-[25px] mb-2">Email</label>
            <p className="text-High font-bebas font-normal text-orange-darkOrange h-[38px]">{email}</p>
          </div>
        </div>
      )}

      {/* Кнопка */}
      <div className="mt-7 text-orange-darkOrange font-bebas font-bold text-[18px] w-[225px]">
        {walletAddress ? (
          !isFormSubmitted ? (
            <Button
              onClick={handleFormSubmit as unknown as () => void}
              disabled={!username || !email}
            >
              <span className="flex items-center justify-center text-[18px] font-bebas font-normal">GET EARLY ACCESS</span>
            </Button>
          ) : (
            <Button
              onClick={() => handleListMeClick(onSubmit, isListed)}
              disabled={isListed}
            >
              <span className="w-[118px] font-bebas font-normal text-[18px] ">LIST ME TO THE TABLE</span>
            </Button>
          )
        ) : (
          <>
            <WalletConnect />
            <span className="block mt-3 w-[225px] h-[44px] font-bebas font-normal text-white text-body0">You need to connect wallet before registration</span>
          </>
        )}
      </div>
    </section>
  );
};
