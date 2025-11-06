import { useFetch } from "../hooks/useFetch"
// styles
import "./Articles.css"

//components
import EntryList from "../components/EntryList"
export default function Articles() {
  const { data, isPending, error } = useFetch("/db.json")

  return (
    <div className="articles">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      <h2 className="page-title">Koshobai's Latest</h2>
      {data && <EntryList entries={data.entries} />}
    </div>
  )
}
