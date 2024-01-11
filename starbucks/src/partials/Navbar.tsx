import { Location } from '../components/icons';
import { StarBucksIcon } from '../components/icons/StarbucksIcon';
import { GhostButton, SolidButton } from '../components/Button';

export function Navbar() {
  let tab = location.pathname;

  return (
    <div className='navbar'>
      <div className='brand'>
        <a href={location.origin}>
          <StarBucksIcon size={'3.125rem'} />
        </a>
      </div>
      <div className='navigation portrait:hidden'>
        <ul className='nav-links'>
          <a
            href='/menu'
            className={'nav-link ' + (tab === '/menu' ? 'nav-link-active' : '')}
          >
            Menu
          </a>
          <a
            href='/rewards'
            className={
              'nav-link ' + (tab === '/rewards' ? 'nav-link-active' : '')
            }
          >
            Rewards
          </a>
          <a
            href='/gift-cards'
            className={
              'nav-link ' + (tab === '/gift-cards' ? 'nav-link-active' : '')
            }
          >
            Gift Cards
          </a>
        </ul>
        <ul className='nav-actions'>
          <div className='find-store'>
            <Location
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            />
            <a
              style={{
                display: 'flex',
                fontWeight: '600',
                fontSize: '14px',
                flexDirection: 'column',
                justifyContent: 'center',
                textWrap: 'nowrap',
              }}
            >
              Find a store
            </a>
          </div>
          <div className='nav-buttons'>
            <GhostButton label='Sign in' />
            <SolidButton label='Join now' />
          </div>
        </ul>
      </div>
    </div>
  );
}
