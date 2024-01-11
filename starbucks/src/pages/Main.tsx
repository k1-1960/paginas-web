import { GhostButton } from '../components/Button';
import { Ad } from '../components/Ad';

export default function MainPage() {
  return (
    <section>
      <Ad
        bg='[var(--colorHouseGreen)]'
        first={
          <img src='/imgs/137-88117.webp' className='w-[50%] portrait:w-full' />
        }
        second={
          <div className='flex flex-col justify-center items-center w-full px-24 portrait:px-8 portrait:py-6'>
            <h1 className='w-full flex justify-center font-semibold text-2xl  text-white pb-7'>
              Gift cards keep on giving
            </h1>
            <a
              className='w-[90%] text-lg text-center text-white pb-7'
              style={{
                lineHeight: '2rem',
              }}
            >
              Join Starbucks Rewards and start earning free drinks & food when
              you use gift cards in the app. (Yes, really!)*
            </a>
            <GhostButton
              label='Join for free'
              style={{
                padding: '0.3em 1em',
                borderColor: 'white',
                color: 'white',
                fontSize: 'medium',
              }}
            />
          </div>
        }
      />
      <Ad
        bg='[#b2b267]'
        first={
          <div className='flex flex-col justify-center items-center w-full px-24 portrait:px-8 portrait:py-6'>
            <h1
              className='w-full flex justify-center font-semibold text-5xl text-[var(--colorHouseGreen)] pb-6'
              style={{
                letterSpacing: '0.2rem',
              }}
            >
              Pass the pistachios
            </h1>
            <a
              className='w-full text-2xl portrait:text-xl text-center text-[var(--colorHouseGreen)] pb-6'
              style={{
                lineHeight: '2.25rem',
              }}
            >
              Your favorite winter duo is back: the Pistachio Latte and
              Pistachio Cream Cold Brew.
            </a>
            <GhostButton
              label='Order now'
              style={{
                padding: '0.3em 1em',
                borderColor: 'var(--colorHouseGreen)',
                color: 'var(--colorHouseGreen)',
                fontSize: 'medium',
              }}
            />
          </div>
        }
        second={
          <img src='\imgs\137-88120.jpg' className='w-[50%] portrait:w-full' />
        }
      />
    </section>
  );
}
