export interface Props {
  show: boolean;
}

function Notify(props: Props) {
  return <>{props.show ? <p>Reset</p> : null}</>;
}

export default Notify;
