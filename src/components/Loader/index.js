import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { StyledLoaderWrapper } from './style';

export default function StyledLoader(props) {
  return (
    <StyledLoaderWrapper>
      {props.message ? props.message : 'Loading...'}
      <Loader type={props.type ? props.type : 'Oval'} color="green" height={70} width={70} />
    </StyledLoaderWrapper>
  );
}
