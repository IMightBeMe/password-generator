import { Props } from './reset';

function Copied(props: Props) {
  if (props.show) return <p className="notification">Copied!</p>;
  else return null;
}

export default Copied;
