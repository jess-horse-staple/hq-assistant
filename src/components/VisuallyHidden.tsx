// These styles will make sure the component
// is not visible, but will still be announced
// by screen readers.

const hiddenStyles = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

export function VisuallyHidden({ children }) {
  return (
    <span style={hiddenStyles}>
      {children}
    </span>
  );
};