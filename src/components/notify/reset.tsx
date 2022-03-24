export interface Props {
  show: boolean;
}

function Notify(props: Props) {
  if (props.show) return <p className="notification">Reset!</p>;
  else return null; // doing this so Reset! isn't always displayed on the page
}

export default Notify;
