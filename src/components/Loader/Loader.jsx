import { Oval } from 'react-loader-spinner';

const LoaderStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
};

export default function Loader() {
  return (
    <div style={LoaderStyles}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </div>
  );
}
