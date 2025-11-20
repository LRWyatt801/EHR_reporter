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
        <svg width="200" height="200" viewBox="0 0 100 100">
        {/* <!-- Circle for background or full pie --> */}
        <circle cx="50" cy="50" r="40" fill="#eee"/>
        {/* <!-- Path for a slice --> */}
        <path d="M50,50 L50,10 A40,40 0 0,1 84.6,30.3 Z" fill="red"/>
        {/* <!-- Add more paths for other slices --> */}
        </svg>
    </div>
    </>
  )
}

export default PieChart