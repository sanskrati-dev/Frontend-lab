function StudentInfo() {
  const name = "Sanskrati"
  const a = 10
  const b = 5
  const isPresent = true
  const subjects = ["HTML", "CSS", "React"]

  function greet() {
    return "Welcome to React!"
  }

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Sum: {a + b}</p>
      <p>Uppercase: {name.toUpperCase()}</p>
      <p>{greet()}</p>
      <p>Status: {isPresent ? "Present" : "Absent"}</p>
      <p>Subjects: {subjects.join(", ")}</p>
      <p>Today: {new Date().toLocaleDateString()}</p>
    </div>
  )
}

export default StudentInfo