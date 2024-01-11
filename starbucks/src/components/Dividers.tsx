import type { VerticalDividerProps } from '../../types/Dividers';

export function VerticalDivider(props: VerticalDividerProps) {
  return (
    <div
      style={{
        width: '0px',
        borderWidth: props.width ?? '0.1px',
        borderColor: props.color ?? 'rgba(0, 0, 0, 0.5)',
        borderStyle: 'solid',
      }}
    ></div>
  );
}
