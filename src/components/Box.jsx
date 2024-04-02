import "./Box.css";

function Box({ data, loading }) {
  return (
    <div className="box">
      {data?.map((item, index) => (
        <>
          {loading ? <p>Loading......</p> :
            <>
              <h1>Quote: {item.quote}</h1>
              <p>Character: {item.character}</p>
            </>
          }
        </>
      ))}
    </div>
  );
}

export default Box;
