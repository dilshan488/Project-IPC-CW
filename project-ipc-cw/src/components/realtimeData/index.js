import StartFirebase from "../firebaseConfig/index.js"
import React from "react"
import {ref, onValue} from "firebase/database"
import {Table} from "react-bootstrap"

const db = StartFirebase()

export class RealtimeData extends React.Component {
  constructor() {
    super()
    this.state = {
      tableData: []
    }
  }
  componentDidMount() {
    const dbRef = ref(db, "customer")

    onValue(dbRef, snapshot => {
      let records = []
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key
        let data = childSnapshot.val()
        records.push({"key": keyName, "data": data})
      })
      this.setState({tableData: records})
    })
  }

  render() {
    return (
      <Table className="container w-75" bordered striped variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Phone Number</th>
            <th>Date Of Birth</th>
          </tr>
        </thead>

        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.key}</td>
                <td>{row.data.Fullname}</td>
                <td>{row.data.Phonenumber}</td>
                <td>{row.data.dateofbirth}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
