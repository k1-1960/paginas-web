import { GhostButton } from './Button';
import type { AdProps } from '../../types/Ad';

export function Ad(props: AdProps) {
  return (
    <div
      className={`flex  flex-row portrait:flex-col items-center w-full bg-${props.bg}  my-7`}
    >
      {props.first}
      {props.second}
    </div>
  );
}
