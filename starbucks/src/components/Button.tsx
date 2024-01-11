import { ButtonProps } from '../../types/Button';

export function GhostButton(props: ButtonProps) {
  return (
    <button className={'button ghost-btn ' + props.className ?? ''} {...props}>
      {props.label}
    </button>
  );
}
export function SolidButton(props: ButtonProps) {
  return (
    <button className={'button solid-btn ' + props.className ?? ''} {...props}>
      {props.label}
    </button>
  );
}
