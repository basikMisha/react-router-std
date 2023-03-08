import { useParams } from "react-router-dom";

function Editpost() {
    const {id} = useParams();
  return (
    <div>Edit post {id}</div>
  )
}

export default Editpost;