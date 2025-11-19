import './PieChart.css'

function PieChart() {
  return (
    <>
    <div className='locationBar'>
        <select className='locationSelect'>
            {/* set options dynamically based on available locations */}
            <option value="all">All Locations</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
        </select>
    </div>
    <div className="pie-chart">
      <h2>Pie Chart Component</h2>
      {/* Pie chart implementation goes here */}
    </div>
    </>
  )
}

export default PieChart