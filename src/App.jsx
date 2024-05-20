export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const onClick = ({name}) => {
    alert(`${age}, ${grade}`)
    return;
  };

  
  const filteredStudents = students.filter(({age}) => number >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map(([name, age, grade], index) => {
          return <li key={index} className="overAgeStudent" onClick={()onClick({name})}> 
          {/* /*"배열이라서 id가 아닌 index로 key값을 주는건지..?" */}
            {/* <div>어떻게반환..???????????????????????</div> */}
          </li>
        })}
        {
      </ul>
    </div>
  );
}




