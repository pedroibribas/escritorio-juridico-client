import { RunAnimation, SpinAnimation } from "./styles";

const Loading = ({ animation }) => {
  switch (animation) {
    case 'run':
      return <RunAnimation />

    case 'spin':
      return <SpinAnimation />
      
    default:
      break;
  }
};

export { Loading };
