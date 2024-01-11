import { StickyProps } from '../../types/Sticky';

export function Sticky(props: StickyProps) {
  return (
    <div
      className='sticky'
      style={{
        top: props.top || '0px',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}
