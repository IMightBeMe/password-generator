import { Props } from './reset';

function Copied(props: Props) {
  return <>{props.show ? <p>Copied!</p> : null}</>;
}

export default Copied;
